import C from 'ui/assets/theme/colors.style'
import D from 'ui/assets/theme/display.style'
import E from 'ui/assets/theme/element.style'
import F from 'ui/assets/theme/font.style'

const DARK_MODE = false

export default {
  DARK_MODE: DARK_MODE,

  // Colors
  BACKGROUND_COLOR: DARK_MODE ? C.DARK_BACKGROUND : C.LIGHT_BACKGROUND,
  FOREGROUND_COLOR: DARK_MODE ? C.DARK_FOREGROUND : C.LIGHT_FOREGROUND,
  PRIMARY_COLOR: DARK_MODE ? C.DARK_PRIMARY : C.BRAND_COLOR,
  INVERSE_COLOR: DARK_MODE ? C.DARK_INVERSE : C.LIGHT_INVERSE,
  INPUT_PLACEHOLDER: DARK_MODE ? C.DARK_INPUT_PLACEHOLDER : C.LIGHT_INPUT_PLACEHOLDER,
  WHITE: C.WHITE,
  BLACK: C.BLACK,
  BRAND_COLOR: C.BRAND_COLOR,
  OPAQUE_BRAND: C.OPAQUE_BRAND,
  PENDING: C.BRAND_COLOR,
  VALID: C.VALID_GREEN,
  INVALID: C.INVALID_RED,

  // Display
  SMALL_VIEW: D.SMALL_VIEW,
  MEDIUM_VIEW: D.MEDIUM_VIEW,
  LARGE_VIEW: D.LARGE_VIEW,
  MEDIA_QUERY: (minMax, size) => `@media only screen and (${minMax}: ${size}px)`,
  SMALL_QUERY: `@media only screen and (max-width: ${D.SMALL_VIEW}px)`,
  MEDIUM_QUERY: `@media only screen and (max-width: ${D.MEDIUM_VIEW}px)`,
  LARGE_QUERY: `@media only screen and (max-width: ${D.LARGE_VIEW}px)`,

  // Fonts
  FONT_FACE: F.FONT_FACE,
  FONT_XS: F.FONT_XS,
  FONT_S: F.FONT_S,
  FONT_M: F.FONT_M,
  FONT_L: F.FONT_L,
  FONT_XL: F.FONT_XL,

  // Element Sizing
  CARD_RADIUS: E.CARD_RADIUS,
  HEADER_HEIGHT: E.HEADER_HEIGHT,
  FOOTER_HEIGHT: E.FOOTER_HEIGHT,
  PILL_RADIUS: E.PILL_RADIUS,
  SPINNER_RADIUS: E.SPINNER_RADIUS
}
