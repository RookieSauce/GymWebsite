import Navbar from '../components/Navbar'
import './Homepage.css'
import '../defaultStyles.css'

function Homepage() {
    return(
        <div>
            <Navbar />
            <div>
                <h1 class="pageheader">Welcome to U&C Gym Companion!</h1>
            </div>
            <p> At U&C Gym we ensure that all of our customers have the 
                ability to make their workouts more fulfilling and easier to 
                track with our suite of useful tools. With our workout management 
                features alongside our robust community, we'll empower you to
                 perform at your best!
            </p>
        </div>
    )
}

export default Homepage