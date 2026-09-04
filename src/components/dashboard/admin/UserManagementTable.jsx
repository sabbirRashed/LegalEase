import { Button, Table } from '@heroui/react';
import React from 'react';
import { FiEdit3 } from 'react-icons/fi';

const UserManagementTable = () => {
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
                            <Table.Row>
                                <Table.Cell>
                                    <div className="font-medium text-foreground">
                                        Md. Sabbir Rahman
                                    </div>
                                </Table.Cell>

                                <Table.Cell>
                                    <span className="text-default-500">
                                        sabbir@example.com
                                    </span>
                                </Table.Cell>

                                <Table.Cell>
                                    <span className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
                                        Client
                                    </span>
                                </Table.Cell>

                                <Table.Cell>
                                    <div className='flex items-center gap-2'>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className={'text-xs border bg-blue-600/5'}
                                        >
                                            Make Admin
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="danger-soft"
                                            className={'text-xs border '}
                                        >
                                            Delete User
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <div className="font-medium text-foreground">
                                        Aniruddha Roy
                                    </div>
                                </Table.Cell>

                                <Table.Cell>
                                    <span className="text-default-500">
                                        aniruddha@example.com
                                    </span>
                                </Table.Cell>

                                <Table.Cell>
                                    <span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                                        Lawyer
                                    </span>
                                </Table.Cell>

                                <Table.Cell>
                                    <div className='flex items-center gap-2'>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className={'text-xs border bg-blue-600/5 '}
                                        >
                                            Make Admin
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="danger-soft"
                                            className={'text-xs border '}
                                        >
                                            Delete User
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <div className="font-medium text-foreground">
                                        Admin User
                                    </div>
                                </Table.Cell>

                                <Table.Cell>
                                    <span className="text-default-500">
                                        admin@example.com
                                    </span>
                                </Table.Cell>

                                <Table.Cell>
                                    <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                                        Admin
                                    </span>
                                </Table.Cell>

                                <Table.Cell>
                                    <div className='flex items-center gap-2'>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className={'text-xs border bg-blue-600/5 '}
                                        >
                                            Make Admin
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="danger-soft"
                                            className={'text-xs border '}
                                        >
                                            Delete User
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <div className="font-medium text-foreground">
                                        Nusrat Jahan
                                    </div>
                                </Table.Cell>

                                <Table.Cell>
                                    <span className="text-default-500">
                                        nusrat@example.com
                                    </span>
                                </Table.Cell>

                                <Table.Cell>
                                    <span className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
                                        Client
                                    </span>
                                </Table.Cell>

                                <Table.Cell>
                                    <div className='flex items-center gap-2'>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className={'text-xs border bg-blue-600/5 '}
                                        >
                                            Make Admin
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="danger-soft"
                                            className={'text-xs border '}
                                        >
                                            Delete User
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default UserManagementTable;