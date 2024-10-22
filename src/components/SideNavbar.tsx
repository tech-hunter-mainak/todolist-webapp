import React from "react";

interface SidebarLinkProps {
  href?: string;
  label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined;
  icon: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, label, icon }) => {
  return (
    <a
      href={href}
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

function Sidebar() {
  return (
    <div className="bg-white" id="backwidth" style={{ width: "fit-content", minHeight: "100vh" }}>
      <div className="flex-col flex">
        <div className="w-full border-b-2 border-gray-200"></div>
        <div className="flex bg-gray-100 overflow-x-hidden">
          <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
            <div className="flex-col pt-5 flex overflow-y-auto">
              <div className="h-full flex-col justify-between px-4 flex">
                <div className="space-y-4">
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
                    label="Hero"
                    icon={
                      <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        {/* Icon path goes here */}
                      </svg>
                    }
                  />
                  <SidebarLink
                    href="#"
                    label="Settings"
                    icon={
                      <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        {/* Icon path goes here */}
                      </svg>
                    }
                  />
                  <SidebarLink
                    href="#"
                    label="Logout"
                    icon={
                      <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        {/* Icon path goes here */}
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
