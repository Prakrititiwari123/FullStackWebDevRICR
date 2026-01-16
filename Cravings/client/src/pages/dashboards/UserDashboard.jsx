import React, { useState } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");

  return (
    <div className=" flex w-full h-[92.5vh]">
      <div className=" border bg-(--color-background) w-2/10">
        <UserSideBar active={active} setActive={setActive} />
      </div>
      <div className=" border border-amber-700 w-8/10">
        {active === "overview" && <UserOverview />}
        {active === "profile" && <UserProfile />}
        {active === "orders" && <UserOrders/>}
        {active === "transaction" && <UserTransaction />}
        {active === "helpdesk" && <UserHelpDesk />}
      </div>
    </div>
  );
};

export default UserDashboard;
