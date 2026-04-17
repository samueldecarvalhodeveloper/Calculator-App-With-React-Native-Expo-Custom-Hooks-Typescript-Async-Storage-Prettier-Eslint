import { Surface } from "react-native-paper";
import React, { ReactNode, JSX } from "react";
import styles from "./styles";
import { NO_ELEVATION } from "../../../constants/user_interface_constants";

function Keyboard(props: {
  paddingBottom: number;
  children: ReactNode;
}): JSX.Element {
  const { paddingBottom, children } = props;

  return (
    <Surface
      elevation={NO_ELEVATION}
      style={[styles.keyboard, { paddingBottom }]}>
      {children}
    </Surface>
  );
}

export default Keyboard;
