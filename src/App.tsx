import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {IdeaDetailScreen} from "./screens/Idea/Detail";
import {HomeScreen} from "./screens/Home/Home";
import {IdeaForm} from "./screens/Idea/Form";
import {CssBaseline} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import green from '@material-ui/core/colors/green';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: lightBlue,
      secondary: green,
    },
  });
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App" style={styles.container}>
          <Switch>
            <Route path="/ideas/add">
              <IdeaForm />
            </Route>
            <Route path="/ideas/:id/edit">
              <IdeaForm />
            </Route>
            <Route path="/ideas/:id">
              <IdeaDetailScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
};

const styles = {
  container: {
  },

};

export default App;
