import { StatusBarStyle } from "react-native";
import { ElevationLevels } from "react-native-paper/lib/typescript/types";

export const THEME_STORE_KEY: string = "theme_store";

export const STATUS_BAR_DARK_CONTENT_COLOR: StatusBarStyle = "dark-content";

export const STATUS_BAR_LIGHT_CONTENT_COLOR: StatusBarStyle = "light-content";

export const UNSET_SCROLL_OFFSET: number = 0;

export const NO_ELEVATION: ElevationLevels = 0;

export const DARK_DEVICE_THEME: string = "dark";

export const LAST_SESSION_CALCULATION_EXPRESSION_STORE_KEY: string =
  "last_session_calculation_expression";

export const EXTRA_SMALL_WINDOW_HEIGHT: number = 576;

export const DEVICE_LIGHT_THEME: string = "light";

export const HOME_ROUTER = "home";

export const SIMPLE_CALCULATOR_CALCULATION_EXPRESSION = "1+1";

export const LIGHT_DEVICE_THEME: string = "light";

export const GREATER_WINDOW_HEIGHT: number = 577;

export const DEVICE_ANDROID_OPERATING_SYSTEM: string = "android";

export const KEY_VALUE_STORE_ACTION_TIMEOUT: number = 1000;

export const ACTION_BAR_ELEMENT_TEST_ID: string = "action_bar_element_test_id";

export const ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID: string =
  "action_bar_toggle_theme_button_element_test_id";

export const SUN_ICON_NAME: string = "white-balance-sunny";

export const MOON_ICON_NAME: string = "moon-waxing-crescent";

export const VIEWFINDER_VALUE_ELEMENT_TEST_ID: string =
  "viewfinder_value_element_test_id";

export const PORTUGUESE_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
  "Erro (Expressão Não Válida)";

export const ENGLISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
  "Error (Not Valid Expression)";

export const SPANISH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
  "Error (Expresión No Válida)";

export const GERMAN_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
  "Fehler (Kein Gültiger Ausdruck)";

export const FRENCH_LANGUAGE_NOT_VALID_EXPRESSION_ERROR_MESSAGE: string =
  "Erreur (Expression Non Valide)";

export const ENGLISH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Toggle Theme Action Bar Button: Toggle Theme";

export const GERMAN_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Aktionsleistenschaltfläche Design Umschalten: Design Umschalten";

export const PORTUGUESE_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Botão Alternar Barra De Ação Do Tema: Alternar Tema";

export const SPANISH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Alternar Botón De La Barra De Acción Del Tema: Alternar Tema";

export const FRENCH_THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Bouton Basculer La Barre D'action Du Thème: Basculer Le Thème";

export function ENGLISH_CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL(
  value: string,
): string {
  return `Calculator Calculation Result Viewfinder Element: The Calculation Result Is: ${value}`;
}

export function PORTUGUESE_CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL(
  value: string,
): string {
  return `Elemento Do Visor Do Resultado Do Cálculo Da Calculadora: O Resultado Do Cálculo É: ${value}`;
}

export function SPANISH_CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL(
  value: string,
): string {
  return `Elemento Del Visor Del Resultado Del Cálculo De La Calculadora: El Resultado Del Cálculo Es: ${value}`;
}

export function FRENCH_CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL(
  value: string,
): string {
  return `Élément Du Viseur Du Résultat Du Calcul De La Calculatrice: Le Résultat Du Calcul Est: ${value}`;
}

export function GERMAN_CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL(
  value: string,
): string {
  return `Rechner Berechnungsergebnis Sucherelement: Das Berechnungsergebnis Ist: ${value}`;
}

export function ENGLISH_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
  character: string,
): string {
  return `Calculator Keyboard Button Element With Character: ${character}. Add Character To Calculator Calculation Result`;
}

export function PORTUGUESE_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
  character: string,
): string {
  return `Elemento Do Botão Do Teclado Da Calculadora Com Caractere: ${character}. Adicionar Caractere Ao Resultado Do Cálculo Da Calculadora`;
}

export function SPANISH_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
  character: string,
): string {
  return `Elemento De Botón Del Teclado De La Calculadora Con Carácter: ${character}. Agregar Carácter Al Resultado Del Cálculo De La Calculadora`;
}

export function FRENCH_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
  character: string,
): string {
  return `Élément De Bouton Du Clavier De La Calculatrice Avec Caractère: ${character}. Ajouter Un Caractère Au Résultat Du Calcul De La Calculatrice`;
}

export function GERMAN_CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
  character: string,
): string {
  return `Tastenelement Der Taschenrechnertastatur Mit Zeichen: ${character}. Fügen Sie Zeichen Zum Berechnungsergebnis Des Rechners Hinzu`;
}

export const ENGLISH_HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Home Screen";

export const PORTUGUESE_HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Tela Inicial";

export const SPANISH_HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Pantalla De Inicio";

export const FRENCH_HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Écran D'accueil";

export const GERMAN_HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Startbildschirm";

export const ENGLISH_ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL: string =
  "App Action Bar";

export const PORTUGUESE_ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Barra De Ação Do Aplicativo";

export const SPANISH_ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Barra De Acción De La Aplicación";

export const FRENCH_ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Barre d'action de l'application";

export const GERMAN_ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL: string =
  "App-Aktionsleiste";

export const ENGLISH_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Calculator Keyboard";

export const PORTUGUESE_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Teclado Da Calculadora";

export const SPANISH_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Teclado De Calculadora";

export const FRENCH_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Clavier De Calculatrice";

export const GERMAN_CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL: string =
  "Rechnertastatur";

export const LAST_CALCULATION_KEY: string = "last-calculation";

export const LAST_CALCULATION_VALUE: string = "2+2";

export const STORED_NUMBER: number = 10;

export const EXPRESSION_WITH_ALL_CHARACTER: string = "123";

export const EXPRESSION_WITHOUT_LAST_CHARACTER: string = "12";
