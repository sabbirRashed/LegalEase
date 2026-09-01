"use client"

import { deleteService } from '@/lib/actions/service';
import { Button, Modal } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiTrash2 } from 'react-icons/fi';

const DeleteServiceModal = ({ service }) => {
    const [isloading, setIsloading] = useState(null);
    const router = useRouter();

    const handleDelete = async () => {
        setIsloading(true);

        try {
            const res = await deleteService(service?._id);

            if (res.deletedCount > 0) {
                toast.success('Successfully deleted a service');
                router.refresh();
            }

        } catch(error) {
            console.log();
            toast.error('Something went wrong! Please try again.')
        }
        finally {
            setIsloading(true)
        }

    }

    return (
        <div>
            <Modal>
                <Button
                    size='sm'
                    isIconOnly
                    variant='outline'
                    className=" hover:text-red-600 hover:bg-red-100 text-red-500 transition-all duration-300"
                >
                    <FiTrash2 className="h-4 w-4" />
                </Button>

                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[400px]">
                            <Modal.CloseTrigger />

                            <Modal.Header className="items-center text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                                    <FiTrash2 className="h-5 w-5 text-red-600" />
                                </div>

                                <Modal.Heading className="mt-3">
                                    Delete Service?
                                </Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="text-center">
                                <p className="text-sm leading-6 text-slate-500">
                                    Are you sure you want to delete this service?
                                    This action cannot be undone.
                                </p>
                            </Modal.Body>

                            <Modal.Footer className="flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                                <Button
                                    variant="secondary"
                                    className="w-full sm:w-auto"
                                    slot="close"
                                >
                                    Cancel
                                </Button>

                                <Button
                                    onClick={handleDelete}
                                    className="w-full bg-red-600 text-white hover:bg-red-700 sm:w-auto"
                                >
                                    Delete Service
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default DeleteServiceModal;