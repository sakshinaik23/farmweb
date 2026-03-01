"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Ban, Clock, Users } from "lucide-react";

const policies = [
  {
    title: "Advance Payment",
    description: "50% advance payment is mandatory and non-refundable to confirm your booking.",
    icon: ShieldCheck,
  },
  {
    title: "Outside Food Policy",
    description: "Outside food and beverages are not permitted inside the property.",
    icon: Ban,
  },
  {
    title: "Pool Timings",
    description: "The swimming pool remains operational until 8:00 PM.",
    icon: Clock,
  },
  {
    title: "Child Pricing",
    description: "Children between 3–9 years are charged at half the applicable rate.",
    icon: Users,
  },
];

export default function PoliciesSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Booking Policies
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Please review our policies carefully to ensure a smooth and enjoyable stay.
          </p>
        </motion.div>

        {/* Policies Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {policies.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-8 flex gap-5"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-green-700" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {policy.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {policy.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}