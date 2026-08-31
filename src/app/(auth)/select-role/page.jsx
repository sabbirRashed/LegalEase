import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import SelectRoleComponent from './SelectRoleComponent';

const SelectRolePage = async({searchParams}) => {
    const {redirect: redirectTo} = await searchParams;
    console.log('redi----:', redirect);


    const user = await getUserSession();
    if (user?.role) {
        redirect(redirectTo)
    }

    return <SelectRoleComponent />
};

export default SelectRolePage;