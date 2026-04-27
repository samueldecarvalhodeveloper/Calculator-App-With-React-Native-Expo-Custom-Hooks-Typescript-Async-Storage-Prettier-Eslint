import { PaperProvider, Surface } from "react-native-paper";
import { StatusBar, useWindowDimensions, View } from "react-native";
import React, { JSX, useMemo } from "react";
import {
  ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID,
  MOON_ICON_NAME,
  NO_ELEVATION,
  SUN_ICON_NAME,
  VIEWFINDER_VALUE_ELEMENT_TEST_ID,
} from "../../../constants/user_interface_constants";
import styles from "./styles";
import Characters from "../../../domains/calculator/characters";
import SecondaryColors from "../../../assets/colors/secondary_colors";
import {
  EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE,
  EXTRA_SMALL_CALCULATOR_KEYBOARD_PADDING_BOTTOM,
  EXTRA_SMALL_CALCULATOR_VIEWFINDER_CHARACTER_FONT_SIZE,
  EXTRA_SMALL_CALCULATOR_VIEWFINDER_MARGIN_BOTTOM,
  EXTRA_SMALL_CALCULATOR_VIEWFINDER_PADDING_BOTTOM,
  GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE,
  GREATER_CALCULATOR_KEYBOARD_PADDING_BOTTOM,
  GREATER_CALCULATOR_VIEWFINDER_CHARACTER_FONT_SIZE,
  GREATER_CALCULATOR_VIEWFINDER_MARGIN_BOTTOM,
  GREATER_CALCULATOR_VIEWFINDER_PADDING_BOTTOM,
} from "../../../assets/dimensions";
import CalculatorCharacters from "../../internals/enums/calculator_characters";
import useCalculator from "../../hooks/use_calculator";
import LanguageFactory from "../../../dependency_injections/language_factory";
import Languages from "../../internals/enums/languages";
import DeviceLanguageRecuperator from "../../internals/device_language_recuperator/device_language_recuperator";
import ActionBar from "../../components/action_bar/action_bar";
import Viewfinder from "../../components/viewfinder/viewfinder";
import Keyboard from "../../components/keyboard/keyboard";
import Button from "../../components/button/button";
import {
  isCurrentThemeDark,
  isCurrentWindowHeightSmallerOrEqualThanExtraSmall,
} from "../../internals/checkers/user_interface_checker";
import useTheme from "../../hooks/use_theme";

