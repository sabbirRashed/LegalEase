"use client"

import { updateRequestStatus } from '@/lib/actions/request';
import { Button } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const RequestRejectBtn = ({ id }) => {
    const [isloading, setIsloading] = useState(false)

    const handleRejectBtn = async() => {
        setIsloading(true);

        try {
            const res = await updateRequestStatus(id, { status: "Rejected" });
        } catch {
            toast.error('Something went wrong!')
        } finally {
            setIsloading(false)
        }
    }

    return (
        <div>
            <Button
                onClick={handleRejectBtn}
                isDisabled={isloading}
                size='sm'
                variant='secondary'
                className="text-xs hover:text-rose-600 hover:bg-red-100 text-rose-500 transition-all duration-300"
            >
                {
                    isloading ? "Changing.." : "Reject"
                }
            </Button>
        </div>
    );
};

export default RequestRejectBtn;