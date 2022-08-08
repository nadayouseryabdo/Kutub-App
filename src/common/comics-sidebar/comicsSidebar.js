import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./comicsSidebar.module.scss";
import { categoryContext } from "../../context/categories";

function ComicsSideBar() {
  const value = useContext(categoryContext);
  const [active, setactive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickHandler = (text) => {
    value.filterItemHandler();
    if (text === "Manga") {
      value.setComicsCategory("Manga");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[0] = true;
        return temp;
      });
    }
    if (text === "Comics") {
      value.setComicsCategory("Comics");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[1] = true;
        return temp;
      });
    }
    if (text === "Mangacomedy") {
      value.setComicsCategory("Mangacomedy");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[2] = true;
        return temp;
      });
    }
    if (text === "MangaRomantic") {
      value.setComicsCategory("MangaRomantic");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[3] = true;
        return temp;
      });
    }
    if (text === "MangaAdventure") {
      value.setComicsCategory("MangaAdventure");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[4] = true;
        return temp;
      });
    }
    if (text === "ComicsCrime") {
      value.setComicsCategory("ComicsCrime");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[5] = true;
        return temp;
      });
    }
    if (text === "MangaSuperHero") {
      value.setComicsCategory("MangaSuperHero");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[6] = true;
        return temp;
      });
    }
    if (text === "ComicsFantasy") {
      value.setComicsCategory("ComicsFantasy");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[7] = true;
        return temp;
      });
    }
    if (text === "ComicsDetective") {
      value.setComicsCategory("ComicsDetective");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[8] = true;
        return temp;
      });
    }
    if (text === "ComicsHistorical") {
      value.setComicsCategory("ComicsHistorical");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[9] = true;
        return temp;
      });
    }
    if (text === "ComicsHumor") {
      value.setComicsCategory("ComicsHumor");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[10] = true;
        return temp;
      });
    }
    if (text === "ComicsLiterary") {
      value.setComicsCategory("ComicsLiterary");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[11] = true;
        return temp;
      });
    }
    if (text === "Slice-of-Life") {
      value.setComicsCategory("Slice-of-Life");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[12] = true;
        return temp;
      });
    }
    if (text === "MangaHorror") {
      value.setComicsCategory("MangaHorror");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[13] = true;
        return temp;
      });
    }
  };
  return (
    <>
      <div className={classes.sidebar}>
        <Link to="/comicscategorylist">
          <li
            className={`${active[0] ? classes.active : ""}`}
            onClick={() => onClickHandler("Manga")}
          >
            Manga
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("Comics")}
            className={`${active[1] ? classes.active : ""}`}
          >
            Comics
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("mangacomedy")}
            className={`${active[2] ? classes.active : ""}`}
          >
            Comedy
          </li>
        </Link>

        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("MangaRomantic")}
            className={`${active[3] ? classes.active : ""}`}
          >
            Romantic
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("MangaAdventure")}
            className={`${active[4] ? classes.active : ""}`}
          >
            Adventure
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("ComicsCrime")}
            className={`${active[5] ? classes.active : ""}`}
          >
            Crime
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("MangaSuperHero")}
            className={`${active[6] ? classes.active : ""}`}
          >
            SuperHero
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("ComicsFantasy")}
            className={`${active[7] ? classes.active : ""}`}
          >
            Fantasy
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("ComicsDetective")}
            className={`${active[8] ? classes.active : ""}`}
          >
            Detective
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("ComicsHistorical")}
            className={`${active[9] ? classes.active : ""}`}
          >
            Historical
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("ComicsHumor")}
            className={`${active[10] ? classes.active : ""}`}
          >
            Humor
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("ComicsLiterary")}
            className={`${active[11] ? classes.active : ""}`}
          >
            Literary
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("Slice-of-Life")}
            className={`${active[12] ? classes.active : ""}`}
          >
            Slice-of-Life
          </li>
        </Link>
        <Link to="/comicscategorylist">
          <li
            onClick={() => onClickHandler("MangaHorror")}
            className={`${active[13] ? classes.active : ""}`}
          >
            Horror
          </li>
        </Link>
      </div>
    </>
  );
}

export default ComicsSideBar;
