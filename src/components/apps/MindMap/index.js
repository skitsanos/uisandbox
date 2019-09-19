import GGEditor, { Mind, Flow } from 'gg-editor';
import React from 'react';
import { Box } from 'rebass';

class MindMapApp extends React.Component {
  render() {
    const data = {
      id: 'Root'
    };

    return (
      <Box p={2}>
        <GGEditor />
      </Box>
    );
  }
}

export default MindMapApp;
