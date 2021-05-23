import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM  naming convention
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar user={
          {
            photoURL: "https://avatars.githubusercontent.com/u/17693119?v=4",
            displayName: "Arvin R"
          }
        }/>
        {/* Feed */}
        {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
