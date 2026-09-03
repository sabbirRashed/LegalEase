"use client"

import { Pencil } from '@gravity-ui/icons';
import { Button, Form, Input, Label, Modal, TextArea, TextField } from '@heroui/react';
import React from 'react';
import { BiEdit, } from 'react-icons/bi';

const UpdateCommentModal = ({ comment }) => {


    const handleUpdateComment = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { comment } = Object.fromEntries(formData);

        console.log('update coment', comment);
    }

    return (
        <Modal>
            <Button
                size="sm"
                variant="secondary"
                // onPress={() => onUpdate(comment)}
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
                                        name='comment'
                                        variant='secondary'
                                        fullWidth
                                        placeholder="Your comment..." />
                                </div>

                                <Button className="w-full mt-6" type='submit' slot="close" >
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