function HomeScreen(): JSX.Element {
  const deviceLanguage: Languages =
    DeviceLanguageRecuperator.getDeviceLanguage();
  const { THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL } =
    LanguageFactory.getInstance(deviceLanguage);
  const { addCharacter, backspace, expression, clean, evaluate } =
    useCalculator();
  const { height: currentWindowHeight } = useWindowDimensions();
  const { theme, toggleTheme } = useTheme();
  const calculatorButtonCharacterFontSize = useMemo(
    () =>
      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(currentWindowHeight)
        ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
        : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE,
    [currentWindowHeight],
  );
  const calculatorViewfinderMarginBottom = useMemo(
    () =>
      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(currentWindowHeight)
        ? EXTRA_SMALL_CALCULATOR_VIEWFINDER_MARGIN_BOTTOM
        : GREATER_CALCULATOR_VIEWFINDER_MARGIN_BOTTOM,
    [currentWindowHeight],
  );
  const calculatorViewfinderCharacterFontSize = useMemo(
    () =>
      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(currentWindowHeight)
        ? EXTRA_SMALL_CALCULATOR_VIEWFINDER_CHARACTER_FONT_SIZE
        : GREATER_CALCULATOR_VIEWFINDER_CHARACTER_FONT_SIZE,
    [currentWindowHeight],
  );
  const calculatorViewfinderPaddingBottom = useMemo(
    () =>
      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(currentWindowHeight)
        ? EXTRA_SMALL_CALCULATOR_VIEWFINDER_PADDING_BOTTOM
        : GREATER_CALCULATOR_VIEWFINDER_PADDING_BOTTOM,
    [currentWindowHeight],
  );
  const calculatorKeyboardPaddingBottom = useMemo(
    () =>
      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(currentWindowHeight)
        ? EXTRA_SMALL_CALCULATOR_KEYBOARD_PADDING_BOTTOM
        : GREATER_CALCULATOR_KEYBOARD_PADDING_BOTTOM,
    [currentWindowHeight],
  );

  return (
    <PaperProvider>
      <StatusBar
        backgroundColor={theme.statusbarBackgroundColor}
        barStyle={theme.statusbarContentColor}
      />
      <Surface
        elevation={NO_ELEVATION}
        style={[
          styles.surface,
          {
            backgroundColor: theme.applicationBackgroundColor,
          },
        ]}>
        <ActionBar
          toggleThemeButtonAccessibilityLabel={
            THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL
          }
          toggleThemeButtonTestID={
            ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID
          }
          icon={isCurrentThemeDark(theme) ? MOON_ICON_NAME : SUN_ICON_NAME}
          iconColor={theme.actionBarIconColor}
          onPress={toggleTheme}
          backgroundColor={theme.actionBarBackgroundColor}
          rippleEffectColor={theme.rippleEffectColor}
        />
        <Viewfinder
          valueTestId={VIEWFINDER_VALUE_ELEMENT_TEST_ID}
          backgroundColor={theme.viewfinderBackgroundColor}
          borderColor={theme.viewfinderBorderColor}
          valueColor={theme.viewfinderValueColor}
          marginBottom={calculatorViewfinderMarginBottom}
          value={expression}
          valueFontSize={calculatorViewfinderCharacterFontSize}
          paddingBottom={calculatorViewfinderPaddingBottom}
        />
        <Keyboard paddingBottom={calculatorKeyboardPaddingBottom}>
          <View style={styles.defaultKeyboardRow}>
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.CLEAN}
              backgroundColor={SecondaryColors.SECONDARY_500}
              borderColor={theme.calculatorActionButtonBorderColor}
              characterColor={theme.calculatorActionButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                clean();
              }}
            />
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.DIVISION}
              backgroundColor={theme.calculatorOperatorButtonBackgroundColor}
              borderColor={theme.calculatorOperatorButtonBorderColor}
              characterColor={theme.calculatorOperatorButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                addCharacter(Characters.DIVISION);
              }}
            />
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.MULTIPLICATION}
              backgroundColor={theme.calculatorOperatorButtonBackgroundColor}
              borderColor={theme.calculatorOperatorButtonBorderColor}
              characterColor={theme.calculatorOperatorButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                addCharacter(Characters.MULTIPLICATION);
              }}
            />
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.BACKSPACE}
              backgroundColor={SecondaryColors.SECONDARY_500}
              borderColor={theme.calculatorActionButtonBorderColor}
              characterColor={theme.calculatorActionButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                backspace();
              }}
            />
          </View>
          <View style={styles.defaultKeyboardRow}>
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.SEVEN}
              backgroundColor={theme.calculatorNumericalButtonBackgroundColor}
              borderColor={theme.calculatorNumericalButtonBorderColor}
              characterColor={theme.calculatorNumericalButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                addCharacter(Characters.SEVEN);
              }}
            />
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.EIGHT}
              backgroundColor={theme.calculatorNumericalButtonBackgroundColor}
              borderColor={theme.calculatorNumericalButtonBorderColor}
              characterColor={theme.calculatorNumericalButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                addCharacter(Characters.EIGHT);
              }}
            />
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.NINE}
              backgroundColor={theme.calculatorNumericalButtonBackgroundColor}
              borderColor={theme.calculatorNumericalButtonBorderColor}
              characterColor={theme.calculatorNumericalButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                addCharacter(Characters.NINE);
              }}
            />
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.SUBTRACTION}
              backgroundColor={theme.calculatorOperatorButtonBackgroundColor}
              borderColor={theme.calculatorOperatorButtonBorderColor}
              characterColor={theme.calculatorOperatorButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                addCharacter(Characters.SUBTRACTION);
              }}
            />
          </View>
          <View style={styles.defaultKeyboardRow}>
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.FOUR}
              backgroundColor={theme.calculatorNumericalButtonBackgroundColor}
              borderColor={theme.calculatorNumericalButtonBorderColor}
              characterColor={theme.calculatorNumericalButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                addCharacter(Characters.FOUR);
              }}
            />
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.FIVE}
              backgroundColor={theme.calculatorNumericalButtonBackgroundColor}
              borderColor={theme.calculatorNumericalButtonBorderColor}
              characterColor={theme.calculatorNumericalButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                addCharacter(Characters.FIVE);
              }}
            />
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.SIX}
              backgroundColor={theme.calculatorNumericalButtonBackgroundColor}
              borderColor={theme.calculatorNumericalButtonBorderColor}
              characterColor={theme.calculatorNumericalButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                addCharacter(Characters.SIX);
              }}
            />
            <Button
              characterFontSize={calculatorButtonCharacterFontSize}
              character={CalculatorCharacters.ADDITION}
              backgroundColor={theme.calculatorOperatorButtonBackgroundColor}
              borderColor={theme.calculatorOperatorButtonBorderColor}
              characterColor={theme.calculatorOperatorButtonCharacterColor}
              rippleColor={theme.rippleEffectColor}
              onPress={() => {
                addCharacter(Characters.ADDITION);
              }}
            />
          </View>
          <View style={styles.biggerContainer}>
            <View style={styles.biggerContainerFirstRow}>
              <View style={styles.biggerContainerFirstRowFirstRow}>
                <Button
                  characterFontSize={calculatorButtonCharacterFontSize}
                  character={CalculatorCharacters.ONE}
                  backgroundColor={
                    theme.calculatorNumericalButtonBackgroundColor
                  }
                  borderColor={theme.calculatorNumericalButtonBorderColor}
                  characterColor={theme.calculatorNumericalButtonCharacterColor}
                  rippleColor={theme.rippleEffectColor}
                  onPress={() => {
                    addCharacter(Characters.ONE);
                  }}
                />
                <Button
                  characterFontSize={calculatorButtonCharacterFontSize}
                  character={CalculatorCharacters.TWO}
                  backgroundColor={
                    theme.calculatorNumericalButtonBackgroundColor
                  }
                  borderColor={theme.calculatorNumericalButtonBorderColor}
                  characterColor={theme.calculatorNumericalButtonCharacterColor}
                  rippleColor={theme.rippleEffectColor}
                  onPress={() => {
                    addCharacter(Characters.TWO);
                  }}
                />
                <Button
                  characterFontSize={calculatorButtonCharacterFontSize}
                  character={CalculatorCharacters.THREE}
                  backgroundColor={
                    theme.calculatorNumericalButtonBackgroundColor
                  }
                  borderColor={theme.calculatorNumericalButtonBorderColor}
                  characterColor={theme.calculatorNumericalButtonCharacterColor}
                  rippleColor={theme.rippleEffectColor}
                  onPress={() => {
                    addCharacter(Characters.THREE);
                  }}
                />
              </View>
              <View style={styles.biggerContainerFirstRowSecondRow}>
                <View style={styles.zeroButtonContainer}>
                  <Button
                    characterFontSize={calculatorButtonCharacterFontSize}
                    character={CalculatorCharacters.ZERO}
                    backgroundColor={
                      theme.calculatorNumericalButtonBackgroundColor
                    }
                    borderColor={theme.calculatorNumericalButtonBorderColor}
                    characterColor={
                      theme.calculatorNumericalButtonCharacterColor
                    }
                    rippleColor={theme.rippleEffectColor}
                    onPress={() => {
                      addCharacter(Characters.ZERO);
                    }}
                  />
                </View>
                <Button
                  characterFontSize={calculatorButtonCharacterFontSize}
                  character={CalculatorCharacters.POINT}
                  backgroundColor={
                    theme.calculatorNumericalButtonBackgroundColor
                  }
                  borderColor={theme.calculatorNumericalButtonBorderColor}
                  characterColor={theme.calculatorNumericalButtonCharacterColor}
                  rippleColor={theme.rippleEffectColor}
                  onPress={() => {
                    addCharacter(Characters.POINT);
                  }}
                />
              </View>
            </View>
            <View style={styles.evaluateButtonContainer}>
              <Button
                characterFontSize={calculatorButtonCharacterFontSize}
                character={CalculatorCharacters.EVALUATE}
                backgroundColor={theme.calculatorActionButtonBackgroundColor}
                borderColor={theme.calculatorActionButtonBorderColor}
                characterColor={theme.calculatorActionButtonCharacterColor}
                rippleColor={theme.rippleEffectColor}
                onPress={() => {
                  evaluate();
                }}
              />
            </View>
          </View>
        </Keyboard>
      </Surface>
    </PaperProvider>
  );
}

export default HomeScreen;
