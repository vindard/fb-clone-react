import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  // const [ { user }, dispatch ] = useStateValue()
  const { user } = useStateValue()[0]

  return (
    // BEM  naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            {/* <Sidebar user={
              {
                photoURL: "https://avatars.githubusercontent.com/u/17693119?v=4",
                displayName: "Arvin R"
              }
            }/> */}
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
