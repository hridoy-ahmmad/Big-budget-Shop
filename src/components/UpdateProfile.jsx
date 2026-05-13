"use client";


import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Edit, Edit2Icon } from "lucide-react";


export function UpdateProfle() {

    const updateProfile = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        
        await authClient.updateUser({
            image,
            name
        })
    }

    return (
        <Modal>
            <Button variant="secondary" ><Edit /> Edit Your Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Edit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading className={'text-center'}>Edit Your Profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={updateProfile} className="flex flex-col gap-4">
                                    <TextField className="w-full" isRequired name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" isRequired name="image" type="url">
                                        <Label>Image</Label>
                                        <Input placeholder="Image link" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}