"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin" },
    { name: "Room Bookings", href: "/admin/rooms" },
    { name: "Event Bookings", href: "/admin/events" },
    { name: "Analytics", href: "/admin/analytics" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f6f2]">
      
    
      <aside className="w-64 bg-green-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-10">Vrindavan Admin</h2>

        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-lg transition ${
                pathname === item.href
                  ? "bg-green-700"
                  : "hover:bg-green-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

     
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}