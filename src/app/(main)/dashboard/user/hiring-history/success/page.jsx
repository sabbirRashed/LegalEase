
import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
    FiCheckCircle,
    FiMail,
    FiArrowRight,
    FiHome,
} from 'react-icons/fi'


export default async function Success({ searchParams }) {
    const { session_id } = await searchParams

    if (!session_id) {
        throw new Error('Please provide a valid session_id (`cs_test_...`)')
    }


    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent'],
    })

    const customerEmail = session.customer_details?.email;
    const stripeSessionId = session.id;

    const stripePaymentIntentId =
        typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id



    if (session.status === 'open') {
        return redirect('/')
    }

    if (session.status === 'complete') {

        console.log('success:',
            stripeSessionId,
            stripePaymentIntentId,
            customerEmail);

        const transactionInfo = {
            requestId: "",
            clientUserId: "",
            clientName: "",
            lawyerProfileId: "",
            lawyerName: "",
            amount: "",
            paymentStatus: "Paid"

        }


        return (
            <main className="min-h-screen bg-slate-50 px-4 py-16">
                <div className="mx-auto flex max-w-2xl items-center justify-center">
                    <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">

                        {/* Success Icon */}
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                            <FiCheckCircle
                                className="h-12 w-12 text-emerald-500"
                                strokeWidth={1.7}
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Payment Successful!
                        </h1>

                        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                            Your payment has been successfully processed.
                            Your lawyer consultation request is now confirmed.
                        </p>

                        {/* Confirmation Email */}
                        <div className="mx-auto mt-8 flex max-w-md items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-left">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                                <FiMail className="h-5 w-5 text-slate-600" />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                    Confirmation sent to
                                </p>

                                <p className="mt-1 truncate text-sm font-semibold text-slate-800">
                                    {customerEmail}
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="my-8 border-t border-slate-100" />

                        {/* Buttons */}
                        <div className="flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/dashboard/user/hiring-history"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                            >
                                View Hiring History
                                <FiArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                <FiHome className="h-4 w-4" />
                                Back to Home
                            </Link>

                        </div>

                        {/* Footer */}
                        <p className="mt-8 text-xs text-slate-400">
                            Thank you for choosing LegalEase for your legal needs.
                        </p>
                    </div>
                </div>
            </main>
        )
    }

    return redirect('/dashboard/user/hiring-history')
}

