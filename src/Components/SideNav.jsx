import React from "react";
import '../Components/SideNav.css';
import homelogo from '../Images/homelogo.png';
import sale from '../Images/sale.png';
import statistic from '../Images/statistic.png';
import wallet from '../Images/wallet.png';
import setting from '../Images/setting.png';


function SideNav() {
  return (
    <div className="Fullpage">
      <div className="colorbar">
          <button className="btn1">
            <a href="#">J</a>
          </button> <br></br>

          <button className="btn2">
          <img src={homelogo} alt="homelogo"/><br></br>
            <a href="#">Home</a>
          </button> <br></br>

          <button className="btn3">
          <img src={sale} alt="img2"/><br></br>
            <a href="#">Sale</a>
          </button> <br></br>

          <button className="btn4">
          <img src={statistic} alt="img3"/><br></br>
            <a href="#">Statistic</a>
          </button> <br></br>

          <button className="btn4">
          <img src={wallet} alt="img4"/><br></br>
            <a href="#">Wallet</a>
          </button> <br></br>

          <button className="btn4">
          <img src={setting} alt="img5"/><br></br>
            <a href="#">Setting</a>
          </button> <br></br>
      </div>
    </div>
  );
}

export default SideNav;
