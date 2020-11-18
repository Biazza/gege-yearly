import { Media } from "react-bootstrap";
import Image from "next/image";
import styles from "./styles/speakers.module.css";
import { IoIosTime } from "react-icons/io";

export default function Speakers({
  imagePath,
  speakerName,
  lectureStart,
  lectureEnd,
  lectureTitle,
}) {
  return (
    <Media as="li">
      <Image
        src={imagePath}
        width="100"
        height="100"
        alt="Speaker Picture"
        className={styles.speaker_image}
      />
      <Media.Body>
        <div className={styles.speaker_container}>
          <h5>{lectureTitle}</h5>
          <p>
            Palestrante: {speakerName} <br />
            Horário: {lectureStart} - {lectureEnd}h <IoIosTime />
          </p>
        </div>
      </Media.Body>
    </Media>
  );
}
