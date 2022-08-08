import classes from "./ComicsCategoryList.module.scss";
import { useEffect, useState, useContext } from "react";
import { categoryContext } from "../../context/categories";
import Card from "../../components/card/card";
import PaginationBar from "../../components/pagination-bar/pagination";
import ComicsSideBar from "../../common/comics-sidebar/comicsSidebar";
import EventPoster from "../../components/poster/poster";
import NavBar from "../../components/navbar/navbar";
import SearchBar from "../../common/search-bar/search-bar";
import IntroComponentAnimation from "../../common/containers/animation/intro-animation/IntroComponentAnimation";
import Footer from "../../components/footer/footer"

const ComicsCategorylist = () => {
	const { comicsCategory, change } = useContext(categoryContext);

	const [cards, setCards] = useState([]);
	const [page, setPage] = useState(1);

	const url = `https://www.googleapis.com/books/v1/volumes?q=${comicsCategory}&startIndex=${page}&orderBy=newest&maxResults=20`;

	useEffect(() => {
		const fetchcards = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setCards(data.items);
			} catch (error) {
				console.log("Error occured is :", error.message);
			}
		};
		fetchcards();
	}, [url]);

	return (
		<>
			<NavBar />
			<EventPoster />
			<div className={classes.container}>
				<div>
					<ComicsSideBar />
				</div>
				<IntroComponentAnimation isVisible={change}>
					<div className={classes.cardlist}>
						<SearchBar />
						<h2 className={classes.headline}> {comicsCategory}</h2>

						<div className={classes.cardlistflex}>
							{cards ? (
								cards.map((item, index) => {
									return item.volumeInfo.imageLinks ? (
										<Card key={index} item={item} />
									) : null;
								})
							) : (
								<h1>Loading ...</h1>
							)}
						</div>
						<PaginationBar control={{ page, setPage }} />
					</div>
				</IntroComponentAnimation>
			</div>
			<Footer />
		</>
	);
};
export default ComicsCategorylist;
