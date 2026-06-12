import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  const games = [
    { name: "Mobile Legends", slug: "mlbb", img: "/games/mlbb.png", badge: "Popular" },
    { name: "Magic Chess", slug: "magic-chess", img: "/games/magicchess.jpg", badge: "Hot" },
    { name: "Valorant", slug: "valorant", img: "/games/valorant.png", badge: "New" },
  ];

  return (
    
    <main style={styles.container}>
      <Navbar />
      <header style={styles.header}>
        <h1 style={styles.logo}>🔥 Epic Reload</h1>
        <p style={styles.subtitle}>Fast & Instant Game Top-Up</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.title}>Popular Games</h2>

        <div style={styles.grid}>
          {games.map((game) => (
            <Link key={game.slug} href={`/game/${game.slug}`} style={styles.link}>
              <div style={styles.card}>
                <span style={styles.badge}>{game.badge}</span>

                <div style={styles.imageBox}>
                  <Image
                    src={game.img}
                    alt={game.name}
                    width={90}
                    height={90}
                    style={{
                      borderRadius: "12px",
                      width: "90px",
                      height: "90px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <h3 style={styles.gameName}>{game.name}</h3>
                <p style={styles.gameText}>Top up now</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "35px",
    background: "linear-gradient(180deg, #0f172a, #020617)",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    textAlign: "center",
    marginBottom: "35px",
  },

  logo: {
    fontSize: "42px",
    margin: 0,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: "8px",
    color: "#94a3b8",
    fontSize: "18px",
  },

  section: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  title: {
    fontSize: "24px",
    marginBottom: "18px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "22px",
  },

  link: {
    textDecoration: "none",
    color: "white",
  },

  card: {
    position: "relative",
    background: "rgba(30, 41, 59, 0.95)",
    padding: "22px 15px",
    borderRadius: "18px",
    textAlign: "center",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    transition: "0.25s ease",
  },

  badge: {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "#f97316",
    color: "white",
    fontSize: "11px",
    padding: "4px 8px",
    borderRadius: "999px",
    fontWeight: "bold",
  },

  imageBox: {
    width: "120px",
    height: "120px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "16px",
    background: "#0b1220",
  },



  gameName: {
    fontSize: "16px",
    marginTop: "14px",
    marginBottom: "4px",
  },

  gameText: {
    fontSize: "13px",
    color: "#94a3b8",
    margin: 0,
  },
};