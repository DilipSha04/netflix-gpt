import useNowPlayingMovies from "../Hooks/useNowplayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Header from "./Header";
import MainConatainer from "./MainConatainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainConatainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
