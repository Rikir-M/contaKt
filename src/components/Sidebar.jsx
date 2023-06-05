import React from "react";
import Navbar from "./Navbar";
import { FiPlus } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import ContactTable from "./ContactTable";

const Sidebar = () => {
  return (
    <div>
      <aside
        // id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen  -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full rounded-r-xl px-3 py-4 overflow-y-auto bg-primary dark:bg-gray-800 mt-16 text-white">
          <ul className="space-y-4 font-medium ">
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white transition-all duration-200 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
                  <FiPlus />
                  Create Contact
                </span>
              </a>
            </li>
            <li className="hover:text-black transition-all duration-200 ">
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
                  <RiContactsLine />
                  My Contacts
                </span>
                <div className="ml-12 inline-flex items-center justify-center w-3 h-3 p-3  text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white hover:text-black transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
                  <AiOutlineHeart />
                  Favorite
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <ContactTable />
      </div>
    </div>
  );
};

export default Sidebar;
