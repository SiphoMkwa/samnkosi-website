"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import Button from "@/components/ui/Button";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute left-0 top-20 w-full border-t border-gray-200 bg-white shadow-lg">
          <nav className="flex flex-col p-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-3"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-6">
              <Button>Contact Us</Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
