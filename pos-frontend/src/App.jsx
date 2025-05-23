import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import Header from "./components/shared/Header";
import Table from "./pages/Table";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/tables" element={<Table/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
