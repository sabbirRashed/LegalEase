"use client"
import { deleteAnUser, updateUserRole } from '@/lib/actions/users';
import { Button, Table } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiTrash } from 'react-icons/bi';
import DeleteUserModal from './DeleteUserModal';


const UserManagementTable = ({ users }) => {

    const [isloading, setIsloading] = useState(false);
    const router = useRouter();

    const handleRoleChange = async (userId, newRole) => {

        setIsloading(true)
        try{
            const res = await updateUserRole(userId, {role: newRole})
            if(res.modifiedCount > 0){
                toast.success("Successfully changed role")
            }
        }
        catch{
            toast.error('Something went wrong!')
        }
        finally{
            setIsloading(false)
        }

    }


    return (
        <div className="rounded-2xl border border-default-200 bg-white p-2 shadow-sm">
            <Table variant="secondary">
                <Table.ScrollContainer>
                    <Table.Content
                        aria-label="Manage users"
                        className="min-w-[700px]"
                    >
                        <Table.Header>
                            <Table.Column isRowHeader>
                                Name
                            </Table.Column>
                            <Table.Column>
                                Email
                            </Table.Column>
                            <Table.Column>
                                Role
                            </Table.Column>
                            <Table.Column>
                                Action
                            </Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {
                                users.map(item => <Table.Row key={item?._id}>
                                    <Table.Cell>
                                        <div className="font-medium text-foreground">
                                            {item.name}
                                        </div>
                                    </Table.Cell>

                                    <Table.Cell>
                                        <span className="text-default-500">
                                            {item.email}
                                        </span>
                                    </Table.Cell>

                                    <Table.Cell>
                                        <span className={`inline-flex rounded-full  px-3 py-1 text-xs font-medium 
                                        ${item.role === "user" ?
                                                "bg-violet-50 text-violet-600"
                                                :
                                                item.role === "lawyer" ?
                                                    "bg-amber-50 text-amber-600"
                                                    : "bg-emerald-50 text-emerald-600"
                                            } `
                                        }>
                                            {item.role}
                                        </span>
                                    </Table.Cell>

                                    <Table.Cell >
                                        <div className='flex items-center gap-2'>
                                            {
                                                item?.role !== "admin" ?
                                                    <Button
                                                        onClick={() => handleRoleChange(item?._id, "admin")}
                                                        size="sm"
                                                        variant="secondary"
                                                        isDisabled={isloading}
                                                        className={'text-xs border bg-blue-600/5 rounded-sm'}
                                                    >
                                                        {isloading? "Changing..": "Make Admin"}
                                                    </Button>
                                                    : <Button
                                                        onClick={() => handleRoleChange(item?._id, "user")}
                                                        size="sm"
                                                        variant="secondary"
                                                        isDisabled={isloading}
                                                        className={'text-xs border bg-blue-600/5 rounded-sm'}
                                                    >
                                                        {isloading? "Changing..": "Make User"}
                                                    </Button>

                                            }
                                            <DeleteUserModal user={item} />
                                        </div>
                                    </Table.Cell>

                                </Table.Row>)
                            }

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default UserManagementTable;