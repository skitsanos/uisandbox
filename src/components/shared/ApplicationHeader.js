import React from "react";
import { Box, Card, Image, Heading, Text, Flex } from "rebass";
import { height } from "styled-system";

class ApplicationHeader extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <Flex
        height={40}
        sx={{
          flexShrink: 0,
          alignItems: "center",
          backgroundColor: "primary",
          color: "white",
          p: 2
        }}
      >
        <Box
          sx={{
            marginRight: "0.5rem"
          }}
        >
          <Heading>{title}</Heading>
        </Box>

        {subtitle && (
          <Box
            sx={{
              marginRight: "0.5rem"
            }}
          >
            <Text sx={{ textTransform: "uppercase" }}>{subtitle}</Text>
          </Box>
        )}

        <Box
          sx={{
            borderLeft: "solid 1px white",
            paddingLeft: 1
          }}
        >
          {this.props.children}
        </Box>
      </Flex>
    );
  }
}

export default ApplicationHeader;
