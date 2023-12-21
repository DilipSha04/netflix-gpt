import useNowPlayingMovies from "../Hooks/useNowplayingMovies";
import Header from "./Header";
import MainConatainer from "./MainConatainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainConatainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
