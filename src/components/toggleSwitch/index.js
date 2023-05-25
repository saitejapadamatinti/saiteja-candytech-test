import React, { useState } from "react";
import "./index.css";

const ToogleSwitch = (props) => {
  const { gettingToggleStatus, toggleSwitchStatus } = props;
  const [toggleValue, setToggleValue] = useState(toggleSwitchStatus);
  gettingToggleStatus(toggleValue);

  const togglerHandelr = () => {
    setToggleValue(!toggleValue);
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={togglerHandelr} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToogleSwitch;
