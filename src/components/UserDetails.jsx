import React, { useEffect, useState } from "react";
import Flex from "./layouts/Flex";
import Image from "./layouts/Image";
import DetailsShow from "./layouts/DetailsShow";
import axios from "axios";
const UserDetails = ({ id }) => {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const getUserData = async () => {
      await axios
        .get(`https://dummyjson.com/users/${id}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUserData();
  }, []);
  console.log(userData);
  return (
    <Flex className={"justify-around mt-10 flex-col lg:flex-row gap-y-4"}>
      <div className="w-full lg:w-[30%] rounded-lg ">
        <Image
          src={userData.image}
          className={"bg-slate-200 w-full rounded-lg "}
          imgClassName={"w-full"}
        />
      </div>
      <div className="w-full lg:w-3/5">
        <h4 className="inline-block px-5 py-4 font-mono text-4xl tracking-widest uppercase rounded-md bg-slate-400 text-yellow-50">
          hello
        </h4>
        <h2 className="mt-4 mb-2 font-mono text-4xl capitalize ">
          i'm <span className="text-5xl font-bold">{userData.firstName} </span>
        </h2>
        <h5 class="text-2xl text-gray-500 capitalize font-medium">
          {userData.company.title}
        </h5>
        <Flex className="flex flex-col justify-between py-5 mt-10 border-t-2 border-gray-400 sm:flex-row gap-y-6">
          <Flex className={"flex-col sm:w-[49%] gap-y-4 w-full"}>
            <DetailsShow title={"email"} value={userData.email} />
            <DetailsShow title={"phone"} value={userData.phone} />
            <DetailsShow title={"age"} value={userData.age} />
          </Flex>
          <Flex className={"flex-col sm:w-[49%] gap-y-4 w-full"}>
            <DetailsShow title={"address"} value={userData.address.address} />
            <DetailsShow title={"birthDate"} value={userData.birthDate} />
            <DetailsShow title={"bloodGroup"} value={userData.bloodGroup} />
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default UserDetails;
