import CollectionHero from "./Components/CollectionHero/CollectionHero";
import Collection from "./Components/Collections/Collection";
import Footer from "./Components/Footer/Footer";
import HomeHero from "./Components/HomeHero/HomeHero";
import NFT from "./Components/NFT/NFT";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
  <>
   <Navbar/>
   <CollectionHero/>
   {/* <HomeHero/> */}
   {/* <Collection/> */}
   <NFT/>
   <Footer/>
  </>
  );
}

export default App;
