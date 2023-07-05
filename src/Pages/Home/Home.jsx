import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import Separator from "../../Components/Separator/Separator";
import TrendItems from "../../Components/TrendItems/TrendItems";

function Home() {
    return ( 
        <>
        <div>
            <HomeHeader/>
        </div>

        <div>
            <Separator/>

            <TrendItems/>
            
            <Separator/>
        </div>
        </>
    );
}

export default Home;