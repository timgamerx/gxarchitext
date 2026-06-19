"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import DropdownMenu from "./components/dropdown-menu";

function useHideShell() {
  const pathname = usePathname();
  return pathname === "/book-a-consult" || pathname.startsWith("/book-a-consult/");
}

export function HeaderShell() {
  const hideShell = useHideShell();

  if (hideShell) {
    return null;
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image
            src="/gx-logo2.png"
            alt="Logo"
            width={200}
            height={60}
            className="ml-5"
          />
          <nav>
            <DropdownMenu />
          </nav>
        </div>
      </header>
      <div className="h-24" />
    </>
  );
}

export function FooterShell() {
  const hideShell = useHideShell();

  if (hideShell) {
    return null;
  }

  return (
    <footer className="mt-auto">
      <div className="hidden md:block">
        <div className="flex px-4 py-2 flex-row justify-between mt-20 mb-10 mr-5">
          <Image
            src="/gx-logo2.png"
            alt="Logo"
            width={200}
            height={60}
            className="ml-5"
          />
          <a href="/book-a-consult" className="text-gray-500 cursor-pointer">
            Book a consultation
          </a>
          <a href="#" className="text-gray-500 cursor-pointer">
            Terms & Privacy
          </a>
          <a href="#" className="text-gray-500 cursor-pointer">
            Contact Us
          </a>
        </div>

        <div className="text-center text-sm text-gray-500 py-4">
          &copy; {new Date().getFullYear()} Growth Architect. All rights reserved.
        </div>
      </div>

      <div className="block md:hidden">
        <div className="px-4 py-2 mt-20 mb-10 mr-5">
          <Image
            src="/gx-logo2.png"
            alt="Logo"
            width={200}
            height={60}
            className="ml-5"
          />
        </div>
        <div className="flex gap-6 px-9 mb-6">
          <a href="#" className="text-gray-500 cursor-pointer">
            Book a consultation
          </a>
          <a href="#" className="text-gray-500 cursor-pointer">
            Terms & Privacy
          </a>
          <a href="#" className="text-gray-500 cursor-pointer">
            Contact Us
          </a>
        </div>

        <div className="text-center text-sm text-gray-500 py-4">
          &copy; {new Date().getFullYear()} Growth Architect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
