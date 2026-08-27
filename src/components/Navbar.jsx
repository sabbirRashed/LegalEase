"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Input, Dropdown, Button, Label } from "@heroui/react";
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
import { authClient } from "@/lib/auth-client";

// Mock user for now — replace with real auth/session data
// const user = {
//   isLoggedIn: true,
//   role: "client", // "client" | "lawyer" | "admin"
//   name: "Sabbir Rahman",
// };

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Browse Lawyers", href: "/lawyers" },
];

// Each item gets its own accent so the dropdown feels lively, not flat
const dashboardLinks = [
  { label: "Dashboard", href: "/dashboard/user", icon: FiGrid, color: "text-blue-600 bg-blue-50" },
  { label: "Hiring History", href: "/dashboard/user/hiring-history", icon: FiClock, color: "text-violet-600 bg-violet-50" },
  { label: "Update Profile", href: "/dashboard/profile", icon: FiEdit3, color: "text-amber-600 bg-amber-50" },
  { label: "Comments", href: "/dashboard/comments", icon: FiMessageSquare, color: "text-emerald-600 bg-emerald-50" },
];


export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => pathname === href;
  const router = useRouter()

  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;
  console.log(user);


  const userDashboardLinks = [
    { label: "Dashboard", href: "/dashboard/user", icon: FiGrid, color: "text-blue-600 bg-blue-50" },
    { label: "Hiring History", href: "/dashboard/user/hiring-history", icon: FiClock, color: "text-violet-600 bg-violet-50" },
    { label: "Update Profile", href: "/dashboard/user/profile", icon: FiEdit3, color: "text-amber-600 bg-amber-50" },
    { label: "Comments", href: "/dashboard/user/comments", icon: FiMessageSquare, color: "text-emerald-600 bg-emerald-50" },
  ];

  const LawyerDashboardLinks = [
    { label: "Dashboard", href: "/dashboard/lawyer", icon: FiGrid, color: "text-blue-600 bg-blue-50" },
    { label: "Hiring History", href: "/dashboard/lawyer/hiring-history", icon: FiClock, color: "text-violet-600 bg-violet-50" },
    { label: "Update Profile", href: "/dashboard/lawyer/manage-legal-profile", icon: FiEdit3, color: "text-amber-600 bg-amber-50" },
  ];

  const adminDashboardLinks = [
    { label: "Dashboard", href: "/dashboard/admin", icon: FiGrid, color: "text-blue-600 bg-blue-50" },
    { label: "Hiring History", href: "/dashboard/admin/manage-users ", icon: FiClock, color: "text-violet-600 bg-violet-50" },
    { label: "Update Profile", href: "/dashboard/admin/all-transactions", icon: FiEdit3, color: "text-amber-600 bg-amber-50" },
    { label: "Comments", href: "/dashboard/admin/analytics", icon: FiMessageSquare, color: "text-emerald-600 bg-emerald-50" },
  ];

  const navLinksMap = {
    user: userDashboardLinks,
    lawyer: LawyerDashboardLinks,
    admin: adminDashboardLinks,
  }

  const navItems = navLinksMap[user?.role] || []


  const handleLogOut = async () => {
    const { data, error } = await authClient.signOut()

    if (data.success) {
      router.refresh();
      router.push('/login')
    }
  }

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-slate-900 shrink-0">
          Legal<span className="text-blue-600">Ease</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${isActive(link.href)
                ? "text-blue-600"
                : "text-slate-500 hover:text-slate-900"
                }`}
            >
              {link.label}
            </Link>
          ))}

          {user?.role && (
            <Dropdown>
              <Dropdown.Trigger>
                <span
                  className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900"
                >
                  Dashboard
                  <FiChevronDown className="w-4 h-4" />
                </span>
              </Dropdown.Trigger>
              <Dropdown.Popover className="mt-2 min-w-64 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/60">
                <Dropdown.Menu aria-label="Dashboard menu" className="flex flex-col gap-1">
                  {navItems.map(({ label, href, icon: Icon, color }) => (
                    <Dropdown.Item
                      key={href}
                      href={href}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 outline-none cursor-pointer transition-colors hover:bg-slate-50 data-[focused]:bg-slate-50"
                    >
                      <span className={`flex items-center justify-center w-9 h-9 rounded-lg ${color}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <Label className="text-sm font-medium text-slate-700">{label}</Label>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          )}
        </nav>



        {/* Search bar and auth button (desktop) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block relative flex-1 max-w-sm">
            <FiSearch className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <Input
              type="search"
              aria-label="Search lawyers"
              placeholder="Search by name or specialization"
              className="w-full pl-9 bg-slate-50 border border-slate-200"
            />
          </div>


          {/* Auth button (desktop) */}
          {
            isPending ? <>
              <h2>Loading...</h2>
            </> : (

              <div className="hidden lg:block shrink-0">
                {user?.email ? (
                  <Button
                    onClick={handleLogOut}
                    className="flex items-center gap-2 bg-white border border-slate-200 text-red-600 hover:bg-red-50">
                    <FiLogOut className="w-4 h-4" />
                    Logout
                  </Button>
                ) : (
                  <div className="flex items-center gap-4">
                    <Link
                      href="/login"
                      className="flex items-center px-4 py-2 rounded-lg bg-white text-blue-600 text-sm font-medium hover:bg-blue-700/10 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signUp"
                      className="flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            )
          }
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4">
          {/* Search bar (mobile) */}
          <div className="relative">
            <FiSearch className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <Input
              type="search"
              aria-label="Search lawyers"
              placeholder="Search by name or specialization"
              className="w-full pl-9 bg-slate-50 border border-slate-200"
            />
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${isActive(link.href)
                  ? "border border-blue-600 bg-blue-50 text-blue-600"
                  : "text-slate-500 hover:bg-slate-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Dashboard links */}
          {user?.role && (
            <div className="border-t border-slate-200 pt-4">
              <p className="px-3 text-xs font-semibold text-slate-500 uppercase mb-2">
                Dashboard
              </p>
              <div className="flex flex-col gap-1">
                {navItems.map(({ label, href, icon: Icon, color }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium ${isActive(href)
                      ? "border border-blue-600 bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50"
                      }`}
                  >
                    <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${color}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Auth button */}
          <div className="border-t border-slate-200 pt-4">
            {user?.email ? (
              <Button
                onClick={handleLogOut}
                className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-red-600 hover:bg-red-50">
                <FiLogOut className="w-4 h-4" />
                Logout
              </Button>
            ) : (
              <Link
                href="/login"
                className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}