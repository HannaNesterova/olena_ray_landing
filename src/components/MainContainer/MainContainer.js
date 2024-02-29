import AboutAuthor from "../AboutAuthor/AboutAuthor";
import AboutCourse from "../AboutCourse/AboutCourse";
import Benefits from "../Benefits/Benefits";
import ShowFeedback from "../Feedbacks/ShowFeedback";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Program from "../Program/Program";


function MainContainer(){
    return(
        <div>
            <NavBar />
            <Header />
            <AboutAuthor />
            <Benefits />

            <AboutCourse />
            <Program />
            
            <ShowFeedback />
        </div>
    )

}

export default MainContainer;