import { Table } from '@heroui/react';
import React from 'react';

const TransactionTable = () => {
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
                                Transaction Id
                            </Table.Column>
                            <Table.Column>
                                User Email
                            </Table.Column>
                            <Table.Column>
                                Amount
                            </Table.Column>
                            <Table.Column>
                                Date
                            </Table.Column>
                        </Table.Header>

                        <Table.Body>
                           <Table.Row >
                                    <Table.Cell>
                                        <div className="font-medium text-foreground">
                                           TRX1934234542
                                        </div>
                                    </Table.Cell>

                                    <Table.Cell>
                                        jihad@gmail.com
                                    </Table.Cell>
                                    
                                    <Table.Cell>
                                        2600Tk
                                    </Table.Cell>
                                    
                                    <Table.Cell>
                                        20, august 26
                                    </Table.Cell>
                                    
                                    

                                </Table.Row>

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default TransactionTable;