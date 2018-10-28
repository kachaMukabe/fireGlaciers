import React, { Component } from "react";

class MainHeader extends Component {
  render() {
    return (
      <div>
        <div className="header ">
          <h3 className="hd-txt ">MosquitoCast</h3>
          <img
            onClick={() => {
              alert("menu coming sooner before sunday midnight kwati");
            }}
            className="hmb-menu "
            src="/images/humb.png"
            alt="humburger menu"
          />
        </div>
      </div>
    );
  }
}

export default MainHeader;
