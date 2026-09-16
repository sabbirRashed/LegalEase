import { requireRole } from '@/lib/core/session';

export const metadata ={
    title: "Admin Dashboard || LegalEase",
    description: "Manage users, lawyers, transactions, and platform activity from the LegalEase admin dashboard.",
}

const AdminDashboardLayout = async({children}) => {

    await requireRole('admin') 
    return children
};

export default AdminDashboardLayout;