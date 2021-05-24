import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function App() {
  return (
    // BEM  naming convention
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar user={
          {
            photoURL: "https://avatars.githubusercontent.com/u/17693119?v=4",
            displayName: "Arvin R"
          }
        }/>
        <Feed />
        <Widget />
      </div>

    </div>
  );
}

export default App;
