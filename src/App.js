import { Outlet } from "react-router-dom";
import All from "./component/All";
import Header from "./component/Header";


function App() {
  return (
    <>
    <Header></Header>
    <main>
    <Outlet></Outlet>
    </main>
    </>
  )
}

export default App;
