import AboutCourse from "../AboutCourse/AboutCourse";
import ShowFeedback from "../Feedbacks/ShowFeedback";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";


function MainContainer(){
    return(
        <div>
            <NavBar />
            <Header />
            <AboutCourse />
            <ShowFeedback />
        </div>
    )

}

export default MainContainer;