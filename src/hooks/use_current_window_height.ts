import { useMemo } from "react";
import { useWindowDimensions } from "react-native";

function useCurrentWindowHeight(): number {
  const { height } = useWindowDimensions();

  return useMemo(() => height, [height]);
}

export default useCurrentWindowHeight;
