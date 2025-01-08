import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function NoPage() {
    return(
        <div>
            <Navbar />
            <h1 class="pageheader" >Error 404! Page Not Found.</h1>

            <p> <a href="/home"> Return to the homepage </a> </p>
            <Footer />
        </div>
    )
}

export default NoPage;