"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type PackageItem = {
  id: number;
  name: string;
  price: number;
};

export default function MagicChessPage() {
  const [playerId, setPlayerId] = useState("");
  const [serverId, setServerId] = useState("");
  const [selected, setSelected] = useState<PackageItem | null>(null);

  const packages: PackageItem[] = [
    { id: 1, name: "Weekly Pass", price: 9.9 },
    { id: 2, name: "Monthly Pass", price: 29.9 },
    { id: 3, name: "86 Diamonds", price: 4.5 },
    { id: 4, name: "172 Diamonds", price: 8.9 },
    { id: 5, name: "257 Diamonds", price: 13.2 },
    { id: 6, name: "344 Diamonds", price: 17.5 },
  ];

  function buyNow() {
    if (!playerId || !serverId || !selected) {
      alert("Please fill Player ID, Server ID, and choose a package.");
      return;
    }

    alert(
      `Order created!\nPlayer ID: ${playerId}\nServer ID: ${serverId}\nPackage: ${selected.name}\nTotal: RM${selected.price.toFixed(
        2
      )}`
    );
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Magic Chess Top Up</h1>

      <section style={styles.box}>
        <h2 style={styles.step}>1. Enter Player Details</h2>

        <input
          style={styles.input}
          placeholder="Player ID"
          value={playerId}
          onChange={(e) => setPlayerId(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Server ID"
          value={serverId}
          onChange={(e) => setServerId(e.target.value)}
        />

        <p style={styles.helpText}>
          Enter the ID shown inside your Magic Chess profile.
        </p>
      </section>

      <section style={styles.box}>
        <h2 style={styles.step}>2. Choose Package</h2>

        <div style={styles.grid}>
          {packages.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              style={{
                ...styles.packageCard,
                border:
                  selected?.id === p.id
                    ? "2px solid #a855f7"
                    : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <strong>{p.name}</strong>
              <span>RM{p.price.toFixed(2)}</span>
            </button>
          ))}
        </div>
      </section>

      <section style={styles.box}>
        <h2 style={styles.step}>3. Confirm Order</h2>

        <div style={styles.summary}>
          <p>Player ID: {playerId || "-"}</p>
          <p>Server ID: {serverId || "-"}</p>
          <p>Package: {selected ? selected.name : "-"}</p>
          <p>
            Total: {selected ? `RM${selected.price.toFixed(2)}` : "RM0.00"}
          </p>
        </div>

        <button style={styles.buyButton} onClick={buyNow}>
          Buy Now
        </button>
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

  title: {
    textAlign: "center",
    marginBottom: "25px",
  },

  box: {
    maxWidth: "700px",
    margin: "0 auto 20px",
    background: "#1e293b",
    padding: "20px",
    borderRadius: "16px",
  },

  step: {
    fontSize: "18px",
    marginBottom: "15px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "8px",
    borderRadius: "10px",
    border: "none",
    fontSize: "15px",
  },

  helpText: {
    color: "#94a3b8",
    fontSize: "13px",
    margin: 0,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "12px",
  },

  packageCard: {
    padding: "15px",
    borderRadius: "12px",
    background: "#0f172a",
    color: "white",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  summary: {
    background: "#0f172a",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "15px",
  },

  buyButton: {
    width: "100%",
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    background: "#a855f7",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};