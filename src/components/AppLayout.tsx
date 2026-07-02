import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const AppLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default AppLayout;
