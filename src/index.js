import React from 'react';
import ReactDOM from 'react-dom';
import { Flex, Box, Link } from 'rebass';

import './styles.css';
import PolaroidCard from './components/shared/PolaroidCard';
import { DefaultThemeProvider } from './components/theme/DefaultTheme';
import UserProfilePage from './components/shared/UserProfilePage';
import ApplicationHeader from './components/shared/ApplicationHeader';
import JsonViewer from './components/shared/JsonViewer';
import EditorDemo from './components/apps/BraftEditor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'profile'
    };
  }
  render() {
    return (
      <DefaultThemeProvider color="primary">
        <ApplicationHeader title="UI" subtitle="sandbox">
          <Link
            variant="menulink"
            onClick={() => this.setState({ view: 'profile' })}
          >
            Profile
          </Link>

          <Link
            variant="menulink"
            onClick={() => this.setState({ view: 'cards' })}
          >
            Cards
          </Link>

          <Link
            variant="menulink"
            onClick={() => this.setState({ view: 'editor' })}
          >
            Editor
          </Link>

          <Link
            variant="menulink"
            onClick={() => this.setState({ view: 'json' })}
          >
            JSON Viewer
          </Link>
        </ApplicationHeader>

        <Box>
          {this.state.view === 'cards' && (
            <Flex>
              <PolaroidCard
                width={200}
                title="Random pic"
                description="Some random picture"
              />

              <PolaroidCard
                width="500px"
                title="Random pic"
                description="Some random picture"
              />

              <PolaroidCard
                width={1 / 3}
                title="Random pic"
                description="Some random picture"
              />
            </Flex>
          )}
          {this.state.view === 'profile' && (
            <UserProfilePage
              name="Evgenios Skitsanos"
              description="Software Developer since 1992"
              sx={{ p: 2 }}
            />
          )}

          {this.state.view === 'json' && (
            <JsonViewer
              item={{
                error: { message: 'err' },
                execTime: 0.000021
              }}
            />
          )}

          {this.state.view === 'editor' && <EditorDemo />}
        </Box>

        <Box color="white" backgroundColor="primary">
          Demo box by Skitsanos | Copyright &copy; 2019
        </Box>
      </DefaultThemeProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
