import React from 'react';

import BraftEditor from 'braft-editor';

import 'braft-editor/dist/index.css';
import { Box } from 'rebass';

class EditorDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: BraftEditor.createEditorState(null)
    };
  }

  fetchEditorContent() {
    return 'Hello World';
  }

  saveEditorContent(content) {
    console.log(content);
  }

  componentDidMount() {
    const htmlContent = this.fetchEditorContent();
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent)
    });
  }

  submitContent() {
    const htmlContent = this.state.editorState.toHTML();
    const { result } = this.saveEditorContent(htmlContent);
  }

  handleEditorChange(editorState) {
    //this.setState({ editorState });
  }

  render() {
    const { editorState } = this.state;

    return (
      <Box flex={1}>
        <BraftEditor
          language="en"
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
      </Box>
    );
  }
}

export default EditorDemo;
