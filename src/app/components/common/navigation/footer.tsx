import React from "react";
import Link from "next/link";
import { Instagram, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-white border-t border-emerald-100 py-4 text-center text-sm text-gray-600 flex flex-col gap-2"
    >
      <p>
        © {new Date().getFullYear()} ApolloFarm. Todos os direitos reservados.
      </p>
      <p>
        Rua Cabo João Romeu Teixeira, 147 – Centro – S.P.Turvo/SP – CEP 18940023
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://instagram.com/the_matheusf4ria"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-emerald-600 flex items-center gap-1"
        >
          <Instagram size={14} />
          Instagram
        </a>
        <a
          href="https://wa.me/5514996929293"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-emerald-600 flex items-center gap-1"
        >
          <Phone size={14} />
          WhatsApp
        </a>
        <Link
          href="/privacy"
          className="hover:underline hover:text-emerald-600"
        >
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:underline hover:text-emerald-600">
          Terms of Use
        </Link>
      </div>
    </footer>
  );
}
