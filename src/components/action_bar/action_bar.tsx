import { Appbar } from "react-native-paper";
import React, { JSX } from "react";
import styles from "./styles";

function ActionBar(props: {
  icon: string;
  iconColor: string;
  onPress: () => void;
  testID: string;
  toggleThemeButtonTestID: string;
  rippleEffectColor: string;
  backgroundColor: string;
  elementAccessibilityLabel: string;
  toggleThemeButtonAccessibilityLabel: string;
}): JSX.Element {
  const {
    icon,
    iconColor,
    onPress,
    testID,
    toggleThemeButtonTestID,
    rippleEffectColor,
    backgroundColor,
    elementAccessibilityLabel,
    toggleThemeButtonAccessibilityLabel,
  } = props;

  return (
    <Appbar.Header
      accessibilityLabel={elementAccessibilityLabel}
      testID={testID}
      style={[
        styles.actionBar,
        {
          backgroundColor,
        },
      ]}>
      <Appbar.Action
        accessible
        accessibilityLabel={toggleThemeButtonAccessibilityLabel}
        animated={false}
        color={iconColor}
        icon={icon}
        testID={toggleThemeButtonTestID}
        rippleColor={rippleEffectColor}
        onPress={onPress}
      />
    </Appbar.Header>
  );
}

export default ActionBar;
