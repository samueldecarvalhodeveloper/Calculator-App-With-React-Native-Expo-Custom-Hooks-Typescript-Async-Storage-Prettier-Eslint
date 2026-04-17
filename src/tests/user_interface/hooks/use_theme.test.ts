import { describe, test, expect } from "@jest/globals";
import { act, renderHook } from "@testing-library/react-native";
import Themes from "../../../assets/themes";
import useTheme from "../../../user_interface/hooks/use_theme";

describe('Test Hook: "useTheme"; Behavior', () => {
  test("Test Stored Theme Is Set On Mount", async () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toEqual(Themes.LIGHT);
  });

  test('Test If Method: "toggleTheme"; Toggles Theme In Theme Store', async () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toEqual(Themes.DARK);
  });
});
