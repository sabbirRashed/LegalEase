import { requireRole } from '@/lib/core/session';

const userDashboardLayout = async({children}) => {

    await requireRole('user') 
    return children
};

export default userDashboardLayout;