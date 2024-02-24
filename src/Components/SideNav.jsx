import { IoSettingsSharp } from "react-icons/io5";

function SideNav() {
  return (
    <div className="bg-[#320617] p-1 py-3 rounded-xl h-full">
      <button className="flex text-white justify-center items-center font-md m-auto rounded-md bg-[#6F042D] flex-col w-10 h-10 mb-10">
        <a className={"text-xs"}>J</a>
      </button>
      <SideNavButton
        path={"/"}
        isSelected={true}
        label={"Home"}
        Icon={IoSettingsSharp}
      />
      <SideNavButton
        path={"/"}
        isSelected={false}
        label={"Sale"}
        Icon={IoSettingsSharp}
      />
      <SideNavButton
        path={"/"}
        isSelected={false}
        label={"Statistic"}
        Icon={IoSettingsSharp}
      />
      <SideNavButton
        path={"/"}
        isSelected={false}
        label={"Wallet"}
        Icon={IoSettingsSharp}
      />
      <SideNavButton
        path={"/"}
        isSelected={false}
        label={"Setting"}
        Icon={IoSettingsSharp}
      />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function SideNavButton({ Icon, path, label, isSelected }) {
  return (
    <>
      <button
        className={
          isSelected
            ? "flex text-white justify-center items-center font-sm m-3 rounded-md bg-[#6F042D] flex-col w-12 h-12"
            : "flex  justify-center text-gray-300 items-center font-sm m-3  flex-col w-12 h-12"
        }
      >
        <Icon />

        <a className={"text-xs"} href={path}>
          {label}
        </a>
      </button>
    </>
  );
}

export default SideNav;
