import { createContext, useState } from "react";

export const categoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
	const [category, setCategory] = useState("All");
	const [comicsCategory, setComicsCategory] = useState("Anime");
	const [change, setChange] = useState(true);
	const filterItemHandler = () => {
		setChange(false);
		setTimeout(() => {
			setChange(true);
		}, 680);
	};
	return (
		<categoryContext.Provider
			value={{
				category,
				setCategory,
				change,
				filterItemHandler,
				setComicsCategory,
				comicsCategory,
			}}
		>
			{children}
		</categoryContext.Provider>
	);
};
export default CategoryContextProvider;
