import FeaturesContainer from "../../components/featuresContainer/FeaturesContainer";
import IntroNavBar from "../../components/introNavBar/IntroNavBar";
import styles from "./IntroductionPage.module.scss";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IntroductionPage = () => {
	const navigate = useNavigate();
	const checkAuth = () => {
		const userData = localStorage.getItem("data");
		if (userData) {
			setTimeout(() => {
				navigate("/home/books");
			}, 3000);
		}
	};
	useEffect(() => {
		checkAuth();
	});
	return (
		<div className={styles.container}>
			<IntroNavBar />
			<FeaturesContainer />
		</div>
	);
};
export default IntroductionPage;
