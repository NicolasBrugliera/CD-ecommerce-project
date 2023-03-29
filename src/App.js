import ItemListContainer from "./components/itemListContainer/itemListContainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return(
    <div className = 'App'>
      <div>
        <NavBar/>
      </div>
      <ItemListContainer greeting={'Welcome'}/>
    </div>
  )
}

export default App