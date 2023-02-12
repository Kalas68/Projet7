import BannerApropos from "../common/BannerApropos";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Collapse from "../components/Collapse";
import collapseArray from "../data/about.json";

function Apropos(){
    return(
        <div className="about">
            <Header/>
            <BannerApropos />
            <div className="about_collapses">
                {collapseArray.map((collapse, index) => (
                    <Collapse
                    key={collapse.header + index}
                    header={collapse.header}
                    content={collapse.description}
                    addClass="about"
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Apropos