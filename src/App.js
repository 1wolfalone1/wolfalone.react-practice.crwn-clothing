import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/nav/nav.component";
import Authentication from "./routes/authentication/authentication.component";
const Shop = () => {
   return <h1>Test hihi</h1>;
};

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path="shop" element={<Shop></Shop>} />
            <Route path="sign-in" element={<Authentication/>}/>
         </Route>
      </Routes>
   );
};

export default App;
