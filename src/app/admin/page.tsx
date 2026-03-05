"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data.bookings || []));
  }, []);

  const total = bookings.length;
  const pending = bookings.filter(b => b.status === "pending").length;
  const confirmed = bookings.filter(b => b.status === "confirmed").length;
  const rejected = bookings.filter(b => b.status === "rejected").length;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard title="Total" value={total} color="bg-gray-800" />
        <StatCard title="Pending" value={pending} color="bg-yellow-500" />
        <StatCard title="Confirmed" value={confirmed} color="bg-green-600" />
        <StatCard title="Rejected" value={rejected} color="bg-red-600" />
      </div>
    </div>
  );
}

function StatCard({ title, value, color }: any) {
  return (
    <div className={`${color} text-white p-6 rounded-2xl shadow-lg`}>
      <h3 className="text-lg">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}