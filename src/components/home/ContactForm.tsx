"use client"; // Must be first line

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // TODO: Replace with real API integration
    console.log("Form submitted:", form);

    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setSuccess("Thank you! Your message has been sent.");
  };

  if (!mounted) return null;

  return (
    <section className="bg-[#f8f6f2] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Let's Plan Your Vrindavan Farm Adventure</h2>
          <h3 className="text-xl font-semibold text-green-700">Vrindavan Farms</h3>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Address:</strong> Near Chon, Aghanwadi Next Janai farms, Badlapur, Maharashtra 421503
            </p>
            <p>
              <strong>Google Maps:</strong>{" "}
              <a
                href="https://www.google.com/maps/place/Vrindavan+Farms/@19.2048963,73.2959885,15z/data=!4m21!1m11!3m10!1s0x3be78d2c6154d0db:0xc658ad7c351d7ccb!2sVrindavan+Farms!5m2!4m1!1i2!8m2!3d19.2050191!4d73.2961309!10e5!16s%2Fg%2F11pq_mcwn8!3m8!1s0x3be78d2c6154d0db:0xc658ad7c351d7ccb!5m2!4m1!1i2!8m2!3d19.2050191!4d73.2961309!16s%2Fg%2F11pq_mcwn8?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Map
              </a>
            </p>
            <p>📞 +91 87670 48880</p>
            <p>Your call, our service—anytime!</p>
            <p>✉️ hello@vrindavanfarms.com</p>
            <p className="text-gray-500 italic">From message to memories — we’re just a reply away!</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {error && <p className="text-red-600 mb-4">{error}</p>}
          {success && <p className="text-green-600 mb-4">{success}</p>}

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { name: "name", type: "text", placeholder: "Name *", required: true },
              { name: "email", type: "email", placeholder: "Email *", required: true },
              { name: "phone", type: "text", placeholder: "Phone" },
              { name: "subject", type: "text", placeholder: "Subject" },
            ].map((field) => (
              <motion.input
                key={field.name}
                type={field.type}
                name={field.name}
                value={form[field.name as keyof FormData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              />
            ))}

            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message *"
              required
              className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
            />

            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg bg-green-900 text-white font-bold hover:scale-105 transition-transform"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="mb-2">Or reach us directly on WhatsApp:</p>
            <a
              href="https://wa.me/918767048880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}