import { PhotoAlbum } from "react-photo-album";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import AboutCourse from "../AboutCourse/AboutCourse";
import Benefits from "../Benefits/Benefits";
import ShowFeedback from "../Feedbacks/ShowFeedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Program from "../Program/Program";
import FixedIcon from "../FixedIcon/FixedIcon";


function MainContainer(){
    return(
        <div>
            <NavBar />
            <Header />
            <FixedIcon />
            <AboutAuthor />
            <Benefits />
            <ShowFeedback />
            <Program />
            <PhotoAlbum />
            <Footer />

            <AboutCourse />


        </div>
    )

}

export default MainContainer;