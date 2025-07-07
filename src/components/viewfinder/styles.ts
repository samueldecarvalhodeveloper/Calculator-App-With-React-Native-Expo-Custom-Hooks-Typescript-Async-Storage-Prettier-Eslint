import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewfinder: {
    flex: 2,
    borderBottomStartRadius: 28,
    borderBottomEndRadius: 28,
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 16,
  },

  value: {
    fontWeight: "500",
    alignSelf: "flex-end",
  },
});

export default styles;
