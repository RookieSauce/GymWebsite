import Navbar from '../components/Navbar'

function NoPage() {
    return(
        <div>
            <Navbar />
            <h1 class="pageheader" >Error 404! Page Not Found.</h1>

            <p> <a href="/home"> Return to the homepage </a> </p>
        </div>
    )
}

export default NoPage;