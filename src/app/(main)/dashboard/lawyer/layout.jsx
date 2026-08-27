import { requireRole } from '@/lib/core/session';

const LawyerDashboardLayout = async ({ children }) => {

    await requireRole('lawyer')
    return children
};

export default LawyerDashboardLayout;