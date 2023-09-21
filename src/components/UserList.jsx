import React from "react";
import Image from "./layouts/Image";
import { Link } from "react-router-dom";

const UserList = ({ designation, name, src,id }) => {
  return (
    <div className="w-full  sm:w-[30%] bg-white border border-gray-200 rounded-lg shadow text-center py-5">
      <Image
        src={src}
        className={"w-[150px] rounded-full inline-block border border-gray-200"}
        imgClassName={"w-full rounded-full"}
      />
      <h2 class="mb-1 text-xl font-medium text-gray-900 capitalize">{name}</h2>
      <h5 class="text-sm text-gray-500 capitalize">{designation}</h5>
      <Link
        to={`/userdetails/${id}`}
        className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white rounded-lg bg-slate-900 hover:bg-slate-800"
      >
        view profile
      </Link>
    </div>
  );
};

export default UserList;
