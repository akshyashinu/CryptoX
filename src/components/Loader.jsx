import React from "react";
import { Spinner } from "@chakra-ui/react";
const Loader = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.35s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      marginTop={"40vh"}
      marginLeft={"50%"}
    />
  );
};

export default Loader;
