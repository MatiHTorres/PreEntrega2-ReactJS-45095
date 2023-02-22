import NavBar from "./components/NavBar"
import Portada from "./components/Portada"
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar/>
      <Portada/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      <Footer/>
    </div>
  )
}

export default App;
