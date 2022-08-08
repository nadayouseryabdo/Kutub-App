//import scss
import classes from "./cardDetails.module.scss";
//import from react library
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import { useDispatch } from "react-redux";
import { addNewBook } from "../../redux/cartslice";
import { addNewFavourite } from "../../redux/favouriteslice"; 
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const CardDetails = () => {
  const [value, setValue] = useState(1);
  const [card, setCard] = useState();
  const urlparams = useParams();

  const dispatch = useDispatch();
  const handleAddToCart=(item)=>{
    dispatch(addNewBook(item))
  }
  const handleAddToFav=(item)=>{
    dispatch(addNewFavourite(item))
  }

  useEffect(() => {
    fetchcards();
  });

  const fetchcards = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${urlparams.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        console.log(card);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  console.log(card);

  return (
    <>
      <NavBar />
      {card ? (
        <div className={classes.cardContainer}>
          <div className={classes.cardbg}>
            <div className={classes.icons}>
            <a href={card?.saleInfo.buyLink} target="_blank">
                <div className={classes.buy}>
                  <div className={classes.buyinfo}>
                   Buy Book
                    <p className={classes.buyparagraph}>
                      you can buy the book online from the link here
                    </p>
                  </div>
                </div>
              </a>
              <a href={card?.accessInfo?.webReaderLink} target="_blank">
                <div className={classes.laptop}>
                  <div className={classes.laptopinfo}>
                    Read Online
                    <p className={classes.laptopparagraph}>
                      you can read the book online from the link here
                    </p>
                  </div>
                </div>
              </a>
              <a >
                <div onClick={()=>handleAddToCart(card)} className={classes.addtocart}>
                  <div className={classes.addtocartinfo}>
                    Add To Cart
                    <p className={classes.addtocartparagraph}>
                    you can add the book to the cart so you can buy it anytime
                      {/* <Button className='favbtn' variant="contained" >Add to Favourite</Button> */}
                    </p>
                  </div>
                </div>
              </a>
              <a href={card?.saleInfo.buyLink} target="_blank">
                <div onClick={()=>handleAddToFav(card)} className={classes.addtofav}>
                  <div className={classes.addtofavinfo}>
                    Add To Favourite
                    <p className={classes.addtofavparagraph}>
                      you can add the book to your favourite
                      {/* <Button className='favbtn' variant="contained" >Add to Favourite</Button> */}
                    </p>
                    
                  </div>
                </div>
              </a>
              <a href={card?.saleInfo.buyLink} target="_blank">
                <div className={classes.record}>
                  <div className={classes.recordinfo}>
                    Book record
                    <p className={classes.recordparagraph}>
                      Users recorded the book
                      <div className={classes.user}></div>
                      <p>open the book record</p>
                      <div className={classes.user}></div>
                      <p>open the book record</p>
                      <hr />
                      <p>you can also record the book and win points</p>
                      <div className={classes.points}></div>
                    </p>
                  </div>
                </div>
              </a>
              <a href={card?.saleInfo.buyLink} target="_blank">
                <div className={classes.events}>
                  <div className={classes.eventsinfo}>
                    Book Events
                    <p className={classes.eventsparagraph}>
                      old and latest events on the book
                    </p>
                  </div>
                </div>
              </a>
              <a>
                <div className={classes.borrowlend}>
                  <div className={classes.borrowlendinfo}>
                    Borrow/Lend
                    <p className={classes.borrowlendparagraph}>
                      you can Borrow or Lend books with other users the book will reach at your door </p>
                      {/* <div  >
                      <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button >Borrow</Button>
                                <Button>Lend</Button>
                            </ButtonGroup>
                            </div> */}
                  </div>
                </div>
              </a>
            </div>
            <div>
              <figure className={classes.cardimg}>
                <img src={card?.volumeInfo.imageLinks?.thumbnail} alt="" />
              </figure>
            </div>
            <div>
              <h2 className={classes.title}>{card?.volumeInfo.title}</h2>
              <p className={classes.description}>{card?.volumeInfo.description}</p>
              {/* <p>Ratings Count : {card?.volumeInfo.ratingsCount}</p> */}
              <h4 style={{marginBottom:5}}>Author Name : {card?.volumeInfo.authors}</h4>
              <p style={{marginBottom:5}}>page count : {card?.volumeInfo.pageCount}</p>
              <h3>Published Date : {card?.volumeInfo.publishedDate}</h3>
              {/* <p>{card?.saleInfo.saleability}</p> */}
              <Typography style={{marginTop:20}} component="legend">Rate this book:</Typography>
                  <Rating size="large" name="simple-controlled"
                   value={value} onChange={(event, newValue) => {setValue(newValue);}} />
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default CardDetails;
