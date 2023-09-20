import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import UserList from "../components/UserList";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUserList } from "../app/slices/userListSlice";
const UserListPage = () => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserList = async () => {
      await axios
        .get("https://dummyjson.com/users")
        .then((response) => {
          setUserData(response.data.users);
          dispatch(addUserList(response.data.users));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUserList();
  }, []);
  return (
    <section className="px-2 py-4 lg:px-2">
      <Container>
        <h1 className="text-5xl font-bold text-center capitalize ">
          user lists
        </h1>
        <Flex className={"mt-10 flex-wrap justify-between gap-y-10"}>
          {userData.map((user, index) => (
            <UserList
              key={index}
              src={user.image}
              name={user.firstName}
              designation={user.company.title}
            />
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default UserListPage;
