import LeftSidebar from "@/containers/left-sidebar";
import MainSection from "@/containers/main-section";
import RightSidebar from "@/containers/right-sidebar";
import "../styles/globals.css";

export default function Home() {
  return (
    <main className="flex">
      <LeftSidebar className="grow" />
      <MainSection className="grow-[3]"  />
      <RightSidebar className="grow-[2]"  />
    </main>
  );
}
