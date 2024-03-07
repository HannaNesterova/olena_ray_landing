import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import Benefits from '../Benefits/Benefits';
import ShowFeedback from '../Feedbacks/ShowFeedback';
import Program from '../Program/Program';
import Examples from '../Examples/Examples';
import Footer from '../Footer/Footer';
import FixedIcon from '../FixedIcon/FixedIcon';



function MainContainer(){
    return(
        <div>
            <NavBar />
            <Header />
            <FixedIcon />
            <AboutAuthor />
            <Benefits />
            <Examples />
            <Program />
            <ShowFeedback />
            <Footer />
        </div>
    )

}

export default MainContainer;