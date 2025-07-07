import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  surface: {
    flex: 1,
  },

  defaultKeyboardRow: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },

  biggerContainer: { flex: 2.3, flexDirection: "row", gap: 8 },

  biggerContainerFirstRow: {
    flex: 3,
  },

  biggerContainerFirstRowFirstRow: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },

  biggerContainerFirstRowSecondRow: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  zeroButtonContainer: {
    flex: 2,
  },

  evaluateButtonContainer: {
    flex: 0.97,
  },
});

export default styles;
