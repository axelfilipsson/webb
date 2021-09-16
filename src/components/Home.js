import homeProgrammer from './../resources/homeProgrammer.svg';


function Home() {
    return ( 
        <div class = "grid-container"> 
        <div className = 'image' > </div> 
        <div className = 'image' > </div> 
        <div className = 'image' > </div> 
        
        <div className = 'mobile-display' > </div>
        <div className = 'image-small' > </div>
        <div className = 'image-small' > </div>
        <div className = 'image-small' > </div> 
        <div className = 'image-small' > </div> 
      
        <img className = 'homeProgrammer'
        src = { homeProgrammer }
        alt = "homeProgrammer" />
        </div>
    )
}

export default Home