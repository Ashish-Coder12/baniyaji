import React from 'react'
import Cards from '../../Components/Cards/Cards'
import { mt15, R15, Duke, ns, Mustang, Camaro, DC, Mini } from "../../Components/Data/Data";
import './Home.css'
import {BiChevronUpSquare} from 'react-icons/bi';

function Home() {
    return(
        <div className="Home">
        <div className="feature" id="feature">
            <div className="left hover"><a href="#pantry"><div className="overlay"><h1>Pantry </h1></div></a></div>
            <div className="Right">
                <div className="right-first hover "><div className="overlay"><a href="#herbal"><h1>herbal </h1></a></div></div>
                <div className="right-secound hover"><div className="overlay"><a href="#fashion"><h1>Fashion </h1></a></div></div>
            </div>
        </div>
        <div className="first" id="pantry">
            <h1>Pantry</h1>
            <div className="list">
            <Cards {...mt15}/>
            <Cards {...R15}/>
            <Cards {...Duke}/>
            <Cards {...ns}/>
            </div>
        </div>
        <div className="first" id="herbal">
            <h1>Herbal</h1>
            <div className="list">
            <Cards {...Mustang}/>
            <Cards {...Camaro}/>
            <Cards {...DC}/>
            <Cards {...Mini}/>

            </div>
        </div>
        <div className="first" id="fashion">
            <h1>Fashion</h1>
            <div className="list">
            <Cards {...Mustang}/>
            <Cards {...Camaro}/>
            <Cards {...DC}/>
            <Cards {...Mini}/>
            </div>
        </div>
        <a href="#" className="button"><BiChevronUpSquare/></a>

        </div>
    )
}
export default Home;