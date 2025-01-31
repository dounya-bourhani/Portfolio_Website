import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <h1>Hello world</h1>
      <p>
        {new Date().toLocaleTimeString()}
      </p>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>  );
}
