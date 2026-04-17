import { Surface, Text, TouchableRipple } from "react-native-paper";
import React, { JSX } from "react";
import { NO_ELEVATION } from "../../../constants/user_interface_constants";
import styles from "./styles";
import CalculatorCharacters from "../../internals/enums/calculator_characters";

function Button(props: {
  character: CalculatorCharacters;
  characterFontSize: number;
  characterColor: string;
  backgroundColor: string;
  borderColor: string;
  rippleColor: string;
  onPress: () => void;
}): JSX.Element {
  const {
    character,
    characterFontSize,
    characterColor,
    backgroundColor,
    borderColor,
    rippleColor,
    onPress,
  } = props;

  return (
    <Surface
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
