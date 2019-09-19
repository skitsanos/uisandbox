import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "emotion-theming";

export const ThemeColors = {
  primary: "#483D8B",
  secondary: "#6A5ACD",
  thirdly: "#E6E6FA",
  white: "#ffffff",
  snow: "#FFFAFA",
  gray: "#A9A9A9",
  red: "#DC143C",
  danger: "#DC143C",
  warning: "#FFD700",
  info: "#4682B4"
};

export const DefaultTheme = {
  breakpoints: ["40em", "52em", "64em"],

  fonts: {
    body: 'Montserrat, ""Open Sans", Roboto, sans-serif',
    heading: 'Montserrat, "Open Sans", Roboto, sans-serif'
  },
  fontSizes: ["0.5rem", "0.8rem", "0.9rem", "1rem", "1.2rem"],
  fontWeights: [300, 400],

  colors: ThemeColors,

  space: ["0.3rem", "0.5rem", "1rem", "5rem", "10rem"],
  radii: [0, 3, 5, 7, "50%"],

  variants: {
    debugbox: {
      border: "dotted 1px orangered"
    },

    section_title: {
      color: "#333",
      fontSize: "2rem"
    },
    section_subtitle: {
      color: "#A9A9A9",
      textTransform: "uppercase",
      fontSize: "1rem"
    },

    formbox: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 35% [col-start])",
      "&>div:nth-of-type(odd)": {
        color: "grey",
        fontWeight: 300,
        marginTop: 2,
        marginRight: 2
      },
      "&>div:nth-of-type(even)": {
        marginTop: 2,
        marginRight: 2
      }
    },

    iconlink: {
      color: ThemeColors.primary,
      cursor: "pointer",
      borderRadius: "55%",
      border: "solid 1px",
      borderColor: "transparent",
      "&:hover": {
        background: "#efefef"
      },
      "&>i:nth-of-type(1)": {
        padding: 1
      }
    },
    profileLink: {
      color: ThemeColors.primary,
      cursor: "pointer",
      padding: 1,
      marginRight: 1,
      border: "solid 1px",
      borderRadius: 1,
      borderColor: "transparent",
      "&:hover": {
        borderColor: ThemeColors.thirdly
      }
    },
    menulink: {
      color: "white",
      cursor: "pointer",
      padding: 1,
      margin: 1,
      "&:hover": {
        backgroundColor: ThemeColors.secondary,
        borderRadius: 1
      }
    },
    intro: {
      fontSize: "0.9rem",
      lineHeight: "1.5rem"
    }
  }
};

export class DefaultThemeProvider extends React.Component {
  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>{this.props.children}</ThemeProvider>
    );
  }
}

DefaultThemeProvider.propTypes = {
  children: PropTypes.any
};
