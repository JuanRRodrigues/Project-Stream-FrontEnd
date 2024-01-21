import NavBar from '../../components/Header';
import MediaList from '../../components/MediaList';
import MainRecomendation from '../../components/MainRecomendation';
import InfoList from '../../components/infoListMovies';
import SerieList from '../../components/SerieList'
import InfoListMovies from '../../components/infoListMovies';
import InfoListSeries from '../../components/infoListSeries';
const Home = () => {

        return (
          <div className="app">
            <NavBar />
            <MainRecomendation />
            <InfoListMovies />
            <MediaList />
            <InfoListSeries />
            <SerieList />
          </div> )


}

export default Home