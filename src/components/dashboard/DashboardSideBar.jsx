
import { getUserSession } from "@/lib/core/session";
import { LayoutSideContentLeft } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { FaUsersCog } from "react-icons/fa";

import {
    FiSearch,
    FiMenu,
    FiX,
    FiChevronDown,
    FiLogOut,
    FiGrid,
    FiClock,
    FiEdit3,
    FiMessageSquare,
} from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";


export async function DashboardSidebar() {
    const user = await getUserSession();

    const userDashboardLinks = [
        { label: "Dashboard", href: "/dashboard/user", icon: FiGrid, color: "text-blue-600 bg-blue-50" },
        { label: "Hiring History", href: "/dashboard/user/hiring-history", icon: FiClock, color: "text-violet-600 bg-violet-50" },
        { label: "Update Profile", href: "/dashboard/user/update-profile", icon: FiEdit3, color: "text-amber-600 bg-amber-50" },
        { label: "Comments", href: "/dashboard/user/comments", icon: FiMessageSquare, color: "text-emerald-600 bg-emerald-50" },
    ];

    const LawyerDashboardLinks = [
        { label: "Dashboard", href: "/dashboard/lawyer", icon: FiGrid, color: "text-blue-600 bg-blue-50" },
        { label: "Hiring History", href: "/dashboard/lawyer/hiring-history", icon: FiClock, color: "text-violet-600 bg-violet-50" },
        { label: "Update Profile", href: "/dashboard/lawyer/manage-legal-profile", icon: FiEdit3, color: "text-amber-600 bg-amber-50" },
    ];

    const adminDashboardLinks = [
        { label: "Dashboard", href: "/dashboard/admin", icon: FiGrid, color: "text-blue-600 bg-blue-50" },
        { label: "Manage Users", href: "/dashboard/admin/manage-users ", icon: FaUsersCog, color: "text-violet-600 bg-violet-50" },
        { label: "View All Transactions", href: "/dashboard/admin/all-transactions", icon: IoWalletOutline, color: "text-amber-600 bg-amber-50" },
        { label: "Analytics", href: "/dashboard/admin/analytics", icon: LuChartNoAxesCombined, color: "text-emerald-600 bg-emerald-50" },
    ];

    const navLinksMap = {
        user: userDashboardLinks,
        lawyer: LawyerDashboardLinks,
        admin: adminDashboardLinks,
    }

    const navItems = navLinksMap[user?.role] || []


    const sidebarContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                href={item.href}
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                type="button"
            >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                {item.label}
            </Link>
        ))}
    </nav>

    return (
        <>
            {/* Desktop device view */}
            <aside className="hidden w-64 min-h-screen shrink-0 border-r border-default p-4  lg:block bg-white">
                {sidebarContent}
            </aside>


            {/* Small device view */}
            <Drawer >
                <Button className="lg:hidden  absolute" variant="white">
                    <LayoutSideContentLeft />
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {sidebarContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}