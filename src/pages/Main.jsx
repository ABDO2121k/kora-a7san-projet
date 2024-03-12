import Footer from "../components/main/Footer";
import Nav from "../components/main/Nav";
import Card from "../components/main/Card";
import WelecomParg from "../components/main/WelecomParg";
import Home from "../components/main/Home";
const Main = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="mt-2">
          <Home/>
      </div>
      <div>
          <WelecomParg/>
      </div>
      <div className="mt-10">
          <Card/>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
