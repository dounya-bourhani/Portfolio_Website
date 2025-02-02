import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";

// export const metadata = {
//   stylesheet: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
// }

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Presentation/>
    </main>  );
}
