import React from 'react';
import ReactJson from 'react-json-view';
import { Box, Card, Image, Heading, Text } from 'rebass';

class JsonViewer extends React.Component {
  render() {
    return (
      <Box p={2}>
        <ReactJson
          style={{
            fontSize: '1.2rem'
          }}
          src={this.props.item}
        />
      </Box>
    );
  }
}

export default JsonViewer;
