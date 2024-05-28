import LeftSidebar from "@/containers/left-sidebar";
import MainSection from "@/containers/main-section";
import RightSidebar from "@/containers/right-sidebar";
import "../styles/globals.css";

export default function Home() {
  return (
    <main className="flex">
      <LeftSidebar />
      <MainSection />
      <RightSidebar  />
    </main>
  );
}
