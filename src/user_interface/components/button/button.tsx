import { Surface, Text, TouchableRipple } from "react-native-paper";
import React, { JSX } from "react";
import { NO_ELEVATION } from "../../../constants/user_interface_constants";
import styles from "./styles";
import UserInterfaceCalculatorCharacters from "../../internals/enums/user_interface_calculator_characters";

function Button(props: {
  character: UserInterfaceCalculatorCharacters;
  characterFontSize: number;
  characterColor: string;
  backgroundColor: string;
  borderColor: string;
  rippleColor: string;
  onPress: () => void;
  accessibilityLabel: string;
}): JSX.Element {
  const {
    character,
    characterFontSize,
    characterColor,
    backgroundColor,
    borderColor,
    rippleColor,
    onPress,
    accessibilityLabel,
  } = props;

  return (
    <Surface
      accessible
      accessibilityLabel={accessibilityLabel}
      elevation={NO_ELEVATION}
      style={[styles.button, { backgroundColor, borderColor }]}>
      <TouchableRipple
        rippleColor={rippleColor}
        style={styles.ripple}
        onPress={onPress}>
        <Text
          style={[
            styles.character,
            { fontSize: characterFontSize, color: characterColor },
          ]}>
          {character}
        </Text>
      </TouchableRipple>
    </Surface>
  );
}

export default Button;
