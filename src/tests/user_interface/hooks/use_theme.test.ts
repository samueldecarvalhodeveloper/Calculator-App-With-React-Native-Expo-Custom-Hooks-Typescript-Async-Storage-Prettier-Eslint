import { describe, test, expect, beforeEach } from "@jest/globals";
import { act, renderHook } from "@testing-library/react-native";
import Themes from "../../../assets/themes";
import useTheme from "../../../user_interface/hooks/use_theme";
import ThemeStore from "../../../user_interface/store/theme_store";
import LightThemeValueObject from "../../../user_interface/internals/value_objects/theme_value_objects/concrete/light_theme_value_object";
import DarkThemeValueObject from "../../../user_interface/internals/value_objects/theme_value_objects/concrete/dark_theme_value_object";

describe('Test Hook: "useTheme"; Behavior', () => {
  beforeEach(() => {
    ThemeStore.setTheme(Themes.LIGHT);
  });

  test("Test Stored Theme Is Set On Mount", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme instanceof LightThemeValueObject).toBeTruthy();
  });

  test('Test If Method: "toggleTheme"; Toggles Theme In Theme Store', async () => {
    const { result } = renderHook(() => useTheme());

    await act(async () => {
      await result.current.toggleTheme();
    });

    expect(result.current.theme instanceof DarkThemeValueObject).toBeTruthy();
  });
});
