import styles from "./ProfileListItem.module.scss";
const ProfileListItem = ({ bg, active, onClick }) => {
	return (
		<li
			onClick={() => onClick()}
			className={`${styles.listItem} ${active ? styles.activeOption : ""}`}
		>
			<div
				style={{ backgroundImage: `url(${bg})` }}
				className={styles.icon}
			></div>
		</li>
	);
};
export default ProfileListItem;
