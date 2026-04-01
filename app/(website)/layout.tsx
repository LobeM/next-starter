import Footer from "./_components/footer";
import Header from "./_components/header";
import { footerData, navigationData } from "./_constants";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <Header navigationData={navigationData} />
      {/* Main Section */}
      <main className="flex flex-col pt-17.5">{children}</main>
      {/* Header Section */}
      <Footer footerData={footerData} />
    </div>
  );
}
