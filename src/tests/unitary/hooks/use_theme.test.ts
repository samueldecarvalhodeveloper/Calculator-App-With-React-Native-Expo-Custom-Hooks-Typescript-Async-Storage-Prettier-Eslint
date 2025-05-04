import { describe, test, expect } from "@jest/globals";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import Themes from "../../../assets/themes";
import useTheme from "../../../hooks/use_theme";
import { KEY_VALUE_STORE_ACTION_TIMEOUT } from "../../constants/ui_constants";

describe('Test Hook: "useTheme"; Behavior', () => {
  test('Test If Attribute: "theme"; Returns The Stored Theme Correctly', async () => {
    const { result } = renderHook(() => useTheme());

    act(() => {});
    expect(result.current.theme).toEqual(Themes.LIGHT);
  });

  test('Test If Method: "toggleTheme"; Toggle Theme In Theme Store Correctly', async () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    waitFor(
      () => {
        const currentAppTheme: Themes = result.current.theme as Themes;

        expect(currentAppTheme).toEqual(Themes.DARK);
      },
      { timeout: KEY_VALUE_STORE_ACTION_TIMEOUT },
    );
  });
});
