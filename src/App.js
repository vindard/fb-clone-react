import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';

function App() {
  const user = null

  return (
    // BEM  naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
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
        </>
      )}

    </div>
  );
}

export default App;
