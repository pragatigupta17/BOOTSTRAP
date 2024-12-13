import Navbar from "./navbar"
import Container from "./container"
import Card from "./card"

function App(){
  return(
    <>
    <Navbar/>
    <h1 className="text-primary">Welcom to bhopal</h1>
    <img src="https://universemagazine.com/wp-content/uploads/2022/08/zm4nfgq29yi91-1536x1536-1.jpg" height="200px" weight="200px"/>
    <Container/>
    <Card/>
    </>
  )
}
export default App