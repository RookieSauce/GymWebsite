import './Navbar.css'

function Navbar() {
     return (
    <div>
        <div class="site-header">
            <a href="/home">
                <img src="../../public/UClogo.jpeg" alt="U&C Logo" title="U&C Logo" class="logo" />
            </a>
            <h1> U&C Gym Companion </h1>
        </div>

        <nav className="navbar"> 
            <ul className="navbar-list"> 
                <li><a href="/home">Home</a></li>
                <li><a href="../plan">Plan Your Workout</a></li> 
                <li><a href="../contact">Contact Us</a></li> 
            </ul> 
        </nav>
    </div>
     )
}

export default Navbar