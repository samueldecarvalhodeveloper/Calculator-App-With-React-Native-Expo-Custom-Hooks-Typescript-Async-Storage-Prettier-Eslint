import { PaperProvider, Surface } from "react-native-paper";
import { StatusBar, useWindowDimensions, View } from "react-native";
import React, { JSX } from "react";
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
import LanguageFactory from "../../../dependency_injection/language_factory";
import Languages from "../../internals/enums/languages";
import DeviceLanguageRecuperator from "../../internals/device_language_recuperator/device_language_recuperator";
import ActionBar from "../../components/action_bar/action_bar";
import Viewfinder from "../../components/viewfinder/viewfinder";
import Keyboard from "../../components/keyboard/keyboard";
import Button from "../../components/button/button";
import {
  isThemeDark,
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

  return (
    <PaperProvider>
      <StatusBar
        backgroundColor={
          isThemeDark(theme)
            ? PrimaryColors.PRIMARY_700
            : PrimaryColors.PRIMARY_100
        }
        barStyle={
          isThemeDark(theme)
            ? STATUS_BAR_LIGHT_CONTENT_COLOR
            : STATUS_BAR_DARK_CONTENT_COLOR
        }
      />
      <Surface
        elevation={NO_ELEVATION}
        style={[
          styles.surface,
          {
            backgroundColor: isThemeDark(theme)
              ? PrimaryColors.PRIMARY_900
              : PrimaryColors.PRIMARY_200,
          },
        ]}>
        <ActionBar
          toggleThemeButtonAccessibilityLabel={
            THEME_TOGGLE_BUTTON_ELEMENT_ACCESSIBILITY_LABEL
          }
          toggleThemeButtonTestID={
            ACTION_BAR_TOGGLE_THEME_BUTTON_ELEMENT_TEST_ID
          }
          testID={ACTION_BAR_ELEMENT_TEST_ID}
          icon={isThemeDark(theme) ? MOON_ICON_NAME : SUN_ICON_NAME}
          iconColor={
            isThemeDark(theme)
              ? NeutralColors.NEUTRAL_100
              : NeutralColors.NEUTRAL_900
          }
          onPress={() => {
            toggleTheme();
          }}
          backgroundColor={
            isThemeDark(theme)
              ? PrimaryColors.PRIMARY_700
              : PrimaryColors.PRIMARY_100
          }
          rippleEffectColor={
            isThemeDark(theme)
              ? RippleEffectColors.DARK_THEME
              : RippleEffectColors.LIGHT_THEME
          }
        />
        <Viewfinder
          valueTestId={VIEWFINDER_VALUE_ELEMENT_TEST_ID}
          backgroundColor={
            isThemeDark(theme)
              ? PrimaryColors.PRIMARY_700
              : PrimaryColors.PRIMARY_100
          }
          borderColor={
            isThemeDark(theme)
              ? PrimaryColors.PRIMARY_600
              : PrimaryColors.PRIMARY_500
          }
          valueColor={
            isThemeDark(theme)
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
          value={expression}
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
          paddingBottom={
            isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
              currentWindowHeight,
            )
              ? EXTRA_SMALL_CALCULATOR_KEYBOARD_PADDING_BOTTOM
              : GREATER_CALCULATOR_KEYBOARD_PADDING_BOTTOM
          }>
          <View style={styles.defaultKeyboardRow}>
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.CLEAN}
              backgroundColor={SecondaryColors.SECONDARY_500}
              borderColor={
                isThemeDark(theme)
                  ? SecondaryColors.SECONDARY_400
                  : SecondaryColors.SECONDARY_700
              }
              characterColor={NeutralColors.NEUTRAL_900}
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                clean();
              }}
            />
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.DIVISION}
              backgroundColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_400
                  : PrimaryColors.PRIMARY_900
              }
              borderColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_300
                  : NeutralColors.NEUTRAL_900
              }
              characterColor={
                isThemeDark(theme)
                  ? NeutralColors.NEUTRAL_900
                  : NeutralColors.NEUTRAL_100
              }
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(Characters.DIVISION);
              }}
            />
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.MULTIPLICATION}
              backgroundColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_400
                  : PrimaryColors.PRIMARY_900
              }
              borderColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_300
                  : NeutralColors.NEUTRAL_900
              }
              characterColor={
                isThemeDark(theme)
                  ? NeutralColors.NEUTRAL_900
                  : NeutralColors.NEUTRAL_100
              }
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(Characters.MULTIPLICATION);
              }}
            />
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.BACKSPACE}
              backgroundColor={SecondaryColors.SECONDARY_500}
              borderColor={
                isThemeDark(theme)
                  ? SecondaryColors.SECONDARY_400
                  : SecondaryColors.SECONDARY_700
              }
              characterColor={NeutralColors.NEUTRAL_900}
              rippleColor={
                isThemeDark(theme)
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
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.SEVEN}
              backgroundColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(Characters.SEVEN);
              }}
            />
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.EIGHT}
              backgroundColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(Characters.EIGHT);
              }}
            />
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.NINE}
              backgroundColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(Characters.NINE);
              }}
            />
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.SUBTRACTION}
              backgroundColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_400
                  : PrimaryColors.PRIMARY_900
              }
              borderColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_300
                  : NeutralColors.NEUTRAL_900
              }
              characterColor={
                isThemeDark(theme)
                  ? NeutralColors.NEUTRAL_900
                  : NeutralColors.NEUTRAL_100
              }
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(Characters.SUBTRACTION);
              }}
            />
          </View>
          <View style={styles.defaultKeyboardRow}>
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.FOUR}
              backgroundColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(Characters.FOUR);
              }}
            />
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.FIVE}
              backgroundColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(Characters.FIVE);
              }}
            />
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.SIX}
              backgroundColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_700
                  : PrimaryColors.PRIMARY_400
              }
              borderColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_600
                  : PrimaryColors.PRIMARY_500
              }
              characterColor={
                isThemeDark(theme)
                  ? NeutralColors.NEUTRAL_100
                  : NeutralColors.NEUTRAL_900
              }
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(Characters.SIX);
              }}
            />
            <Button
              characterFontSize={
                isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                  currentWindowHeight,
                )
                  ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
              }
              character={CalculatorCharacters.ADDITION}
              backgroundColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_400
                  : PrimaryColors.PRIMARY_900
              }
              borderColor={
                isThemeDark(theme)
                  ? PrimaryColors.PRIMARY_300
                  : NeutralColors.NEUTRAL_900
              }
              characterColor={
                isThemeDark(theme)
                  ? NeutralColors.NEUTRAL_900
                  : NeutralColors.NEUTRAL_100
              }
              rippleColor={
                isThemeDark(theme)
                  ? RippleEffectColors.DARK_THEME
                  : RippleEffectColors.LIGHT_THEME
              }
              onPress={() => {
                addCharacter(Characters.ADDITION);
              }}
            />
          </View>
          <View style={styles.biggerContainer}>
            <View style={styles.biggerContainerFirstRow}>
              <View style={styles.biggerContainerFirstRowFirstRow}>
                <Button
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={CalculatorCharacters.ONE}
                  backgroundColor={
                    isThemeDark(theme)
                      ? PrimaryColors.PRIMARY_700
                      : PrimaryColors.PRIMARY_400
                  }
                  borderColor={
                    isThemeDark(theme)
                      ? PrimaryColors.PRIMARY_600
                      : PrimaryColors.PRIMARY_500
                  }
                  characterColor={
                    isThemeDark(theme)
                      ? NeutralColors.NEUTRAL_100
                      : NeutralColors.NEUTRAL_900
                  }
                  rippleColor={
                    isThemeDark(theme)
                      ? RippleEffectColors.DARK_THEME
                      : RippleEffectColors.LIGHT_THEME
                  }
                  onPress={() => {
                    addCharacter(Characters.ONE);
                  }}
                />
                <Button
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={CalculatorCharacters.TWO}
                  backgroundColor={
                    isThemeDark(theme)
                      ? PrimaryColors.PRIMARY_700
                      : PrimaryColors.PRIMARY_400
                  }
                  borderColor={
                    isThemeDark(theme)
                      ? PrimaryColors.PRIMARY_600
                      : PrimaryColors.PRIMARY_500
                  }
                  characterColor={
                    isThemeDark(theme)
                      ? NeutralColors.NEUTRAL_100
                      : NeutralColors.NEUTRAL_900
                  }
                  rippleColor={
                    isThemeDark(theme)
                      ? RippleEffectColors.DARK_THEME
                      : RippleEffectColors.LIGHT_THEME
                  }
                  onPress={() => {
                    addCharacter(Characters.TWO);
                  }}
                />
                <Button
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={CalculatorCharacters.THREE}
                  backgroundColor={
                    isThemeDark(theme)
                      ? PrimaryColors.PRIMARY_700
                      : PrimaryColors.PRIMARY_400
                  }
                  borderColor={
                    isThemeDark(theme)
                      ? PrimaryColors.PRIMARY_600
                      : PrimaryColors.PRIMARY_500
                  }
                  characterColor={
                    isThemeDark(theme)
                      ? NeutralColors.NEUTRAL_100
                      : NeutralColors.NEUTRAL_900
                  }
                  rippleColor={
                    isThemeDark(theme)
                      ? RippleEffectColors.DARK_THEME
                      : RippleEffectColors.LIGHT_THEME
                  }
                  onPress={() => {
                    addCharacter(Characters.THREE);
                  }}
                />
              </View>
              <View style={styles.biggerContainerFirstRowSecondRow}>
                <View style={styles.zeroButtonContainer}>
                  <Button
                    characterFontSize={
                      isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                        currentWindowHeight,
                      )
                        ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                        : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                    }
                    character={CalculatorCharacters.ZERO}
                    backgroundColor={
                      isThemeDark(theme)
                        ? PrimaryColors.PRIMARY_700
                        : PrimaryColors.PRIMARY_400
                    }
                    borderColor={
                      isThemeDark(theme)
                        ? PrimaryColors.PRIMARY_600
                        : PrimaryColors.PRIMARY_500
                    }
                    characterColor={
                      isThemeDark(theme)
                        ? NeutralColors.NEUTRAL_100
                        : NeutralColors.NEUTRAL_900
                    }
                    rippleColor={
                      isThemeDark(theme)
                        ? RippleEffectColors.DARK_THEME
                        : RippleEffectColors.LIGHT_THEME
                    }
                    onPress={() => {
                      addCharacter(Characters.ZERO);
                    }}
                  />
                </View>
                <Button
                  characterFontSize={
                    isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                      currentWindowHeight,
                    )
                      ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                      : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                  }
                  character={CalculatorCharacters.POINT}
                  backgroundColor={
                    isThemeDark(theme)
                      ? PrimaryColors.PRIMARY_400
                      : PrimaryColors.PRIMARY_900
                  }
                  borderColor={
                    isThemeDark(theme)
                      ? PrimaryColors.PRIMARY_300
                      : NeutralColors.NEUTRAL_900
                  }
                  characterColor={
                    isThemeDark(theme)
                      ? NeutralColors.NEUTRAL_900
                      : NeutralColors.NEUTRAL_100
                  }
                  rippleColor={
                    isThemeDark(theme)
                      ? RippleEffectColors.DARK_THEME
                      : RippleEffectColors.LIGHT_THEME
                  }
                  onPress={() => {
                    addCharacter(Characters.POINT);
                  }}
                />
              </View>
            </View>
            <View style={styles.evaluateButtonContainer}>
              <Button
                characterFontSize={
                  isCurrentWindowHeightSmallerOrEqualThanExtraSmall(
                    currentWindowHeight,
                  )
                    ? EXTRA_SMALL_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                    : GREATER_CALCULATOR_BUTTON_CHARACTER_FONT_SIZE
                }
                character={CalculatorCharacters.EVALUATE}
                backgroundColor={SecondaryColors.SECONDARY_500}
                borderColor={
                  isThemeDark(theme)
                    ? SecondaryColors.SECONDARY_400
                    : SecondaryColors.SECONDARY_700
                }
                characterColor={NeutralColors.NEUTRAL_900}
                rippleColor={
                  isThemeDark(theme)
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
