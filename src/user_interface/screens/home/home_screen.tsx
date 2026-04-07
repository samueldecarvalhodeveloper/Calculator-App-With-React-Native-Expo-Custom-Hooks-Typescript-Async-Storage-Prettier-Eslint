import { PaperProvider, Surface } from "react-native-paper";
import { StatusBar, View } from "react-native";
import React, { JSX, useEffect } from "react";
import PrimaryColors from "../../../assets/colors/primary_colors";
import RippleEffectColors from "../../../assets/colors/ripple_effect_colors";
import {
  ACTION_BAR_ELEMENT_TEST_ID,
  ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID,
  MOON_ICON_NAME,
  NO_ELEVATION,
  STATUS_BAR_DARK_CONTENT_COLOR,
  STATUS_BAR_LIGHT_CONTENT_COLOR,
  SUN_ICON_NAME,
  VIEWFINDER_VALUE_ELEMENT_TEST_ID,
} from "../../../constants/user_interface_constants";
import styles from "./styles";
import NeutralColors from "../../../assets/colors/neutral_colors";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
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
import useCurrentWindowHeight from "../../hooks/use_current_window_height";
import UserInterfaceCalculatorCharacters from "../../internals/enums/user_interface_calculator_characters";
import useCalculator from "../../hooks/use_calculator";
import LanguageFactory from "../../../dependency_injection/language_factory";
import Languages from "../../internals/languages_specific_constants.ts/languages";
import DeviceLanguageRecuperator from "../../internals/concerns/device_language_recuperator";
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
  const {
    CALCULATOR_VIEWFINDER_ELEMENT_ACCESSIBILITY_LABEL,
    THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
    CALCULATOR_KEYBOARD_BUTTON_ELEMENT_ACCESSIBILITY_LABEL,
    HOME_SCREEN_ELEMENT_ACCESSIBILITY_LABEL,
    ACTION_BAR_ELEMENT_ACCESSIBILITY_LABEL,
    CALCULATOR_KEYBOARD_ELEMENT_ACCESSIBILITY_LABEL,
  } = LanguageFactory.getInstance(deviceLanguage);

  const { addCharacter, backspace, calculationExpression, clean, evaluate } =
    useCalculator();

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
                UserInterfaceCalculatorCharacters.CLEAN,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.CLEAN}
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
                UserInterfaceCalculatorCharacters.DIVISION,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.DIVISION}
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
                UserInterfaceCalculatorCharacters.MULTIPLICATION,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.MULTIPLICATION}
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
                UserInterfaceCalculatorCharacters.BACKSPACE,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.BACKSPACE}
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
                UserInterfaceCalculatorCharacters.SEVEN,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.SEVEN}
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
                UserInterfaceCalculatorCharacters.EIGHT,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.EIGHT}
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
                UserInterfaceCalculatorCharacters.NINE,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.NINE}
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
                UserInterfaceCalculatorCharacters.SUBTRACTION,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.SUBTRACTION}
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
                UserInterfaceCalculatorCharacters.FOUR,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.FOUR}
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
                UserInterfaceCalculatorCharacters.FIVE,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.FIVE}
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
                UserInterfaceCalculatorCharacters.SIX,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.SIX}
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
                UserInterfaceCalculatorCharacters.ADDITION,
              )}
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={UserInterfaceCalculatorCharacters.ADDITION}
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
                    UserInterfaceCalculatorCharacters.ONE,
                  )}
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={UserInterfaceCalculatorCharacters.ONE}
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
                    UserInterfaceCalculatorCharacters.TWO,
                  )}
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={UserInterfaceCalculatorCharacters.TWO}
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
                    UserInterfaceCalculatorCharacters.THREE,
                  )}
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={UserInterfaceCalculatorCharacters.THREE}
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
                      UserInterfaceCalculatorCharacters.ZERO,
                    )}
                    characterFontSize={
                      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                        currentWindowHeight,
                      )
                        ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                        : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                    }
                    character={UserInterfaceCalculatorCharacters.ZERO}
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
                    UserInterfaceCalculatorCharacters.POINT,
                  )}
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={UserInterfaceCalculatorCharacters.POINT}
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
                  UserInterfaceCalculatorCharacters.EVALUATE,
                )}
                characterFontSize={
                  isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                    currentWindowHeight,
                  )
                    ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                    : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                }
                character={UserInterfaceCalculatorCharacters.EVALUATE}
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
