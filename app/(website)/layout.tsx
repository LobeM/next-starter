import Header from "./_components/header";
import { NavigationSection } from "./_components/menu-navigation";

const navigationData: NavigationSection[] = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Testimonials",
    href: "#",
  },
  {
    title: "Contact us",
    href: "#",
  },
  {
    title: "Offers",
    href: "#",
  },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <Header navigationData={navigationData} />
      <main className="flex flex-col pt-17.5">{children}</main>
    </div>
  );
}
