import { PhotoAlbum } from "react-photo-album";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import Benefits from "../Benefits/Benefits";
import ShowFeedback from "../Feedbacks/ShowFeedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Program from "../Program/Program";
import FixedIcon from "../FixedIcon/FixedIcon";
import Examples from "../Examples/Examples";
import styles from './MainContainer.module.css'


function MainContainer(){
    return(
        <div className={styles.container}>
            <NavBar />
            <Header />
            <FixedIcon />
            <AboutAuthor />
            <Benefits />
            <ShowFeedback />
            <Program />
            <PhotoAlbum />
            <Examples />
            <Footer />
        </div>
    )

}

export default MainContainer;