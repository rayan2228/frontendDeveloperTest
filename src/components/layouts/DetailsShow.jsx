import React from "react";
import Flex from "./Flex";

const DetailsShow = ({ title, value }) => {
  return (
    <Flex className={"text-3xl capitalize justify-between items-center flex-wrap"}>
      <h5 className="font-bold ">{title} :</h5>
      <h5 className="text-xl font-normal ">{value}</h5>
    </Flex>
  );
};

export default DetailsShow;
