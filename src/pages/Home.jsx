import BannerHome from "../common/BannerHome"
import Footer from "../common/Footer"
import Header from "../common/Header"
import Logements from "../components/Logements"





function Home(){
    return(
        <div className="home">
        <Header/>
        <BannerHome />
        <Logements/>
        <Footer />
        </div>
    )
}



export default Home
