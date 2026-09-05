"use client"

import { deleteAnUser } from '@/lib/actions/users';
import { Button, Modal } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiTrash } from 'react-icons/bi';
import { BsTrash2 } from 'react-icons/bs';

const DeleteUserModal = ({ user }) => {

    const [isloading, setIsloading] = useState(false);
    const router = useRouter();

    const handleDeleteUser = async () => {
        setIsloading(true)
        try {
            const res = await deleteAnUser(user?._id);
            if (res.deletedCount > 0) {
                toast.success("Successfully deleted an user.")
                router.refresh()
            }
        }
        catch {
            toast.error('Something went wrong!')
        }
        finally {
            setIsloading(false)
        }
    }

    return (
        <div>
            <div>
                <Modal>
                    <Button
                        size="sm"
                        variant="danger-soft"
                        className={'text-xs border rounded-sm'}
                    >
                        <BiTrash />
                        Delete
                    </Button>

                    <Modal.Backdrop>
                        <Modal.Container>
                            <Modal.Dialog className="sm:max-w-[400px]">
                                <Modal.CloseTrigger />

                                <Modal.Header className="items-center text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                                        <BsTrash2 className="h-5 w-5 text-red-600" />
                                    </div>

                                    <Modal.Heading className="mt-3">
                                        Delete User?
                                    </Modal.Heading>
                                </Modal.Header>

                                <Modal.Body className="text-center">
                                    <p className="text-sm leading-6 text-slate-500">
                                        Are you sure you want to delete this user?
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
                                        onClick={handleDeleteUser}
                                        isDisabled={isloading}
                                        className="w-full bg-rose-500 text-white hover:bg-rose-600 sm:w-auto"
                                    >
                                        {isloading? "Deleting..": "Delete User"}
                                    </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
        </div>
    );
};

export default DeleteUserModal;