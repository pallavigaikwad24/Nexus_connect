import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-500 to-teal-600 flex flex-col">
      {/* Header */}
      <HeaderComponent />
      {children}
      {/* Footer */}
      <FooterComponent />
    </div>
  );
}
