import Event from "./Event/Event";
import styles from "./Events.module.scss";
const Events = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      {data ? (
        data.map((item) => <Event date={item.date} text={item.text} />)
      ) : (
        <p>There is no Events</p>
      )}
    </div>
  );
};
export default Events;
