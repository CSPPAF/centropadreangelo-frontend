"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function Login() {
  const [nif, setNif] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nif, password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/area-reservada");
    } else {
      alert("Utilizador ou senha inválidas");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["login-wrapper"]}>
        <div className={styles["img-side"]}>
          <img src="/logo.png" alt="Logo" />
        </div>

        <div className={styles["form-side"]}>
          <h2 className={styles.title}>Área Reservada</h2>
          <p className={styles.subtitle}>Acesso exclusivo a Utentes</p>

          <form onSubmit={handleSubmit}>
            <div className={styles["input-group"]}>
              <input
                type="text"
                placeholder="NIF"
                value={nif}
                onChange={(e) => setNif(e.target.value)}
                className={styles.input}
                required
              />
            </div>

            <div className={styles["input-group"]}>
              <input
                type="password"
                placeholder="Palavra-passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.button}
              disabled={loading}
            >
              {loading ? "A entrar..." : "Entrar"}
            </button>

            <div className={styles.forgot}>
              <a href="/recuperar-senha">Esqueceu a palavra-passe?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}