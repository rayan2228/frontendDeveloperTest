import Container from "../components/layouts/Container";
import React from "react";
import UserDetails from "../components/UserDetails";
import Heading from "../components/layouts/Heading";
import { Link, useParams } from "react-router-dom";

const UserDetailsPage = () => {
  let { id } = useParams();
  return (
    <section className="px-2 py-4 lg:px-2">
      <Container>
        <Heading title={" user details"} />
        <UserDetails id={id} />
        <Link className="block py-4 mt-10 text-4xl font-bold text-center capitalize rounded-md bg-slate-900 text-yellow-50" to={"/"}>
          go to user list
        </Link>
      </Container>
    </section>
  );
};

export default UserDetailsPage;
