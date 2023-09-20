import React, { useEffect } from "react";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUserList } from "../app/slices/userListSlice";
import AllUserList from "../components/AllUserList";
import Heading from "../components/layouts/Heading";
const UserListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserList = async () => {
      await axios
        .get("https://dummyjson.com/users")
        .then((response) => {
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
        <Heading title="user lists" />
        <Flex className={"mt-10 flex-wrap justify-between gap-y-10"}>
          <AllUserList />
        </Flex>
      </Container>
    </section>
  );
};

export default UserListPage;
