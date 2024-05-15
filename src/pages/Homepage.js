import { useState } from "react";

import ImageToggle from "../components/ImageToggle/ImageToggle.js";
import ImageOverview from "../components/ImageOverview/ImageOverview.js";
import { useEventsContext } from "../contexts/EventsContext";

import styles from "./Homepage.module.css";

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const { error, isLoading } = useEventsContext();

  if (error?.message)
    return (
      <div>
        <h1>{error?.message}</h1>
      </div>
    );

  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  return (
    <div className={styles.app}>
      <h1>Overview</h1>

      <ImageToggle
        setCurrentImageIndex={setCurrentImageIndex}
        setFilter={setFilter}
        filter={filter}
      />
      <ImageOverview
        filter={filter}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
};

export default HomePage;
