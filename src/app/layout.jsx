import { Roboto } from "next/font/google";
import "./globals.css";
import AuthCheck from "./middleware/AuthCheck";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "CatHub",
  description: "A website for cats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthCheck>{children}</AuthCheck>
      </body>
    </html>
  );
}
