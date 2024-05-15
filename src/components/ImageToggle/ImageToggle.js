import React, { memo } from "react";
import Button from "../../ui/Button";

import styles from "./ImageToggle.module.css";

const ImageToggle = ({ setCurrentImageIndex, setFilter, filter }) => {
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentImageIndex(0);
  };

  return (
    <div className={styles.wrapper}>
      <span>Show images:</span>
      <Button
        type={filter === "all" ? "activeToggleButton" : ""}
        onClick={() => handleFilterChange("all")}
      >
        All Images
      </Button>
      <Button
        type={filter === "noGasLeaks" ? "activeToggleButton" : ""}
        onClick={() => handleFilterChange("noGasLeaks")}
      >
        No Gas Leaks
      </Button>
      <Button
        type={filter === "gasLeaks" ? "activeToggleButton" : ""}
        onClick={() => handleFilterChange("gasLeaks")}
      >
        Gas Leaks
      </Button>
    </div>
  );
};

export default memo(ImageToggle);
