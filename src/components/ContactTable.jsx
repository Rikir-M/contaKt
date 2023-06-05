import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import { LuTrash } from "react-icons/lu";
import { RiUserHeartLine } from "react-icons/ri";

const ContactTable = () => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <div className=" overflow-x-auto lg:overflow-x-visible  sm:rounded-lg ">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-black uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Created Date
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="bg-white border-b text-black">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap"
              >
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <span className="text-black">Heather</span>
                </div>
              </td>
              <td className="px-6 py-4">heather@gmail.com</td>
              <td className="px-6 py-4">09100200300</td>
              <td className="px-6 py-4">August 31 2021</td>
              <td className="px-6 py-4 ">
                <a
                  href="#"
                  onClick={clickHandler}
                  className="font-medium text-black hover:underline"
                >
                  <HiOutlineDotsHorizontal />
                </a>
              </td>
            </tr>
            {clicked && (
              <tr className="relative">
                <td colSpan="5" className="px-6 py-4">
                  <div className="absolute top-[-20px] right-0">
                    <table className="bg-white border border-gray-200 flex flex-col gap-1 cursor-pointer">
                      <tbody>
                        <tr className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2">
                          <td>
                            <RiUserHeartLine className="text-2xl" />
                          </td>
                          <td>
                            <p>Add to Favorite</p>
                          </td>
                        </tr>
                        <tr className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2">
                          <td>
                            <BiPencil className="text-2xl" />
                          </td>
                          <td>
                            <p>Edit</p>
                          </td>
                        </tr>
                        <tr className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2">
                          <td>
                            <LuTrash className="text-2xl" />
                          </td>
                          <td>
                            <p>Delete</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            )}
            <tr className="bg-white border-b text-black">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap"
              >
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <span className="text-black">Heather</span>
                </div>
              </td>
              <td className="px-6 py-4">heather@gmail.com</td>
              <td className="px-6 py-4">09100200300</td>
              <td className="px-6 py-4">August 31 2021</td>
              <td className="px-6 py-4 ">
                <a
                  href="#"
                  onClick={clickHandler}
                  className="font-medium text-black hover:underline"
                >
                  <HiOutlineDotsHorizontal />
                </a>
              </td>
            </tr>
            {clicked && (
              <tr className="relative">
                <td colSpan="5" className="px-6 py-4">
                  <div className="absolute top-[-20px] right-0">
                    <table className="bg-white border border-gray-200 flex flex-col gap-1 cursor-pointer">
                      <tbody>
                        <tr className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2">
                          <td>
                            <RiUserHeartLine className="text-2xl" />
                          </td>
                          <td>
                            <p>Add to Favorite</p>
                          </td>
                        </tr>
                        <tr className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2">
                          <td>
                            <BiPencil className="text-2xl" />
                          </td>
                          <td>
                            <p>Edit</p>
                          </td>
                        </tr>
                        <tr className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2">
                          <td>
                            <LuTrash className="text-2xl" />
                          </td>
                          <td>
                            <p>Delete</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
