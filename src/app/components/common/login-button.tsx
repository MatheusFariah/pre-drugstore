import Link from "next/link";
import { LogIn } from "lucide-react";

export default function LoginButton() {
  return (
    <Link href="/auth/login" tabIndex={-1}>
      <button
        type="button"
        className="
          relative flex items-center justify-center
          w-[92px] h-[38px]
          border border-emerald-500 bg-white
          text-emerald-700 font-bold
          rounded-full
          transition-all duration-300
          hover:bg-emerald-50
          focus:outline-none focus:ring-2 focus:ring-emerald-200
          text-sm
          group
          overflow-hidden
          select-none
        "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {/* Texto centralizado, mas "afasta" quando ícone aparece */}
        <span
          className="
            transition-all duration-300
            group-hover:translate-x-[-12px] group-focus:translate-x-[-12px]
          "
        >
          Log In
        </span>
        {/* Ícone ABSOLUTO, aparece só no hover/focus, sem aumentar largura */}
        <span
          className="
            absolute right-4
            opacity-0
            group-hover:opacity-100 group-focus:opacity-100
            transition-all duration-300
            text-emerald-700
            pointer-events-none
          "
        >
          <LogIn size={16} />
        </span>
      </button>
    </Link>
  );
}
