import './Home.css'
// import {useState,useEffect} from 'react'
import image1 from '../../images/smartWatch001.png' 
const Home = () => {
    // const [image,setImage] = useState([]);
    // useEffect( ()=>{
    //    fetch('smartWatch001.png')
    //    .then(res => res.json())
    // },[])
    return (
        <div className='home-container'>
            <div className='about-review'>
                <h1>Avaiable for your environments Get up</h1>
                <p> Search all the open position on the website. Get your own personalized salary estimate. Read review on over 300+ companies   worldwide</p>
                <button>Live Demo</button>
            </div>
            <div className='product'>
                <img src= {image1} alt="" />
            </div>
        </div>
    );
};

export default Home;