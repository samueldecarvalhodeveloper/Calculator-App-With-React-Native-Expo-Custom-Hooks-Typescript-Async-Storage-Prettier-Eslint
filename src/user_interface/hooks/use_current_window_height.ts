import { useWindowDimensions } from "react-native";

function useCurrentWindowHeight() {
  const { height } = useWindowDimensions();

  return height;
}

export default useCurrentWindowHeight;
