import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { key: "overview", title: "Overview", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icon: <CgProfile /> },
    { key: "orders", title: "Orders", icon: <TiShoppingCart /> },
    { key: "transaction", title: "Transaction", icon: <TbTransactionRupee /> },
    { key: "helpdesk", title: "Help Desk", icon: <RiCustomerService2Fill /> },
  ];
  return (
    <>
      <div className=" p-3">
        <div className="h-10 text-xl font-bold flex items-center gap-5 mb-2">
          {" "}
          <button
            className=" ms-2 hover:scale-105"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <GiHamburgerMenu className="" />
          </button>
          {!isCollapsed && (
            <span className="overflow-hidden text-nowrap">User Dashboard</span>
          )}
        </div>
        <hr />

        {/* {isCollapsed ? (
          <div className="py-6 space-y-5 ">
            {menuItems.map((item, idx) => (
              <button
                className={`flex gap-3 items-center p-3 rounded-xl 
            ${
              active === item.key
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
                onClick={() => setActive(item.key)}
                key={idx}
              >
                {item.icon}
              </button>
            ))}
          </div>
        ) : (
          <div className=" py-6 space-y-3">
            {menuItems.map((item, idx) => (
              <button
                className={`flex gap-3 items-center p-3 rounded-xl 
            ${
              active === item.key
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
                onClick={() => setActive(item.key)}
                key={idx}
              >
                {item.icon}
                {item.title}
              </button>
            ))}
          </div>
        )} */}




        <div className=" py-6 space-y-5 w-full ">
            {menuItems.map((item, idx) => (
              <button
                className={`flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300
            ${
              active === item.key
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
                onClick={() => setActive(item.key)}
                key={idx}
              >
                {item.icon}
                {!isCollapsed && item.title}
              </button>
            ))}
          </div>




      </div>
    </>
  );
};

export default UserSideBar;
