import React from "react";
import { Button } from "./ui/button";
import Tasks from "@/pages/Tasks";
import Profile from "@/pages/Profile";
import DashboardHome from "@/pages/DashboardHome";

interface SidebarLinkProps {
  href?: string;
  label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined;
  icon: React.ReactNode;
}



function Sidebar({display}:any) {
  const SidebarLink: React.FC<SidebarLinkProps> = ({ href, label, icon }) => {
    const change = () => {
      if (String(label).toLowerCase() == String("Tasks").toLowerCase()) display(<Tasks />);
      if (String(label).toLowerCase() == String("Profile").toLowerCase()) display(<Profile />);
      if (String(label).toLowerCase() == String("Dashboard").toLowerCase()) display(<DashboardHome />);
    }
    
    return (
      <a href={href}
        onClick={change}
        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
        aria-label={label?.toString()}
      >
        <span className="flex justify-center items-center">
          {icon}
          <span>{label}</span>
        </span>
      </a>
    );
  };
  function getCookie(cname: string) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  let user = getCookie("user_name");

  return (
    <div className="bg-white" id="backwidth" style={{ width: "fit-content", minHeight: "100vh" }}>
      <div className="flex-col flex h-[100vh]">
        <div className="w-full border-b-2 border-gray-200"></div>
        <div className="flex bg-gray-100 overflow-x-hidden h-screen">
          <div className="bg-white flex flex-col">
            <div className="flex-col pt-5 flex overflow-y-auto h-screen">
              <div className="h-full flex-col justify-evenly px-4 flex items-center">
                <div className="text-black h-14 w-14 rounded-full bg-slate-400 text-center items-center flex justify-center font-bold text-xl">{user ? user.charAt(0) : "Un"}</div>
                <div className="space-y-4 h-4/6">
                  <SidebarLink
                    href="#"
                    label="Dashboard"
                    icon={
                      <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    }
                  />
                  <SidebarLink
                    href="#"
                    label="Tasks"
                    icon={
                      <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        {/* Icon path goes here */}
                      </svg>
                    }
                  />
                  <SidebarLink
                    href="#"
                    label="To Do's"
                    icon={
                      <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        {/* Icon path goes here */}
                      </svg>
                    }
                  />
                  <SidebarLink
                    href="#"
                    label="Profile"
                    icon={
                      <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        {/* Icon path goes here */}
                      </svg>
                    }
                  />
                </div>
                <Button className="rounded-xl w-full top-full ">Logout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
