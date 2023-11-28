
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Mainpage from './Mainpage/Mainpage';
import AllDoc from './AllDoc/AllDoc';
import ViewDoc from './ViewDoc/ViewDoc';

function App() {
  return (
    <div className="App">
      <Header/>
     
    <Routes>
      {/* localhost:3000 */}
      <Route path='/' element={ <Mainpage/>}/>

      {/* localhost:3000/doctor */}
      <Route path='/allDoctors' element={<AllDoc/>}/>

      {/* localhost:3000/ViewDoc/:id */}
      <Route path='/viewDoc/:id' element={<ViewDoc/>}/>
    </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
