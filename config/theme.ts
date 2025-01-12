import { extendTheme, theme } from "@chakra-ui/react";

export const defaultThemeObject = {
  fonts: {
    body: `DM Sans, ${theme.fonts.body}`,
    heading: `DM Sans, ${theme.fonts.heading}`,
  },
  colors: {
    purple: "#7453FD",
    darkPurple: "#5136C2",
    midnight: "#0F0056",
    green: "#A1F0C4",
    lilac: "#C6B4FC",
    lightLilac: "#E7E2F8",
    red: "#FF5876",
  },
  breakPoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  shadows: {
    largeSoft: "rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;",
  },
  components: {
    Progress: {
      variants: {
        green: {
          filledTrack: {
            bg: "#A1F0C4",
          },
        },
        red: {
          filledTrack: {
            bg: "#FF5876",
          },
        },
      },
    },
  },
};

export const defaultTheme = extendTheme(defaultThemeObject);
