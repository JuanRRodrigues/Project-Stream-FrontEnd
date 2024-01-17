import NavBar from '../../components/Header';
import MediaList from '../../components/MediaList';
import MainRecomendation from '../../components/MainRecomendation';
import InfoList from '../../components/infoList';
import SerieList from '../../components/SerieList'

const Home = () => {

        return (
          <div className="app">
            <NavBar />
            <MainRecomendation />
            <InfoList />
            <MediaList />
            <InfoList />
            <SerieList />
          </div> )


}

export default Home