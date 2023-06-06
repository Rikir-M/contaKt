import React, { useState } from "react";

import { RiUserHeartLine } from "react-icons/ri";
import {BsFillPersonFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

const FavTable = () => {
  const nav = useNavigate()
  return (
    <div>
      <div className=" overflow-x-hidden md:overflow-x-visible  sm:rounded-lg ">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-black uppercase bg-gray-200  hidden lg:table-row-group">
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
            <tr className="bg-white border-b text-black hidden lg:table-row ">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap "
              >
                <div className="flex items-center  gap-3">
                  <div className="text-white bg-primary p-2 rounded-full"><BsFillPersonFill className="text-2xl"/></div>
                  <span className="text-black">Heather</span>
                </div>
              </td>
              <td className="px-6 py-4 ">
                heather@gmail.com
              </td>
              <td className="px-6 py-4">09100200300</td>
              <td className="px-6 py-4">August 31 2021</td>
              <td className="px-6 py-4 ">
                <a
                  href="#"
                  className="font-medium text-black hover:underline "
                >
                  <p className="bg-primary border-2 hover:bg-transparent hover:text-primary border-primary transition-all duration-200 rounded inline-block text-white px-4 py-2">Remove from favorite</p>
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b text-black lg:hidden ">
              <td
                scope="row"
                colSpan={4}
                className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap w-full"
              >
                <div className="flex items-center   gap-3">
                <div className="text-white bg-primary p-2 rounded-full"><BsFillPersonFill className="text-2xl"/></div>

                  <span className="text-black">Heather</span>
                </div>
              </td>
      
            </tr>
          
  
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavTable;
