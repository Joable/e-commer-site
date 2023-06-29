import HomeHeader from "../../Components/HomeHeader/HomeHeader";

function Home() {
    return ( 
        <>
        <header style={{"width":"100%", "height":"100%"}}>
            <HomeHeader/>
        </header>

        <body>
            <h2>
                Body content
            </h2>
        </body>

        <footer>
            <h2>
                Footer content
            </h2>
        </footer>
        </>
    );
}

export default Home;