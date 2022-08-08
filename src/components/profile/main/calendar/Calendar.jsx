import { useRef, useState } from "react";
import styles from "./Calendar.module.scss";
import Events from "./Events/Events";

const Calendar = () => {
  const dateRef = useRef();
  const textRef = useRef();
  const [data, setData] = useState([
    { date: "2022-10-02", text: "anime con" },
    { date: "2022-10-02", text: "spring signing" },
  ]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (dateRef.current.value !== "" && textRef.current.value !== "") {
      setData((prev) => [
        ...prev,
        { date: dateRef.current.value, text: textRef.current.value },
      ]);
      dateRef.current.value = "";
      textRef.current.value = "";
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <span className={styles.addEvent}>Add Event</span>
        <input className={styles.about} type="text" ref={textRef} />
        <input className={styles.date} ref={dateRef} type="date" />
        <button className={styles.add} type="submit">
          Add
        </button>
      </form>
      <Events data={data} />
    </div>
  );
};
export default Calendar;
