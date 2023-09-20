import React from "react";
import { useSelector } from "react-redux";
import UserList from "../components/UserList";
const AllUserList = () => {
  const userData = useSelector((state) => state.userLists.value);
  return userData.map((user) => (
    <UserList
      key={user.id}
      src={user.image}
      name={user.firstName}
      designation={user.company.title}
      id={user.id}
    />
  ));
};

export default AllUserList;
