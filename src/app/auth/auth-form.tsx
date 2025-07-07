"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/services/supabase";
import styles from "./auth.module.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function AuthForm() {
  const router = useRouter();
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <form onSubmit={handleSignUp} className={styles.form}>
      <div className={styles.inputIcon}>
        <FaUser className={styles.icon} />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputIcon}>
        <FaEnvelope className={styles.icon} />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputIcon}>
        <FaLock className={styles.icon} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
}
