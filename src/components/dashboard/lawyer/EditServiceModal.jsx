
import { updateService } from "@/lib/actions/lawyer";
import { Button,  Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiEdit3, } from "react-icons/fi";


const EditServiceModal = ({ service }) => {
    const [error, setError] = useState("")
    const [isloading, setIsloading] = useState(false)

    const router = useRouter();

    const handleUpdateService = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const updatePayload = Object.fromEntries(formData.entries());
        const { description } = updatePayload;

        if (description.length < 20) {
            setError('Description must be atleast 20 caracter.')
            return
        }
        setError('')

        try {
            setIsloading(true)
           
            const res = await updateService(service?._id, updatePayload ) 

            if (res.modifiedCount > 0) {
                toast.success('Successfully updated your service.')
                form.reset()
                router.refresh();
            } else {
                toast.error('Something went wrong! Plese try again.')
            }
        } catch(error) {
            console.log('update err:', error);
            toast.error('Update faild! Please try again.')
        }
        finally {
            setIsloading(false)
        }


    }
    return (
        <Modal>
            <Button
                isIconOnly
                size="small"
                variant="white"
                className=" text-slate-400 hover:bg-blue-200 hover:text-blue-600"
            >
                <FiEdit3 className="h-4 w-4" />
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
                                    onSubmit={handleUpdateService}
                                    className="flex flex-col gap-4 space-y-4">

                                    {/* service name */}
                                    <TextField
                                        className="w-full"
                                        name="name"
                                        type="text"
                                        variant="secondary"
                                        defaultValue={service?.name}
                                        isRequired>
                                        <Label>Service Name</Label>
                                        <Input placeholder="e.g. Criminal Case Consultation" className={'py-3'} />
                                    </TextField>

                                    {/* title */}
                                    <TextField
                                        className="w-full"
                                        name="category"
                                        type="text"
                                        variant="secondary"
                                        defaultValue={service?.category}
                                        isRequired>
                                        <Label>Category</Label>
                                        <Input
                                            placeholder="e.g. Criminal Law"
                                            className={'py-3'} />
                                    </TextField>

                                    {/* price */}
                                    <TextField
                                        className="w-full"
                                        name="consultationFee"
                                        type="number"
                                        variant="secondary"
                                        defaultValue={service?.consultationFee}
                                        isRequired>
                                        <Label>Consultation Fee</Label>
                                        <Input
                                            placeholder="Enter your phone number"
                                            className={'py-3'} />
                                    </TextField>

                                    {/* description */}
                                    <TextField
                                        isRequired
                                        name="description"
                                        defaultValue={service?.description}
                                        variant='secondary'
                                    >
                                        <Label>Description</Label>
                                        <TextArea rows={3}
                                            placeholder="Tell us about your service..." />
                                        {
                                            error.length > 0 && <p className="text-xs text-red-500 bg-red-100 px-4 py-3 rounded-2xl">{error}</p>
                                        }
                                    </TextField>

                                    <Modal.Footer>
                                        <Button
                                            slot="close"
                                            variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit">
                                            {isloading ? "Updating..." : "Update Service"}
                                        </Button>
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

export default EditServiceModal;