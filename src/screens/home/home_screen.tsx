import { PaperProvider, Surface } from "react-native-paper";
import { StatusBar, View } from "react-native";
import { JSX, useEffect } from "react";
import {
  ACTION_BAR_ELEMENT_TEST_ID,
  MOON_ICON_NAME,
  SUN_ICON_NAME,
  ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID,
  VIEWFINDER_VALUE_ELEMENT_TEST_ID,
} from "../../constants/screens/home_screen_constants";
import PrimaryColors from "../../assets/colors/primary_colors";
import ActionBar from "../../components/action_bar/action_bar";
import {
  isCurrentThemeDark,
  isCurrentWindowHeightSmallerOrEqualThanExtraSmall,
} from "../../infrastructure/specifications/ui_specifications";
import Viewfinder from "../../components/viewfinder/viewfinder";
import RippleEffectColors from "../../assets/colors/ripple_effect_colors";
import {
  NO_ELEVATION,
  STATUS_BAR_DARK_CONTENT_COLOR,
  STATUS_BAR_LIGHT_CONTENT_COLOR,
} from "../../constants/ui_constants";
import Keyboard from "../../components/keyboard/keyboard";
import styles from "./styles";
import NeutralColors from "../../assets/colors/neutral_colors";
import Button from "../../components/button/button";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import SecondaryColors from "../../assets/colors/secondary_colors";
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
} from "../../assets/dimensions";
import useCurrentWindowHeight from "../../hooks/use_current_window_height";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";
import useCalculation from "../../hooks/use_calculation";
import useTheme from "../../hooks/use_theme";
import LanguageFactory from "../../ui_languages_specific_constants.ts/language_factory";
import Languages from "../../ui_languages_specific_constants.ts/languages";
import DeviceLanguageRecuperator from "../../device_language_recuperator/device_language_recuperator";

