import "./globals.css"; // Agar Tailwind CSS use kar rahe ho

export const metadata = {
  title: "RoadMitra",
  description: "Live Command & Rescue System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
