"use client"

import { deleteCommentApi } from '@/lib/actions/comments';
import { Button, Modal } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BsTrash2 } from 'react-icons/bs';

const DeleteCommentModal = ({ comment }) => {
    const [isloading, setIsloading] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();

    const handleDeleteComment = async () => {
        setIsloading(true);

        try {
            const res = await deleteCommentApi(comment?.lawyerProfileId, comment?._id)

            console.log('after delete:', res);
            if (res.deletedCount > 0) {
                toast.success('Successfully deleted a comment');
                setIsOpen(false)
                router.refresh();

            }

        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!')
        }
        finally {
            setIsloading(true)
        }

    }

    return (
        <div>
            <Modal>
                <Button
                    size="sm"
                    variant="secondary"
                    className="border border-red-200 bg-red-50 font-medium text-red-600 hover:bg-red-100"
                >
                    <BsTrash2 size={15} />
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
                                    Delete Comment?
                                </Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="text-center">
                                <p className="text-sm leading-6 text-slate-500">
                                    Are you sure you want to delete this Comment?
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
                                    onClick={handleDeleteComment}
                                    className="w-full bg-red-600 text-white hover:bg-red-700 sm:w-auto"
                                >
                                    Delete Comment
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default DeleteCommentModal;