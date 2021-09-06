import homeProgrammer from './../resources/homeProgrammer.svg';


function Home() {
    return ( 
        <div class = "grid-container"> 
        <div className = 'image' > </div> 
        <div className = 'image' > </div> 
        <div className = 'image' > </div> 
      
        <img className = 'homeProgrammer'
        src = { homeProgrammer }
        alt = "homeProgrammer" />
        </div>
    )
}

export default Home