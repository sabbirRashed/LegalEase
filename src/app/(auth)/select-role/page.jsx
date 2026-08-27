import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import SelectRoleComponent from './SelectRoleComponent';

const SelectRolePage = async() => {

    const user = await getUserSession();
    if (user?.role) {
        redirect('/')
    }

    return <SelectRoleComponent />
};

export default SelectRolePage;