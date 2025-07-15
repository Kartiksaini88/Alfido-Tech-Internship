import React from "react";
import { Link } from "react-router";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
    color: "#fff",
  },
  navItems: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
  },
  item: {
    cursor: "pointer",
    transition: "color 0.3s",
    color: "#fff",
  },
  Link: {
    textDecoration: "none",
    color: "#fff",
  },
};
export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link style={styles.Link} to={"/"}>
        {" "}
        <h2 style={styles.logo}>FashionHub</h2>
      </Link>
      <ul style={styles.navItems}>
        <Link style={styles.Link} to={"/about"}>
          <li style={styles.item}>About</li>
        </Link>
        <Link style={styles.Link} to={"/contact"}>
          <li style={styles.item}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
