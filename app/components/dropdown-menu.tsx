"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Add this import
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, FileText, Mail } from "lucide-react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  return (
    <div className="relative inline-block text-left">
      {/* Your Image is now the trigger button */}
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none block">
        <Image
          src="/menu2.png"
          alt="Menu"
          width={60}
          height={60}
          className="py-2 px-4 mt-4 mr-5 cursor-pointer"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/5 z-50 overflow-hidden"
          >
            <div className="py-2">
              <Link href="/consultation" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                <Calendar className="w-4 h-4 text-gray-400" /> Book a consultation
              </Link>
              <Link href="/terms-and-privacy" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                <FileText className="w-4 h-4 text-gray-400" /> Terms & Privacy
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                <Mail className="w-4 h-4 text-gray-400" /> Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  );
}