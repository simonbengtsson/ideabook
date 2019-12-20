import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {IdeaDetailScreen} from "./screens/Idea/Detail";
import {HomeScreen} from "./screens/Home/Home";
import {IdeaForm} from "./screens/Idea/Form";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App" style={styles.container}>
        <Switch>
          <Route path="/ideas/add">
            <IdeaForm />
          </Route>
          <Route path="/ideas/:id/update">
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
    </Router>
  );
};

const styles = {
  container: {
    padding: 20,
    paddingTop: 30
  },

};

export default App;
