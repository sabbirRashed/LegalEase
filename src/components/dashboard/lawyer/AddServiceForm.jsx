

import { createService } from "@/lib/actions/service";
import { Button, FieldError, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiPlus } from "react-icons/fi";

const AddServiceForm = ({ profile }) => {
    const [error, setError] = useState("")
    const [isloading, setIsloading] = useState(false)

    const router = useRouter();

    const handleCreateService = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const submitPayload = Object.fromEntries(formData.entries());
        const { description } = submitPayload;

        if (description.length < 20) {
            setError('Description must be atleast 20 caracter.')
            return
        }
        setError('')

        try {
            setIsloading(true)

            const res = await createService({
                profileId: profile?._id,
                ...submitPayload
            });

            if (res?.insertedId) {
                toast.success('Successfully added your service.')
                form.reset()
                router.refresh();
            } else {
                toast.error('Something went wrong! Plese try again.')
            }
        } catch {
            toast.error('Submition faild! Please try again.')
        }
        finally {
            setIsloading(false)
        }


    }
    return (
        <Modal>
            <Button
                size="sm"
                type="button"
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

                                <form
                                    onSubmit={handleCreateService}
                                    className="flex flex-col gap-4 space-y-4">

                                    {/* service name */}
                                    <TextField className="w-full" name="name" type="text" variant="secondary" isRequired>
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
                                        <Input placeholder="Enter your phone number" className={'py-3'} />
                                    </TextField>

                                    {/* description */}
                                    <TextField
                                        isRequired
                                        name="description"
                                        // defaultValue={service?.description}
                                        variant='secondary'
                                    >
                                        <Label>Description</Label>
                                        <TextArea rows={3} placeholder="Tell about your service..." />
                                        {
                                            error.length > 0 && <p className="text-xs text-red-500 bg-red-100 px-4 py-3 rounded-2xl">{error}</p>
                                        }
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">{isloading ? "submitting..." : "Create Service"}</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddServiceForm;