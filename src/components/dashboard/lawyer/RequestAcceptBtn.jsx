"use client"
import { updateRequestStatus } from '@/lib/actions/request';
import { Button } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const RequestAcceptBtn = ({ id, }) => {
    const [isloading, setIsloading] = useState(false)

    const handleAcceptBtn = async () => {
        setIsloading(true);

        try {
            console.log("before:up", id);
            const res = await updateRequestStatus(id, { status: "Accept" });
        } catch {
            toast.error('Something went wrong! Please try again.')
        } finally {
            setIsloading(false)
        }
    }

    return (
        <div>
            <Button
                isPending={isloading}
                onClick={handleAcceptBtn}
                variant='secondary'
                size='sm'
                className="text-green-500 text-xs hover:text-green-600 "
            >
                Accept
            </Button>
        </div>
    );
};

export default RequestAcceptBtn;