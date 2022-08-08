import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetails from "./pages/card-details/cardDetails";
import SignUp from "./pages/signup/signup";
import NotFound from "./pages/notFound/notfound";
import SignIn from "./pages/signin/signin";
import IntroductionPage from "./pages/introductionPage/IntroductionPage";
import SearchResult from "./pages/search-results/search-result";
import Categorylist from "./pages/category-list/categoryList";
import Options from "./pages/intro-option/option";
import HomeBooks from "./components/home-books/home-books";
import HomeComics from "./components/home-comics/home-comics";
import ComicsCategorylist from "./pages/comics-category-list/ComicsCategoryList";
import ProfilePage from "../src/pages/profile/Profile";
import CartPage from "./pages/cartPage/CartPage";
import HomePage from "./pages/home-page/homepage";
import ProfileEventList from "./components/profileeventlist/profileeventlist";
import Library from "./components/profile/main/library/Library";
import Calendar from "./components/profile/main/calendar/Calendar";
import SettingForm from "./components/profile/main/settings/settingForm/SettingForm";
import AudioProfile from "./components/audioprofile/audioprofile";
import Content from "./components/profile/main/library/content/Content";
import ContactUS from "./pages/contactus/contactus";
import FavouritesListPage from "./pages/favourites/favouritepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/options" element={<Options />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="books" element={<HomeBooks />} />
          <Route path="comics" element={<HomeComics />} />
        </Route>
        <Route path="/category" element={<Categorylist />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/favourites" element={<FavouritesListPage />} />
        <Route path="/events" element={<ProfileEventList />}></Route>
        <Route path="/home/:id" element={<CardDetails />}></Route>
        <Route path="/comicscategorylist" element={<ComicsCategorylist />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="library" element={<Library />}>
            <Route path=":userId" element={<Content />} />
          </Route>
          <Route path="calendar" element={<Calendar />} />
          <Route path="record" element={<AudioProfile />} />
          <Route path="setting" element={<SettingForm />} />
        </Route>
        <Route path="/support" element={<ContactUS />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
