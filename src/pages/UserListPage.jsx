import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserList } from "../app/slices/userListSlice";
import AllUserList from "../components/AllUserList";
import Heading from "../components/layouts/Heading";
import Loading from "../components/layouts/Loading";

const UserListPage = () => {
  const allUserData = useSelector((state) => state.userLists.value);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserList = async () => {
      await axios
        .get("https://dummyjson.com/users")
        .then((response) => {
          dispatch(addUserList(response.data.users));
          localStorage.setItem("userList", JSON.stringify(response.data.users));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    allUserData.length === 0 ? getUserList() : setLoading(false);
  }, []);

  return (
    <section className="px-2 py-4 lg:px-2">
      <Container>
        <Heading title="user lists" />
        <Flex className={"mt-10 flex-wrap justify-between gap-y-10"}>
          {loading ? <Loading /> : <AllUserList />}
        </Flex>
      </Container>
    </section>
  );
};

export default UserListPage;
