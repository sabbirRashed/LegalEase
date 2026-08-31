import { Briefcase, Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FiPlus } from "react-icons/fi";

const AddServiceForm = ({onAddService}) => {
    return (
        <Modal>
            <Button
                type="button"
                onClick={onAddService}
                className="cursor-pointer flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/30 transition-colors hover:bg-blue-700"
            >
                <FiPlus className="h-4 w-4" />
                Add Service
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Briefcase/>
                            </Modal.Icon>
                            <Modal.Heading className="text-slate-900">Add a Service</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Define your legal service with a clear title, description, and pricing.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text" variant="secondary">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="email" variant="secondary">
                                        <Label>Email</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel" variant="secondary">
                                        <Label>Phone</Label>
                                        <Input placeholder="Enter your phone number" />
                                    </TextField>
                                    <TextField className="w-full" name="company" variant="secondary">
                                        <Label>Company</Label>
                                        <Input placeholder="Enter your company name" />
                                    </TextField>
                                    <TextField className="w-full" name="message" variant="secondary">
                                        <Label>Message</Label>
                                        <Input placeholder="Enter your message" />
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