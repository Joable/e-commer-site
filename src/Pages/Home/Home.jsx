import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import TrendItems from "../../Components/TrendItems/TrendItems";

function Home() {
    return ( 
        <>
        <header>
            <HomeHeader/>
        </header>

        <body>
            <h2>
                Body content
            </h2>
            <TrendItems/>
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