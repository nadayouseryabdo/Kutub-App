import CardHoverWrapper from "../containers/animation/cardHoverWrapper/Wrapper";
import styles from "./ProfileBookCard.module.scss";
const ProfileBookCard = ({ bg, onClick }) => {
  return (
    <CardHoverWrapper onClick={() => {}} text={bg?.title}>
      <div
        onClick={() => onClick}
        style={{
          backgroundImage: `url(${bg?.images?.webp?.large_image_url})`,
        }}
        className={styles.Container}
      ></div>
    </CardHoverWrapper>
  );
};
export default ProfileBookCard;
