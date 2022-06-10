
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import { useEffect } from 'react';

import Chats from './routerComponents/Chats';


const App=()=>{


  return (
    <div>
       <Navbar/>
      <Details/>
    
  
    </div>
  );
}

export default App;
