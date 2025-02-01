import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Presentation/>
    </main>  );
}
