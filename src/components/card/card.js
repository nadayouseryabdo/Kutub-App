import classes from "./card.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewBook } from "../../redux/cartslice";
import { addNewFavourite } from "../../redux/favouriteslice";


const Card = ({ item }) => {

	const dispatch = useDispatch();
  const handleAddToCart=(item)=>{
    dispatch(addNewBook(item))
  }
  const handleAddToFav=(item)=>{
    dispatch(addNewFavourite(item))
    console.log(item)
  }
  return (
    <div className={classes.container}>
      <Link
        to={`/home/${item.id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <figure className={classes.imageContainer}>
          <img
            className={classes.image}
            src={item.volumeInfo.imageLinks?.thumbnail}
            alt=""
          />
        </figure></Link>
        <p style={{marginTop:10}}>{item.volumeInfo.title.substring(0,20)}...</p>
        <div className={classes.icons}>
            <div onClick={()=>handleAddToFav(item)} className={classes.fav}> </div>
            <div className={classes.record}></div>
            <div onClick={()=>handleAddToCart(item)} className={classes.cart}></div>
            <div className={classes.events}></div>
          </div>
      
      {/* <div className={classes.icons}>
        <div className={classes.fav}> </div>
        <div className={classes.cart}></div>
      </div> */}
    </div>
  );
};
export default Card;
