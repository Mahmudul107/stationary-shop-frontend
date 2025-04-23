import Footer from "@/pages/Footer/Footer";
import Navbar from "@/pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="h-full bg-[#f9f7f3] font-poppins">
      <Navbar />
      <div className="pt-[70px] px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
