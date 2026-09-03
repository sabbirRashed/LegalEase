import { Pencil } from '@gravity-ui/icons';
import { Button, Form, Input, Label, Modal, TextField } from '@heroui/react';
import React from 'react';
import { BiEdit, } from 'react-icons/bi';

const UpdateCommentModal = () => {
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
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <BiEdit />
                            </Modal.Icon>
                            <Modal.Heading>Update your comment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>

                            <Form>
                                <TextField 
                                className="w-full" 
                                name="comment" 
                                type="text" 
                                defaultValue="abcd..." isRequired>
                                    <Label className="text-sm font-medium text-slate-700">Your Comment</Label>
                                    <Input placeholder="Enter your full name" className="py-2.5 shadow-none mt-1" />
                                </TextField>
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="w-full" slot="close">
                                Continue
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateCommentModal;