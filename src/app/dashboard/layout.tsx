import BottomNav from "@/components/BottomNav";  // import the BottomNav component
import Header from "@/components/DashboardHeader"; // Assuming you already have a Header component
import Spacer from "@/components/Spacer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6">{children}</main>
      {/* Include Bottom Navigation */}
      <Spacer />
      <BottomNav />
    </div>
  );
};

export default DashboardLayout;
