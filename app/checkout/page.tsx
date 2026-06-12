"use client";

import { useSearchParams } from "next/navigation";
import type { CSSProperties } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const game = searchParams.get("game") || "-";
  const playerId = searchParams.get("playerId") || "-";
  const serverId = searchParams.get("serverId") || "-";
  const packageName = searchParams.get("package") || "-";
  const price = searchParams.get("price") || "0.00";

  function payNow() {
    alert("Payment system will be connected later.");
  }

  return (
    <main style={styles.container}>
      <Navbar />

      <section style={styles.box}>
        <h1 style={styles.title}>Checkout</h1>

        <div style={styles.summary}>
          <p><b>Game:</b> {game}</p>
          <p><b>Player ID:</b> {playerId}</p>
          <p><b>Server / Zone ID:</b> {serverId}</p>
          <p><b>Package:</b> {packageName}</p>
          <p style={styles.total}><b>Total:</b> RM{price}</p>
        </div>

        <button style={styles.payButton} onClick={payNow}>
          Proceed to Payment
        </button>

        <Link href="/" style={styles.backLink}>
          Back to Home
        </Link>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    background: "#020617",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  box: {
    maxWidth: "600px",
    margin: "40px auto",
    background: "#1e293b",
    padding: "25px",
    borderRadius: "16px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  summary: {
    background: "#0f172a",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  total: {
    fontSize: "20px",
    color: "#f97316",
  },
  payButton: {
    width: "100%",
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    background: "#f97316",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  backLink: {
    display: "block",
    textAlign: "center",
    marginTop: "15px",
    color: "#94a3b8",
    textDecoration: "none",
  },
};