function HomeScreen(): JSX.Element {
  const deviceLanguage: Languages =
    DeviceLanguageRecuperator.getDeviceLanguage();
  const {
    CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL,
    THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
    CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
    HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL,
    ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL,
    CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL,
  } = LanguageFactory.getInstance(deviceLanguage);

  const { addCharacter, backspace, calculationExpression, clean, evaluate } =
    useCalculation();

  const currentWindowHeight: number = useCurrentWindowHeight();

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {}, [
    deviceLanguage,
    CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL,
    THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
    CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
  ]);

  return (
    <PaperProvider>
      <StatusBar
        backgroundColor={
          isCurrentThemeDark(theme)
            ? PrimaryColors.PRIMARY_700
            : PrimaryColors.PRIMARY_100
        }
        barStyle={
          isCurrentThemeDark(theme)
            ? STATUS_BAR_LIGHT_CONTENT_COLOR
            : STATUS_BAR_DARK_CONTENT_COLOR
        }
      />
      <Surface
        accessibilityLabel={HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL}
        elevation={NO_ELEVATION}
        style={[
          styles.surface,
          {
            backgroundColor: isCurrentThemeDark(theme)
              ? PrimaryColors.PRIMARY_900
              : PrimaryColors.PRIMARY_200,
          },
        ]}>
        <ActionBar
          elementAccessibilityLabel={ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL}
          toggleThemeButtonAccessibilityLabel={
            THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL
          }
          toggleThemeButtonTestID={
            ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID
          }
          testID={ACTION_BAR_ELEMENT_TEST_ID}
          icon={isCurrentThemeDark(theme) ? MOON_ICON_NAME : SUN_ICON_NAME}
          iconColor={
            isCurrentThemeDark(theme)
              ? NeutralColors.NEUTRAL_100
              : NeutralColors.NEUTRAL_900
          }
          onPress={() => {
            toggleTheme();
          }}
          backgroundColor={
            isCurrentThemeDark(theme)
              ? PrimaryColors.PRIMARY_700
              : PrimaryColors.PRIMARY_100
          }
          rippleEffectColor={
            isCurrentThemeDark(theme)
              ? RippleEffectColors.DARK_THEME
              : RippleEffectColors.LIGHT_THEME
          }
        />
        <Viewfinder
          accessibilityLabel={CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL(
            calculationExpression,
          )}
          valueTestId={VIEWFINDER_VALUE_ELEMENT_TEST_ID}
          backgroundColor={
            isCurrentThemeDark(theme)
              ? PrimaryColors.PRIMARY_700
              : PrimaryColors.PRIMARY_100
          }
          borderColor={
            isCurrentThemeDark(theme)
              ? PrimaryColors.PRIMARY_600
              : PrimaryColors.PRIMARY_500
          }
          valueColor={
            isCurrentThemeDark(theme)
              ? NeutralColors.NEUTRAL_100
              : NeutralColors.NEUTRAL_900
          }
          marginBottom={
            isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
              currentWindowHeight,
            )
              ? EXTRA_SMALL_CALCULATOR_VIEWFINDER_MARGIN_BOTTOM
              : GREATER_CALCULATOR_VIEWFINDER_MARGIN_BOTTOM
          }
          value={calculationExpression}
          valueFontSize={
            isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
              currentWindowHeight,
            )
              ? EXTRA_SMALL_CALCULATOR_VIEWFINDER_CHARACTER_FONT_SIZE
              : GREATER_CALCULATOR_VIEWFINDER_CHARACTER_FONT_SIZE
          }
          paddingBottom={
            isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
              currentWindowHeight,
            )
              ? EXTRA_SMALL_CALCULATOR_VIEWFINDER_PADDING_BOTTOM
              : GREATER_CALCULATOR_VIEWFINDER_PADDING_BOTTOM
          }
        />
        <Keyboard
          accessibilityLabel={CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL}
          paddingBottom={
            isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
              currentWindowHeight,
            )
              ? EXTRA_SMALL_CALCULATOR_KEYBOARD_PADDING_BOTTOM
              : GREATER_CALCULATOR_KEYBOARD_PADDING_BOTTOM
          }>
          <View style={styles.defaultKeyboardRow}>
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.CLEAN,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.CLEAN}
              backgroundColor={SecondaryColors.SECONDARY_500}
              borderColor={
                isCurrentThemeDark(theme)
                  ? SecondaryColors.SECONDARY_400
                  : SecondaryColors.SECONDARY_700
              }
              characterColor={NeutralColors.NEUTRAL_900}
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                clean();
              }}
            />
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.DIVISION,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.DIVISION}
              backgroundColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_400
                  : PrimaryColors.PRIMARY_900
              }
              borderColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_300
                  : NeutralColors.NEUTRAL_900
              }
              characterColor={
                isCurrentThemeDark(theme)
                  ? NeutralColors.NEUTRAL_900
                  : NeutralColors.NEUTRAL_100
              }
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(CalculatorCharacters.DIVISION);
              }}
            />
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.MULTIPLICATION,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.MULTIPLICATION}
              backgroundColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_400
                  : PrimaryColors.PRIMARY_900
              }
              borderColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_300
                  : NeutralColors.NEUTRAL_900
              }
              characterColor={
                isCurrentThemeDark(theme)
                  ? NeutralColors.NEUTRAL_900
                  : NeutralColors.NEUTRAL_100
              }
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(CalculatorCharacters.MULTIPLICATION);
              }}
            />
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.BACKSPACE,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.BACKSPACE}
              backgroundColor={SecondaryColors.SECONDARY_500}
              borderColor={
                isCurrentThemeDark(theme)
                  ? SecondaryColors.SECONDARY_400
                  : SecondaryColors.SECONDARY_700
              }
              characterColor={NeutralColors.NEUTRAL_900}
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                backspace();
              }}
            />
          </View>
          <View style={styles.defaultKeyboardRow}>
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.SEVEN,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.SEVEN}
              backgroundColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isCurrentThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(CalculatorCharacters.SEVEN);
              }}
            />
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.EIGHT,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.EIGHT}
              backgroundColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isCurrentThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(CalculatorCharacters.EIGHT);
              }}
            />
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.NINE,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.NINE}
              backgroundColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isCurrentThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(CalculatorCharacters.NINE);
              }}
            />
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.SUBTRACTION,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.SUBTRACTION}
              backgroundColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_400
                  : PrimaryColors.PRIMARY_900
              }
              borderColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_300
                  : NeutralColors.NEUTRAL_900
              }
              characterColor={
                isCurrentThemeDark(theme)
                  ? NeutralColors.NEUTRAL_900
                  : NeutralColors.NEUTRAL_100
              }
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(CalculatorCharacters.SUBTRACTION);
              }}
            />
          </View>
          <View style={styles.defaultKeyboardRow}>
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.FOUR,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.FOUR}
              backgroundColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isCurrentThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(CalculatorCharacters.FOUR);
              }}
            />
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.FIVE,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.FIVE}
              backgroundColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isCurrentThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(CalculatorCharacters.FIVE);
              }}
            />
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.SIX,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.SIX}
              backgroundColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isCurrentThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(CalculatorCharacters.SIX);
              }}
            />
            <Button
              accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                UiCalculatorCharacters.ADDITION,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UiCalculatorCharacters.ADDITION}
              backgroundColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_400
                  : PrimaryColors.PRIMARY_900
              }
              borderColor={
                isCurrentThemeDark(theme)
                  ? PrimaryColors.PRIMARY_300
                  : NeutralColors.NEUTRAL_900
              }
              characterColor={
                isCurrentThemeDark(theme)
                  ? NeutralColors.NEUTRAL_900
                  : NeutralColors.NEUTRAL_100
              }
              rippleColor={
                isCurrentThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(CalculatorCharacters.ADDITION);
              }}
            />
          </View>
          <View style={styles.biggerContainer}>
            <View style={styles.biggerContainerFirstRow}>
              <View style={styles.biggerContainerFirstRowFirstRow}>
                <Button
                  accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                    UiCalculatorCharacters.ONE,
                  )}
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={UiCalculatorCharacters.ONE}
                  backgroundColor={
                    isCurrentThemeDark(theme)
                      ? PrimaryColors.PRIMARY_700
                      : PrimaryColors.PRIMARY_400
                  }
                  borderColor={
                    isCurrentThemeDark(theme)
                      ? PrimaryColors.PRIMARY_600
                      : PrimaryColors.PRIMARY_500
                  }
                  characterColor={
                    isCurrentThemeDark(theme)
                      ? NeutralColors.NEUTRAL_100
                      : NeutralColors.NEUTRAL_900
                  }
                  rippleColor={
                    isCurrentThemeDark(theme)
                      ? RippleEffectColors.DARK_THEME
                      : RippleEffectColors.LIGHT_THEME
                  }
                  onPress={() => {
                    addCharacter(CalculatorCharacters.ONE);
                  }}
                />
                <Button
                  accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                    UiCalculatorCharacters.TWO,
                  )}
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={UiCalculatorCharacters.TWO}
                  backgroundColor={
                    isCurrentThemeDark(theme)
                      ? PrimaryColors.PRIMARY_700
                      : PrimaryColors.PRIMARY_400
                  }
                  borderColor={
                    isCurrentThemeDark(theme)
                      ? PrimaryColors.PRIMARY_600
                      : PrimaryColors.PRIMARY_500
                  }
                  characterColor={
                    isCurrentThemeDark(theme)
                      ? NeutralColors.NEUTRAL_100
                      : NeutralColors.NEUTRAL_900
                  }
                  rippleColor={
                    isCurrentThemeDark(theme)
                      ? RippleEffectColors.DARK_THEME
                      : RippleEffectColors.LIGHT_THEME
                  }
                  onPress={() => {
                    addCharacter(CalculatorCharacters.TWO);
                  }}
                />
                <Button
                  accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                    UiCalculatorCharacters.THREE,
                  )}
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={UiCalculatorCharacters.THREE}
                  backgroundColor={
                    isCurrentThemeDark(theme)
                      ? PrimaryColors.PRIMARY_700
                      : PrimaryColors.PRIMARY_400
                  }
                  borderColor={
                    isCurrentThemeDark(theme)
                      ? PrimaryColors.PRIMARY_600
                      : PrimaryColors.PRIMARY_500
                  }
                  characterColor={
                    isCurrentThemeDark(theme)
                      ? NeutralColors.NEUTRAL_100
                      : NeutralColors.NEUTRAL_900
                  }
                  rippleColor={
                    isCurrentThemeDark(theme)
                      ? RippleEffectColors.DARK_THEME
                      : RippleEffectColors.LIGHT_THEME
                  }
                  onPress={() => {
                    addCharacter(CalculatorCharacters.THREE);
                  }}
                />
              </View>
              <View style={styles.biggerContainerFirstRowSecondRow}>
                <View style={styles.zeroButtonContainer}>
                  <Button
                    accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                      UiCalculatorCharacters.ZERO,
                    )}
                    characterFontSize={
                      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                        currentWindowHeight,
                      )
                        ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                        : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                    }
                    character={UiCalculatorCharacters.ZERO}
                    backgroundColor={
                      isCurrentThemeDark(theme)
                        ? PrimaryColors.PRIMARY_700
                        : PrimaryColors.PRIMARY_400
                    }
                    borderColor={
                      isCurrentThemeDark(theme)
                        ? PrimaryColors.PRIMARY_600
                        : PrimaryColors.PRIMARY_500
                    }
                    characterColor={
                      isCurrentThemeDark(theme)
                        ? NeutralColors.NEUTRAL_100
                        : NeutralColors.NEUTRAL_900
                    }
                    rippleColor={
                      isCurrentThemeDark(theme)
                        ? RippleEffectColors.DARK_THEME
                        : RippleEffectColors.LIGHT_THEME
                    }
                    onPress={() => {
                      addCharacter(CalculatorCharacters.ZERO);
                    }}
                  />
                </View>
                <Button
                  accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                    UiCalculatorCharacters.POINT,
                  )}
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={UiCalculatorCharacters.POINT}
                  backgroundColor={
                    isCurrentThemeDark(theme)
                      ? PrimaryColors.PRIMARY_400
                      : PrimaryColors.PRIMARY_900
                  }
                  borderColor={
                    isCurrentThemeDark(theme)
                      ? PrimaryColors.PRIMARY_300
                      : NeutralColors.NEUTRAL_900
                  }
                  characterColor={
                    isCurrentThemeDark(theme)
                      ? NeutralColors.NEUTRAL_900
                      : NeutralColors.NEUTRAL_100
                  }
                  rippleColor={
                    isCurrentThemeDark(theme)
                      ? RippleEffectColors.DARK_THEME
                      : RippleEffectColors.LIGHT_THEME
                  }
                  onPress={() => {
                    addCharacter(CalculatorCharacters.POINT);
                  }}
                />
              </View>
            </View>
            <View style={styles.evaluateButtonContainer}>
              <Button
                accessibilityLabel={CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL(
                  UiCalculatorCharacters.EVALUATE,
                )}
                characterFontSize={
                  isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                    currentWindowHeight,
                  )
                    ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                    : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                }
                character={UiCalculatorCharacters.EVALUATE}
                backgroundColor={SecondaryColors.SECONDARY_500}
                borderColor={
                  isCurrentThemeDark(theme)
                    ? SecondaryColors.SECONDARY_400
                    : SecondaryColors.SECONDARY_700
                }
                characterColor={NeutralColors.NEUTRAL_900}
                rippleColor={
                  isCurrentThemeDark(theme)
                    ? RippleEffectColors.DARK_THEME
                    : RippleEffectColors.LIGHT_THEME
                }
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
