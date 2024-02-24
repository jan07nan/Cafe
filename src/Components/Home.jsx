import SideNav from "./SideNav";
import Center from "./Center";
import Corner from "./Corner";

function Home() {
  return (
    <div className="flex flex-row h-full">
      <SideNav />
      <Center />
      <Corner />
    </div>
  );
}

export default Home;
