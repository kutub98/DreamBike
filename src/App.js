import logo from './logo.svg';
import './App.css';
import Router from './Router/Router';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
     <div>
      <Toaster />
    </div>
      <Router>
     
      </Router>
    </div>
  );
}

export default App;
