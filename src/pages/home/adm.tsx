import MediaInfo from "../../components/MediaInfo"
import Teste from "../../components/teste/teste"
import NavBar from "../../components/Header"
import MainAdmin from "../../components/mainAdmin"
import V2ListMedias from "../../components/v2ListMedias"
import InfoListSeries from "../../components/infoListSeries"
const Adm = () => {

        return (
          <div className="app">
            <NavBar />
            <MainAdmin />
            <MediaInfo />
            <InfoListSeries />
            <V2ListMedias />
          </div> )


}

export default Adm