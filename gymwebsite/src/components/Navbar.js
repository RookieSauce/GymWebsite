import './Navbar.css'
import logo from './UClogo.jpeg'

function Navbar() {
     return (
    <div class="navbar">
        <div class="site-header">
            <a href="/home">
                <img src={logo} alt="U&C Logo" title="U&C Logo" class="logo" />
            </a>
            <h1> U&C Gym Companion </h1>
        </div>

        <nav className="nav"> 
            <ul className="navbar-list"> 
                <li><a href="/home">Home</a></li>
                <li class="workout-dropdown-area">
                    <a href="/home" class="workout-dropdown-button">Plan Your Workout</a>
                        <div class="workout-dropdown-content"> 
                            <a href="../workout">Log a Workout</a>
                            <a href="../workout">My Exercise History</a>
                            <a href="../workout">Exercise Preferences</a>
                        </div>
                </li>
                <li><a href="../contact">Contact Us</a></li> 
            </ul> 
        </nav>
    </div>
     )
}

export default Navbar