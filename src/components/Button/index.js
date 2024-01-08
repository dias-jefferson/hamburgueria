import React from "react";

import { Button } from "./styles";

function StyledButton({children, ...props}) {
  return <Button {...props}>{children}</Button>

}

export default StyledButton;
