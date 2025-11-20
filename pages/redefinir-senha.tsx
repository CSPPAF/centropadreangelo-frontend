"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./login.module.css";

export default function RedefinirSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams?.get("token") ?? "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setErro("Token inválido.");
      return;
    }

    const res = await fetch("/api/redefinir-senha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, novaSenha }),
    });

    if (res.ok) {
      setSucesso(true);
      setErro("");
    } else {
      const { message } = await res.json();
      setErro(message || "Erro ao redefinir senha");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["login-wrapper"]}>
        <div className={styles["img-side"]}>
          <img src="/logo.png" alt="Redefinir senha" />
        </div>

        <div className={styles["form-side"]}>
          <h2 className={styles.title}>Redefinir Senha</h2>
          {!sucesso ? (
            <form onSubmit={handleSubmit}>
              <div className={styles["input-group"]}>
                <input
                  type="password"
                  placeholder="Nova Palavra-passe"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              {erro && (
                <p
                  style={{ marginBottom: "10px", color: "#d32f2f", textAlign: "center" }}
                >
                  {erro}
                </p>
              )}

              <button type="submit" className={styles.button}>
                Redefinir Senha
              </button>
            </form>
          ) : (
            <p style={{ color: "#2e7d32", textAlign: "center", fontWeight: "bold" }}>
              Senha redefinida com sucesso. Pode agora iniciar sessão.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
