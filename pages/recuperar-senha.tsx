"use client";

import { useState } from "react";
import styles from "./login.module.css";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/recuperar-senha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMensagem(data.message);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles["login-wrapper"]}>
        <div className={styles["img-side"]}>
          <img src="/logo.png" alt="Recuperar senha" />
        </div>

        <div className={styles["form-side"]}>
          <h2 className={styles.title}>Recuperar Palavra-passe</h2>
          <p className={styles.subtitle}>Insira seu email para receber instruções</p>

          <form onSubmit={handleSubmit}>
            <div className={styles["input-group"]}>
              <input
                type="email"
                placeholder="O seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.button}
              disabled={loading}
            >
              {loading ? "Enviando..." : "Recuperar"}
            </button>

            {mensagem && (
              <p
                style={{ marginTop: "15px", textAlign: "center", color: "#2e7d32" }}
              >
                {mensagem}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}