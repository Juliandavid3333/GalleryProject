import {Norway1} from './components/Norway1';
import {Norway2} from './components/Norway2';
import {Norway3} from './components/Norway3';
import {Norway4} from './components/Norway4';
import {Norway5} from './components/Norway5';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <h1 className='text-center-my-3'>Gallery Project</h1>
    </div>
    <div className='container d-flex justify-content-center'>
    <Routes>
      <Route path='/norway1' element= {<Norway1 className='main-img-container'/>} />
      <Route path='/norway2' element= {<Norway2 className='main-img-container'/>} />
      <Route path='/norway3' element= {<Norway3 className='main-img-container'/>} />
      <Route path='/norway4' element= {<Norway4 className='main-img-container'/>} />
      <Route path='/norway5' element= {<Norway5 className='main-img-container'/>} />
    </Routes>
    </div>
    <div className='container'>
     <Navigation />
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
