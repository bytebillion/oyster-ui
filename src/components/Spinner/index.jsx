import React from "react";
import { Spinner as ChakraSpinner } from "@chakra-ui/spinner";

export default function Spinner() {
  return (
    <span style={{ width: "100%", height: "100%" }}>
      <ChakraSpinner />
    </span>
  );
}
