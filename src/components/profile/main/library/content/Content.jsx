import ProfileBookCard from "../../../../../common/profileBookCard/ProfileBookCard";
import IntroComponentAnimation from "../../../../../common/containers/animation/intro-animation/IntroComponentAnimation";
import styles from "./Content.module.scss";
import { useEffect, useState } from "react";
const Content = ({ change }) => {
  const [data, setData] = useState([]);
  const comicUrl = `https://api.jikan.moe/v4/top/anime`;
  useEffect(() => {
    fetch(comicUrl)
      .then((raw) => raw.json())
      .then((info) => setData(info.data));
  }, []);
  console.log(data);
  return (
    <IntroComponentAnimation isVisible={change}>
      <main className={styles.main}>
        {data ? (
          data.map((item, i) => <ProfileBookCard key={i} bg={item} />)
        ) : (
          <p>No Books Available</p>
        )}
      </main>
    </IntroComponentAnimation>
  );
};
export default Content;
