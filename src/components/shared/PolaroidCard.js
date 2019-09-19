import React from "react";
import { Box, Card, Image, Heading, Text } from "rebass";

class PolaroidCard extends React.Component {
  render() {
    const { image, title, description, width } = this.props;

    let size = width;
    if (typeof width === "string") {
      size = parseInt(width);
    }
    if (typeof width === "number" && width <= 1) {
      size = Math.ceil(window.screen.availWidth * width);
    }

    return (
      <Box {...this.props}>
        <Card
          sx={{
            p: 1,
            m: 2,
            borderRadius: 2,
            boxShadow: "0 0 1rem rgba(0,0,0,.25)"
          }}
        >
          <Image src={image ? image : `http://picsum.photos/${size}`} />

          <Box
            sx={{
              p: 2
            }}
          >
            <Heading sx={{ fontWeight: 0 }}>
              {title ? title : "Card title"}
            </Heading>
            <Text
              sx={{
                color: "gray",
                textTransform: "uppercase"
              }}
            >
              {description}
            </Text>
          </Box>
        </Card>
      </Box>
    );
  }
}

export default PolaroidCard;
