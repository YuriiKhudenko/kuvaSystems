import Button from "../../ui/Button";
import Info from "./Info";

import { ReactComponent as LeftArrow } from "../../media/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../media/rightArrow.svg";

import styles from "./Slider.module.css";

const Slider = ({
  filteredImages,
  setCurrentImageIndex,
  currentImageIndex,
  images,
}) => {
  const nextImgHandler = () => {
    if (currentImageIndex >= filteredImages.length - 1) return;
    setCurrentImageIndex(currentImageIndex + 1);
  };

  const previousImgHandler = () => {
    if (currentImageIndex === 0) return;
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const renderDetectionBoxes = (detectionsList) => {
    return detectionsList.map((detection, index) => {
      const coords = detection.roicoordsList;
      const left = coords[0];
      const top = coords[1];
      const width = coords[2] - coords[0];
      const height = coords[5] - coords[1];

      return (
        <div
          key={index}
          className={styles.detectionBox}
          style={{
            left: `${left}px`,
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`,
          }}
        ></div>
      );
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <Button onClick={previousImgHandler} type="arrow">
          <LeftArrow width="18" height="18" />
        </Button>
        <div className={styles.imageContainer}>
          <div className={styles.counter}>
            Image: {currentImageIndex + 1} of {filteredImages.length}
          </div>
          {images.length > 0 && (
            <div className={styles.imageWrapper}>
              <img
                src={filteredImages[currentImageIndex].jpg}
                alt={`Image ${currentImageIndex + 1}`}
                className={styles.image}
              />
              {filteredImages[currentImageIndex].detectionsList &&
                renderDetectionBoxes(
                  filteredImages[currentImageIndex].detectionsList
                )}
            </div>
          )}
        </div>
        <Button onClick={nextImgHandler} type="arrow">
          <RightArrow width="18" height="18" />
        </Button>
      </div>
      <Info
        currentImageIndex={currentImageIndex}
        filteredImages={filteredImages}
      />
    </div>
  );
};

export default Slider;
