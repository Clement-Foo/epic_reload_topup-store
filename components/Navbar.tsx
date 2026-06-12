import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.logo}>
        🔥 Epic Reload
      </Link>

      <div style={styles.links}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/" style={styles.link}>Games</Link>
        <Link href="/track-order" style={styles.link}>Track Order</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 30px",
    background: "#0f172a",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  logo: {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "18px",
  },
  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "14px",
  },
};