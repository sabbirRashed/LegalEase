"use client"

import { updateComment } from '@/lib/actions/comments';
import { Pencil } from '@gravity-ui/icons';
import { Button, Form, Input, Label, Modal, TextArea, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiEdit, } from 'react-icons/bi';

const UpdateCommentModal = ({ comment }) => {

    const [isOpen, setIsOpen]= useState(false)
    const router = useRouter()


    const handleUpdateComment = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const  newCommment  = Object.fromEntries(formData);

        try{
            const res = await updateComment( comment?.lawyerProfileId ,comment?._id, newCommment)
            if(res.modifiedCount > 0){
                toast.success('Comment updated succesfully!')
                router.refresh()
                setIsOpen(false)
            }
        }
        catch(error){
            toast.error('Something went worng!')
        }

    }

    return (
        <Modal isOpen={isOpen}
        onOpenChange={setIsOpen}>
            <Button
                size="sm"
                variant="secondary"
                className="border border-blue-200 bg-blue-50 font-medium text-blue-600 hover:bg-blue-100"
            >
                <Pencil size={15} />
                Update
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-sm">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <BiEdit />
                            </Modal.Icon>
                            <Modal.Heading>Update your comment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>

                            <Form onSubmit={handleUpdateComment}>
                                <div className=" space-y-3">
                                    <TextArea
                                    defaultValue={comment?.comment}
                                        name='comment'
                                        variant='secondary'
                                        fullWidth
                                        placeholder="Your comment..." />
                                </div>

                                <Button className="w-full mt-6" type='submit' >
                                    Continue
                                </Button>
                            </Form>

                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateCommentModal;