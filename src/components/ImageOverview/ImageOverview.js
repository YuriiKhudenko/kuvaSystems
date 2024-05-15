import { useMemo } from "react";
import Slider from "../Slider/Slider";
import { useEventsContext } from "../../contexts/EventsContext";

import styles from "./ImageOverview.module.css";

const ImageOverview = ({ currentImageIndex, setCurrentImageIndex, filter }) => {
  const { images } = useEventsContext();

  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      if (filter === "noGasLeaks") {
        return image.detectionsList.length === 0;
      } else if (filter === "gasLeaks") {
        return image.detectionsList.length > 0;
      } else {
        return true;
      }
    });
  }, [images, filter]);

  return (
    <div className={styles.imageOverviewContent}>
      <Slider
        filteredImages={filteredImages}
        setCurrentImageIndex={setCurrentImageIndex}
        currentImageIndex={currentImageIndex}
        images={images}
      />
    </div>
  );
};

export default ImageOverview;
