
import { Button, FieldError, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { FiPlus } from "react-icons/fi";

const AddServiceForm = ({ service }) => {
    return (
        <Modal>
            <Button
                size="sm"
                type="button"
                // onClick={onAddService}
                className="cursor-pointer flex items-center gap-1 md:gap-2 rounded-lg bg-blue-600 px-2 p md:px-4 md:py-2 text-[10px] md:text-sm font-semibold text-white shadow-sm shadow-blue-600/30 transition-colors hover:bg-blue-700 "
            >
                <FiPlus className="md:h-4 md:w-4 h-3 w-3" />
                Add Service
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading className="text-slate-900">Add a Service</Modal.Heading>
                            <p className=" text-sm leading-5 text-muted">
                                Define your legal service with a clear title, description, and pricing.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4 space-y-4">
                                    {/* service name */}
                                    <TextField className="w-full" name="name" type="text" variant="secondary"  isRequired>
                                        <Label>Service Name</Label>
                                        <Input placeholder="e.g. Criminal Case Consultation" className={'py-3'} />
                                    </TextField>

                                    {/* title */}
                                    <TextField className="w-full" name="category" type="text" variant="secondary" isRequired>
                                        <Label>Category</Label>
                                        <Input placeholder="e.g. Criminal Law" className={'py-3'} />
                                    </TextField>

                                    {/* price */}
                                    <TextField className="w-full" name="consultationFee" type="number" variant="secondary" isRequired>
                                        <Label>Consultation Fee</Label>
                                        <Input placeholder="Enter your phone number"  className={'py-3'}/>
                                    </TextField>

                                    {/* description */}
                                    <TextField
                                        isRequired
                                        name="description"
                                        defaultValue={service?.description}
                                        variant='secondary'
                                    >
                                        <Label>Bio</Label>
                                        <TextArea rows={3} placeholder="Tell us about yourself..." />
                                        <FieldError />
                                    </TextField>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button slot="close">Send Message</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddServiceForm;