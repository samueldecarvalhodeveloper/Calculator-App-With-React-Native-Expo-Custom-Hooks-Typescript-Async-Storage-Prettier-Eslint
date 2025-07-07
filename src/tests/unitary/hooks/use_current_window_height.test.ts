import { describe, test, expect } from "@jest/globals";
import { renderHook } from "@testing-library/react-native";
import useCurrentWindowHeight from "../../../hooks/use_current_window_height";

describe('Test Hook: "useCurrentWindowHeight"; Behavior', () => {
  test("Test If Hook Instances Returns The Current Window Height Correctly", () => {
    const currentWindowHeight: number = renderHook(() =>
      useCurrentWindowHeight(),
    ).result.current;

    expect(currentWindowHeight).toBeTruthy();
  });
});
