import LibraryFilterItem from "./libraryFilterItem/LibraryFilterItem";
import comics from "../../../../assets/icons/superhero.png";
import books from "../../../../assets/icons/books.png";
import favorite from "../../../../assets/icons/favorite.png";
import lent from "../../../../assets/icons/lent.png";
import Borrowed from "../../../../assets/icons/Borrowed.png";
import rated from "../../../../assets/icons/rated.png";
import summary from "../../../../assets/icons/summary.png";
import styles from "./Library.module.scss";
import { useState } from "react";
import Content from "./content/Content";
import { useNavigate } from "react-router-dom";
const Library = () => {
  const [change, setChange] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(true);
  const navigate = useNavigate();
  const filterMenu = [
    { bg: comics, title: "comics" },
    { bg: books, title: "Books" },
    { bg: favorite, title: "Favorite" },
    { bg: lent, title: "Lent" },
    { bg: Borrowed, title: "Borrowed" },
    { bg: rated, title: "Reviewed" },
    { bg: summary, title: "Summarized" },
  ];

  const filterItemHandler = (url) => {
    setSelectedCategory(url);
    console.log(selectedCategory);
    navigate(url);
    setChange(false);
    setTimeout(() => {
      setChange(true);
    }, 680);
  };

  return (
    <>
      <ul className={styles.navContainer}>
        {filterMenu.map((item) => (
          <LibraryFilterItem
            key={item.bg}
            bg={item.bg}
            title={item.title}
            onClick={() => filterItemHandler(item.title)}
          />
        ))}
      </ul>
      <Content change={change} selectedCategory={selectedCategory} />
    </>
  );
};
export default Library;
