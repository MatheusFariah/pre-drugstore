"use client";

import Link from "next/link";
import Image from "next/image";
import AuthForm from "../auth-form";
import { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [lang, setLang] = useState<"en" | "pt">("en");

  const texts = {
    en: {
      welcome: "Welcome to Warn2Save!",
      subtitle: "Empower your health with real-time alerts and prevention.",
      create: "Create your Warn2Save Account",
      or: "or use your email for registration:",
      signIn: "SIGN IN",
      forgot: "Forgot password?",
      terms: "I agree to the Terms of Use and Privacy Policy",
      already: "Already have an account?",
      sign: "Sign in",
    },
    pt: {
      welcome: "Bem-vindo ao Warn2Save!",
      subtitle: "Proteja sua saúde com alertas e prevenção em tempo real.",
      create: "Crie sua conta Warn2Save",
      or: "ou use seu e-mail para registro:",
      signIn: "ENTRAR",
      forgot: "Esqueceu sua senha?",
      terms: "Concordo com os Termos de Uso e Política de Privacidade",
      already: "Já tem uma conta?",
      sign: "Entrar",
    },
  };

  const t = texts[lang];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f7fbfa] px-4 relative">
      {/* seta absoluta, alinhada horizontalmente com o US/BR */}
      <Link
        href="/"
        className="absolute z-50 top-[2rem] left-[10px] flex items-center justify-center rounded-full border border-emerald-700 p-2 bg-emerald-700 hover:bg-emerald-600 transition"
        aria-label="Back to home"
      >
        <ArrowLeft size={16} className="text-white" />
      </Link>

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden flex flex-col md:flex-row relative">
        {/* painel esquerdo */}
        <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-emerald-600 to-emerald-700 text-white p-8 md:w-1/2 gap-4">
          {/* idiomas */}
          <div className="absolute top-4 left-4 flex items-center gap-3 text-xs opacity-90">
            <button
              onClick={() => setLang("en")}
              className="hover:underline cursor-pointer"
              aria-label="English"
            >
              US
            </button>
            <button
              onClick={() => setLang("pt")}
              className="hover:underline cursor-pointer"
              aria-label="Português"
            >
              BR
            </button>
          </div>

          <Image
            src="/assets/logooficial.png"
            alt="Logo Warn2Save"
            width={100}
            height={100}
            className="mb-4 filter brightness-0 invert"
          />

          <h2 className="text-3xl font-bold text-center">{t.welcome}</h2>
          <p className="text-center text-sm opacity-90 px-6 font-light max-w-xs">
            {t.subtitle}
          </p>
          <Link
            href="/auth/login"
            className="cursor-pointer mt-4 px-8 py-2 border-2 border-white rounded-full hover:bg-white hover:text-emerald-700 transition transform hover:scale-105 font-semibold"
          >
            {t.signIn}
          </Link>
          <Link
            href="/auth/forgot"
            className="text-xs underline mt-2 hover:text-emerald-200"
          >
            {t.forgot}
          </Link>
        </div>

        {/* painel direito */}
        <div className="flex flex-col justify-center items-center p-8 md:w-1/2 gap-4">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">
            {t.create}
          </h2>

          {/* social icons */}
          <div className="flex gap-4 mt-2">
            <button
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition cursor-pointer"
              aria-label="Sign up with Facebook"
            >
              <FaFacebookF className="text-gray-500 hover:text-emerald-700" />
            </button>
            <button
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition cursor-pointer"
              aria-label="Sign up with Google"
            >
              <FaGoogle className="text-gray-500 hover:text-emerald-700" />
            </button>
            <button
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition cursor-pointer"
              aria-label="Sign up with LinkedIn"
            >
              <FaLinkedinIn className="text-gray-500 hover:text-emerald-700" />
            </button>
          </div>

          <span className="text-gray-400 text-sm mt-2">{t.or}</span>

          <AuthForm />

          <div className="flex items-center gap-2 mt-2 w-full max-w-xs">
            <input
              type="checkbox"
              id="terms"
              className="cursor-pointer"
              required
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              {t.terms}
            </label>
          </div>

          <p className="text-xs text-gray-600 mt-2">
            {t.already}{" "}
            <Link href="/auth/login" className="underline cursor-pointer">
              {t.sign}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
