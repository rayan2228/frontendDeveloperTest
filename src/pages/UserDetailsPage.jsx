import Container from "../components/layouts/Container";
import React from "react";
import UserDetails from "../components/UserDetails";
import Heading from "../components/layouts/Heading";
import { useParams } from "react-router-dom";

const UserDetailsPage = () => {
 let {id}  = useParams()
  return (
    <section className="px-2 py-4 lg:px-2">
      <Container>
       <Heading title={" user details"}/>
        <UserDetails id={id} />
      </Container>
    </section>
  );
};

export default UserDetailsPage;
