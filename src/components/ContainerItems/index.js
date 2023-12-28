import React from "react";

import { ContainerItems } from "./styles";

function Container({children}) {
  return <ContainerItems>{children}</ContainerItems>;
}

export default Container;
