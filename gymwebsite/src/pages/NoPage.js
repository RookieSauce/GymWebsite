import Navbar from '../components/Navbar'

function NoPage() {
    return(
        <div>
            <Navbar />
            <h2>Error 404! Page Not Found.</h2>

            <p> <a href="/home"> Return to the homepage </a> </p>
        </div>
    )
}

export default NoPage;