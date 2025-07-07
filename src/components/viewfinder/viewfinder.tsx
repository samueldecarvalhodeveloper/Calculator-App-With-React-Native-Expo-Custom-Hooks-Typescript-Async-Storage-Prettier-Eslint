import { Surface, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { useState, JSX } from "react";
import styles from "./styles";
import {
  NO_ELEVATION,
  UNSET_SCROLL_OFFSET,
} from "../../constants/ui_constants";

function Viewfinder(props: {
  value: string;
  valueTestId: string;
  valueFontSize: number;
  backgroundColor: string;
  borderColor: string;
  valueColor: string;
  paddingBottom: number;
  marginBottom: number;
  accessibilityLabel: string;
}): JSX.Element {
  const {
    value,
    valueTestId,
    valueFontSize,
    backgroundColor,
    borderColor,
    valueColor,
    paddingBottom,
    marginBottom,
    accessibilityLabel,
  } = props;
  const [scrollViewContentSize, setScrollViewContentSize] =
    useState<number>(UNSET_SCROLL_OFFSET);

  return (
    <Surface
      accessible
      accessibilityLabel={accessibilityLabel}
      elevation={NO_ELEVATION}
      style={[
        styles.viewfinder,
        { backgroundColor, borderColor, paddingBottom, marginBottom },
      ]}>
      <ScrollView
        indicatorStyle="white"
        horizontal
        onContentSizeChange={(e) => {
          setScrollViewContentSize(e);
        }}
        contentOffset={{ x: scrollViewContentSize, y: UNSET_SCROLL_OFFSET }}>
        <Text
          testID={valueTestId}
          style={[
            styles.value,
            {
              color: valueColor,
              fontSize: valueFontSize,
            },
          ]}>
          {value}
        </Text>
      </ScrollView>
    </Surface>
  );
}

export default Viewfinder;
