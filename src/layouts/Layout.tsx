import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { Toaster } from "react-hot-toast";
import { ShopProvider, UserProvider } from "../context";

export function Layout(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <ShopProvider>
        <UserProvider>
          <Toaster position="bottom-right" />
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </UserProvider>
      </ShopProvider>
    </div>
  );
}
