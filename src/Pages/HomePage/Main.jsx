import { Outlet } from "react-router-dom";
import Nav from "../../Shared/Nav";
import Footer from "../../Shared/Footer";

const Main = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
