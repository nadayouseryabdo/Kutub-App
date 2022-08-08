import styles from "./ProfileNav.module.scss";
import logo from "../../../assets/icons/logo.png";
import library from "../../../assets/icons/books-stack-of-three.png";
import options from "../../../assets/icons/settings.png";
import record from "../../../assets/icons/microphone.png";
import calendar from "../../../assets/icons/calendar.png";
import connections from "../../../assets/icons/connections.png";
import cart from "../../../assets/icons/shopping-cart.png";
import ProfileListItem from "../../../common/ProfileListItem/ProfileListItem";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const ProfileNav = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/profile/library");
  }, []);

  return (
    <nav className={styles.nav}>
      <figure
        onClick={() => navigate("/options")}
        className={styles.logoContainer}
      >
        <img className={styles.logo} src={logo} alt="logo" />
      </figure>
      <ul className={styles.options}>
        <ProfileListItem onClick={() => navigate("library")} bg={library} />
        <ProfileListItem onClick={() => navigate("record")} bg={record} />
        <ProfileListItem onClick={() => navigate("calendar")} bg={calendar} />
        <ProfileListItem
          onClick={() => navigate("/support")}
          bg={connections}
        />
        <ProfileListItem onClick={() => navigate("/cart")} bg={cart} />
        <ProfileListItem onClick={() => navigate("setting")} bg={options} />
      </ul>
    </nav>
  );
};
export default ProfileNav;
