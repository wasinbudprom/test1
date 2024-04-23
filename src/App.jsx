// App.jsx

import "./App.css";
import Navbar from "./components/HomePage/Navbar/Navbar";
import TrackingInfo from "./components/TrackStatus/TrackingInfo/TrackingInfo";
import Map from "./components/TrackStatus/Map/Map";
import Footer from "./components/HomePage/Footer/Footer";
import Profile from "./components/Profile/Profile";
import PayBill from "./components/PayBill/PayBill";
import Paymenthistory from "./components/Paymenthistory/Paymenthistory";
import ChangePassword from "./components/Settings/ChangePassword/ChangePassword";

function App() {
  return (
    <div>
      <Navbar />
      {/* <TrackingInfo /> */}
      {/* <Map /> */}

      <Footer />
      {/* <Profile /> */}
      {/* <PayBill /> */}
      {/* <Paymenthistory /> */}
    </div>
  );
}

export default App;
