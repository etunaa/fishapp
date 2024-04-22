import FishiesWrapper from "./components/FishiesWrapper/FishiesWrapper"
import {fishies} from "./components/FishiesWrapper/Fishies"
import NavBar from "./components/NavBar/NavBar"
import NavBarItem from "./components/NavBar/NavBarItem/NavBarItem"


function App() {
  return (
    <div className="App">
      <NavBar>
      <NavBarItem title="Home" />
        <NavBarItem title="Fishies" />
        <NavBarItem title="Info" />
        <NavBarItem title="Image" />
      </NavBar>
      <FishiesWrapper fishies={fishies}/>
    </div>
  )
}
export default App
