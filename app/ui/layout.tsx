import SideNav from "@/components/Sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6">{children}</div>
    </div>
  );
}
