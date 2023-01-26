import {Route, Routes} from "react-router-dom";import './App.css';
import Home from "./components/Home";
import dataset from './components/dataset'

function App() {

  return (
    <>

    <Routes>
   
        <Route path="/" element={<Home />}>
         
        </Route>
        <Route path="/dataset" element={<dataset/>}>
         
        </Route>

      </Routes>
      </>
  );
}

export default App;
