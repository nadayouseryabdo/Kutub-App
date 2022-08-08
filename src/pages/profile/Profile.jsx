import ProfileSection from "../../components/profile/profileSection/ProfileSection";
import styles from "./Profile.module.scss";
import ProfileNav from "../../components/profile/profileNav/ProfileNav";
import IntroComponentAnimation from "../../common/containers/animation/intro-animation/IntroComponentAnimation";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <ProfileNav />
        <IntroComponentAnimation isVisible={true}>
          <main className={styles.main}>
            <Outlet />
          </main>
        </IntroComponentAnimation>
        <ProfileSection />
      </div>
    </div>
  );
};
export default ProfilePage;
