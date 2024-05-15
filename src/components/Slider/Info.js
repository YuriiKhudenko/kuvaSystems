import { useState } from "react";
import styles from "./Slider.module.css";
import { useEventsContext } from "../../contexts/EventsContext";

const Info = ({ currentImageIndex, filteredImages }) => {
  const { cameras } = useEventsContext();

  const [selectedCamera, setSelectedCamera] = useState(
    cameras[0]?.deviceId || ""
  );

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoSection}>
        <h2 className={styles.infoTitle}>General Information</h2>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Index</div>
          <div className={styles.infoValue}>{currentImageIndex}</div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Scan Timestamp</div>
          <div className={styles.infoValue}>
            {filteredImages[currentImageIndex]?.createdOn}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Number of detections</div>
          <div className={styles.infoValue}>
            {filteredImages[currentImageIndex]?.detectionsList.length}
          </div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <h2 className={styles.infoTitle}>Image Metadata</h2>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Confidence level</div>
          <div className={styles.infoValue}>
            {filteredImages[currentImageIndex]?.overallConf}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Noise floor levels</div>
          <div className={styles.infoValue}>
            {filteredImages[currentImageIndex]?.noiseFloorMetric}
          </div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <h2 className={styles.infoTitle}>View from Camera</h2>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Choose Camera</div>
          <select
            className={styles.infoValue}
            value={selectedCamera}
            onChange={handleCameraChange}
          >
            {cameras.map((camera) => (
              <option key={camera.deviceId} value={camera.deviceId}>
                {camera.tags.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Info;
