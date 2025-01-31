import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Welcome/>
    </main>  );
}
