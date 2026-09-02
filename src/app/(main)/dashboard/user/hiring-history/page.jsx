import { Button, Chip, Table } from '@heroui/react';
import React from 'react';

const UserHiringHistory = () => {
    return (
        <div className='w-11/12 max-w-7xl mx-auto mt-15 md:mt-20'>

            {/* page header */}
            <div className='mb-8'>
                <h2 className="text-3xl font-bold text-slate-900">Hiring History</h2>
                <p className="mt-1.5 text-slate-500 max-w-xl">Keep track of your legal requests, monitor their progress, and stay informed about every step of your lawyer engagement</p>
            </div>

            <section className='border bg-white p-6 sm:p-8 w-full rounded-sm'>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold text-slate-900'>Your Legal Engagements</h2>
                    <p className='text-slate-500 text-sm ms:text-base mt-1 max-w-lg'>View your hiring requests, lawyer details, fees, and current status—all in one place.</p>
                </div>

                <Table>
                    <Table.ResizableContainer>
                        <Table.Content aria-label="Table with resizable columns" className="min-w-[700px]">
                            <Table.Header>
                                <Table.Column isRowHeader defaultWidth="1fr" id="name" minWidth={160}>
                                    Lawyer Name
                                    <Table.ColumnResizer />
                                </Table.Column>
                                <Table.Column defaultWidth="1fr" id="specialization" minWidth={220}>
                                    Specialization
                                    <Table.ColumnResizer />
                                </Table.Column>
                                <Table.Column defaultWidth="1fr" id="fee" minWidth={200}>
                                    Fee
                                </Table.Column>
                                <Table.Column defaultWidth="1fr" id="date" minWidth={200}>
                                    Hiring Date
                                </Table.Column>
                                <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                                    Status
                                    <Table.ColumnResizer />
                                </Table.Column>
                                <Table.Column defaultWidth="1fr" id="action" minWidth={200}>
                                    Action
                                </Table.Column>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Kate Moore</Table.Cell>
                                    <Table.Cell>Family Law</Table.Cell>
                                    <Table.Cell>$50</Table.Cell>
                                    <Table.Cell>10, janu, 26</Table.Cell>
                                    <Table.Cell>
                                        <Chip color="success" size="sm" variant="soft">
                                            Accepted
                                        </Chip>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button>Pay</Button>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Kate Moore</Table.Cell>
                                    <Table.Cell>Family Law</Table.Cell>
                                    <Table.Cell>$50</Table.Cell>
                                    <Table.Cell>10, janu, 26</Table.Cell>
                                    <Table.Cell>
                                        <Chip color="success" size="sm" variant="soft">
                                            Accepted
                                        </Chip>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button>Pay</Button>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Kate Moore</Table.Cell>
                                    <Table.Cell>Family Law</Table.Cell>
                                    <Table.Cell>$50</Table.Cell>
                                    <Table.Cell>10, janu, 26</Table.Cell>
                                    <Table.Cell>
                                        <Chip color="success" size="sm" variant="soft">
                                            Accepted
                                        </Chip>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button>Pay</Button>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table.Content>
                    </Table.ResizableContainer>
                </Table>

            </section>
        </div>
    );
};

export default UserHiringHistory;