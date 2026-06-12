"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Navbar from "../../components/Navbar";

type Order = {
  orderId: string;
  game: string;
  playerId: string;
  serverId: string | null;
  package: string;
  price: number;
  status: string;
};

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState("");

  async function checkOrder() {
    setError("");
    setOrder(null);

    const res = await fetch(`/api/orders/${orderId}`);

    if (!res.ok) {
      setError("Order not found");
      return;
    }

    const data = await res.json();
    setOrder(data);
  }

  return (
    <main style={styles.container}>
      <Navbar />

      <section style={styles.box}>
        <h1 style={styles.title}>Track Order</h1>

        <input
          style={styles.input}
          placeholder="Enter Order ID, example: ORD123456"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />

        <button style={styles.button} onClick={checkOrder}>
          Check Order
        </button>

        {error && <p style={styles.error}>{error}</p>}

        {order && (
          <div style={styles.result}>
            <p><b>Order ID:</b> {order.orderId}</p>
            <p><b>Game:</b> {order.game}</p>
            <p><b>Player ID:</b> {order.playerId}</p>
            <p><b>Server ID:</b> {order.serverId || "-"}</p>
            <p><b>Package:</b> {order.package}</p>
            <p><b>Total:</b> RM{order.price.toFixed(2)}</p>
            <p><b>Status:</b> {order.status}</p>
          </div>
        )}
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
  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "none",
    fontSize: "15px",
    background: "white",
    color: "black",
  },
  button: {
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
  result: {
    marginTop: "20px",
    background: "#0f172a",
    padding: "15px",
    borderRadius: "12px",
  },
  error: {
    marginTop: "15px",
    color: "#f87171",
  },
};