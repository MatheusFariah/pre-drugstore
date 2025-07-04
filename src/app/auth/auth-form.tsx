"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/services/supabase";
import styles from "./auth.module.css";

export default function AuthForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleLogin(e: React.FormEvent) {
    console.log("supabase obj", supabase);
    console.log("supabase.auth obj", supabase.auth);
    console.log("supabase URL", process.env.NEXT_PUBLIC_SUPABASE_URL);

    e.preventDefault();
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h2>Login no ApolloFarm</h2>
      <input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      <button type="submit">Entrar</button>
    </form>
  );
}
