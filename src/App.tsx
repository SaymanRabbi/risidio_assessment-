import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Collection from "./Components/Collection/Collection";
import Wallet from "./Components/Wallet/Wallet";


function App() {
  return (
  <>
  <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/collection'  element={<Collection/>}/>
    <Route path= '/wallet' element={<Wallet/>}/>
    </Routes>
  </>
  );
}

export default App;
