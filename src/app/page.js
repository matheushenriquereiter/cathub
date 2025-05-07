import Image from "next/image";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="wrapper">
      <Sidebar></Sidebar>

      <div className="main">
        <Image src="/test.jpeg" width={300} height={300} alt="jorge"></Image>
        <Image src="/test.jpeg" width={300} height={300} alt="jorge"></Image>
        <Image src="/test.jpeg" width={300} height={300} alt="jorge"></Image>
        <Image src="/test.jpeg" width={300} height={300} alt="jorge"></Image>
      </div>
    </div>
  );
}
