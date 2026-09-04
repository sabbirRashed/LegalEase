import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { getUserSession } from '@/lib/core/session'
import { getHiringRequestById } from '@/lib/api/hiringRequest'

export async function POST(request) {
    try {
        const headersList = await headers()
        const origin = headersList.get('origin')

        const formData = await request.formData()
        const hiringRequestId = await formData.get("requestId");

        const hiringRequest = await getHiringRequestById(hiringRequestId);
        const {
            _id,
            clientUserId,
            clientName,
            lawyerProfileId,
            lawyerName,
            lawyerEmail,
            consultationRate,
        } = hiringRequest;

        const price = Number(consultationRate)


        if (!price || price <= 0) {
            return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
        }

        const user = await getUserSession()

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            customer_email: user?.email,
            metadata: {
                hiringRequestId,
                clientUserId,
                clientName,
                lawyerProfileId,
                lawyerName,
                lawyerEmail,
                consultationFee: consultationRate,

            },
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        unit_amount: price * 100,
                        product_data: {
                            name: "Consultation Fee"
                        }
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/dashboard/user/hiring-history/success?session_id={CHECKOUT_SESSION_ID}`,
            // Provide a name (for example, hosted_web_0001) to label this Checkout integration and measure its conversion independently
            // integration_identifier: '{{INTEGRATION_ID}}',
        });
        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}