import './App.css';
import PostListContainer from './Components/PostListContainer/PostListContainer';
import TagList from './Components/TagList/TagList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <PostListContainer/>
      </div>
      <Switch>
					<Route path='/tags' component={TagList} />
				</Switch>
    </Router>
  );
}

export default App;
