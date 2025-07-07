import { useWindowDimensions } from "react-native";

function useCurrentWindowHeight(): number {
  return useWindowDimensions().height;
}

export default useCurrentWindowHeight;
