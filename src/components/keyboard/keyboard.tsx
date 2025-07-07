import { Surface } from "react-native-paper";
import { ReactNode, JSX } from "react";
import styles from "./styles";
import { NO_ELEVATION } from "../../constants/ui_constants";

function Keyboard(props: {
  paddingBottom: number;
  children: ReactNode;
  accessibilityLabel: string;
}): JSX.Element {
  const { paddingBottom, children, accessibilityLabel } = props;

  return (
    <Surface
      accessibilityLabel={accessibilityLabel}
      elevation={NO_ELEVATION}
      style={[styles.keyboard, { paddingBottom }]}>
      {children}
    </Surface>
  );
}

export default Keyboard;
