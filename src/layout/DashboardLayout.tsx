
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { logout, selectUser } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { LogOutIcon } from "lucide-react";
import { userPaths } from "@/constant/userSidebar.constant";
import { adminPaths } from "@/constant/adminSidebar.constant";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const userRole = {
    ADMIN: "admin",
    USER: "user",
  };

  const role = user?.role;
  const sidebarItems = role === userRole.ADMIN ? adminPaths : userPaths;

  return (
    <div className="flex min-h-screen bg-[#F5F1EA] text-[#333333]">
      {/* Sidebar */}
      <aside className="w-[250px] hidden lg:flex flex-col bg-[#2F5233] text-white border-r border-[#A8BBA540] sticky top-0 h-screen z-20">
        <div
          className="flex items-center justify-center gap-3 p-5 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-2xl font-bold text-[#F5F1EA]">
            Leaf And Line
          </span>
        </div>

        <ScrollArea className="flex-1 px-2 pb-4">
          <ul className="space-y-1">
            {sidebarItems?.map((item) => (
              <li
                key={item.key}
                className="hover:bg-[#A8BBA5]/20 rounded-lg transition-all"
                onClick={() => navigate(item.path)}
              >
                <div className="p-3 cursor-pointer">{item.label}</div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </aside>

      {/* Main Layout */}
      <main className="flex flex-col flex-1">
        {/* Header */}
        <header className="sticky top-0 bg-[#F5F1EA] border-b border-[#A8BBA540] h-16 px-6 flex items-center justify-between z-10">
          <h1 className="text-lg font-semibold">
            {role === userRole.ADMIN ? "Admin Dashboard" : "My Account"}
          </h1>
          <Button
            onClick={() => dispatch(logout())}
            className="bg-[#2F5233] text-white hover:bg-[#A8BBA5]"
          >
            <LogOutIcon className="mr-2" />
            Logout
          </Button>
        </header>

        {/* Content */}
        <section className="flex-1 p-6 bg-[#F5F1EA]">
          <Card className="rounded-2xl p-6 shadow-md border border-[#A8BBA540] bg-[#F5F1EA] text-[#333333] min-h-[calc(100vh-112px)]">
            <Outlet />
          </Card>
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
