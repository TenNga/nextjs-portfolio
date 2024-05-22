import LeftSidebar from "@/containers/left-sidebar";
import RightSidebar from "@/containers/right-sidebar";

export default function Home() {
  return (
    <main className="flex">
      <LeftSidebar />
      <div className="grow-[3]">Main Page</div>
      <RightSidebar />
    </main>
  );
}
