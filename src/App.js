import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
// Files
import Nav from './component/nav';
import Body from './component/main';
import Foot from './component/footer';

function App() {
  return (
    <>
     <Nav/>
     <Body/>
     <Foot/>
    </>
  );
}

export default App;
