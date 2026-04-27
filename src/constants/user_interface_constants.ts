import { ElevationLevels } from "react-native-paper/lib/typescript/types";
import LightThemeValueObject from "../user_interface/internals/value_objects/theme_value_objects/concrete/light_theme_value_object";
import DarkThemeValueObject from "../user_interface/internals/value_objects/theme_value_objects/concrete/dark_theme_value_object";
import EnglishLanguage from "../user_interface/internals/languages_specific_constants.ts/english_language";

export const THEME_STORE_KEY: string = "theme_store";

export const UNSET_SCROLL_OFFSET: number = 0;

export const NO_ELEVATION: ElevationLevels = 0;

export const DARK_DEVICE_THEME: string = "dark";

export const LIGHT_DEVICE_THEME: string = "light";

export const LAST_SESSION_EXPRESSION_STORE_KEY: string =
  "last_session_expression";

export const EXTRA_SMALL_WINDOW_HEIGHT: number = 576;

export const GREATER_WINDOW_HEIGHT: number = 577;

export const SUN_ICON_NAME: string = "white-balance-sunny";

export const MOON_ICON_NAME: string = "moon-waxing-crescent";

export const VIEWFINDER_VALUE_ELEMENT_TEST_ID: string =
  "viewfinder_value_element_test_id";

export const LAST_EXPRESSION_KEY: string = "last-expression";

export const KEY_VALUE_STORE_ACTION_TIMEOUT: number = 1000;

export const ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID: string =
  "action_bar_toggle_theme_button_element_test_id";

export const LIGHT_THEME = new LightThemeValueObject();

export const DARK_THEME = new DarkThemeValueObject();

export const APPLICATION_LANGUAGE = new EnglishLanguage();
