import { Surface, Text, TouchableRipple } from "react-native-paper";
import { JSX } from "react";
import { NO_ELEVATION } from "../../constants/ui_constants";
import styles from "./styles";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";

function Button(props: {
  character: UiCalculatorCharacters;
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
