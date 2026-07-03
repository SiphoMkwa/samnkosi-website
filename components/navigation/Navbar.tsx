import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Brand from "@/components/layout/Brand";
import MobileMenu from "@/components/navigation/MobileMenu";
import { navigation } from "@/config/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <Brand />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 transition-colors duration-200 hover:text-[var(--blue)]"
              >
                {item.name}
              </Link>
            ))}

            <Button>Contact Us</Button>
          </nav>

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
