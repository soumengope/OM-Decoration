import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "OM Decoration - Event & Flower Decorations",
  description:
    "OM Decoration offers premium flower decoration services for weddings, birthdays, and special events. Make your events unforgettable!",
  keywords: "flower decoration, wedding decoration, birthday decoration, event planner, OM Decoration",
  author: "OM Decoration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
