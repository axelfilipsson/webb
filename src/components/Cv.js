import React from 'react'

const SideBar = () => (
       <div className='side-bar'>
           <ul>
            <li> <h2>Kompetenser</h2></li>
            <li>Javascript</li>
            <li>React</li>  
            <li>Figma</li>
            <li>Dart & Flutter</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Bash</li>
            <li>Python</li>
            <li>Photoshop</li>
            <li>Wordpress</li>
            <li>GIT</li>
            <br/>
            <li> <h2>Egenskaper </h2> </li>
            <li> Kreativ</li>
            <li> Positiv</li>
            <li>Engagerad</li>
            <li> Social</li>
            <br/>
            <li> <h2>Övriga meriter</h2> </li>
            <li>Volontärarbe som engelskalärare i Phang Nga, Thailand.</li>
            <li> B-körkort</li>
            <li>Har skrivit och producerat två album</li>
            <br/>
            <li> <h2>Intressen</h2> </li>
            <li> Musik</li>
            <li> Styrketräning</li>
            <li>  Meditation</li>
          
           </ul>
       </div>
)

const WorkExperience = () => (
         <ul className='cv-list'>
                <li> <h2>Arbetslivserfarenhet</h2></li>
                <div className='cv-item'>
                    <li> <h3>Utvecklare</h3></li>
                    <li><h4>IVL Svenska Miljöinstitutet. </h4></li>
                    <li><h5>Arbetade för första gången som renodlad utvecklare under sommaren, med förlängning som timanställd under hösten. Fokus på arbetet är att programmera en dammlucka till en testbädd på Gotland, samt att skapa en databas som ska lagra bilddata för ett av IVLs prestigeprojekt.</h5></li>
                    <br/>
                </div>
                <div className='cv-item'>
                    <li> <h3>Internship</h3></li>
                    <li><h4>Avdelningen för människa-datorinteraktion, Göteborgs Universitet.</h4></li>
                    <li><h5>Utvecklar tillsammans med ett forskarlag ett verktyg för att studera och kontrollera växter. Verktyget ska sedan kunna användas i forskning inom MDI. </h5></li>
                    <br/>
                </div>
                <div className='cv-item'>
                    <li> <h3>Servitör</h3></li>
                    <li><h4>Dimattina's Resturant. Melbourne, Australien.</h4></li>
                    <br/>
                </div>
                <div className='cv-item'>
                    <li> <h3>Eventvärd och instruktör</h3></li>
                    <li><h4>Falks Event.</h4></li>
                    <li><h5>Ansvar för grupper vid äventyrsaktiviteter för såväl privatpersoner som företag. Grupperna består av både vuxna och barn.</h5></li> 
                </div>
            </ul>
)

const Education = () => (
    <ul className='cv-list'>
        <div className='cv-item'>
            <li> <h2>Utbildning</h2></li>
            <li> <h3>Data och systemvetenskap</h3></li>
            <li><h4>Kandidatprogram, Stockholms Universitet. </h4></li>
            <br/>
        </div>
            <div className='cv-item'>
            <li> <h3>Systemvetenskap</h3></li>
            <li><h4>Kandidatprogram, Göteborgs Universitet.</h4></li>
            <br/>
        </div>
        <div className='cv-item'>
            <li> <h3>Ekonomi</h3></li>
            <li><h4>Jensen Gymnasium Norra, Stockholm.</h4></li>
            <br/>
        </div>
    </ul>
)

function Cv() {
    return (
        <div className='cv'>
   
            <div class="center-bar">
                <div class="cv-center"><h3>Musikälskande data & systemvetenskapsstudent som gillar att lösa problem på ett systematiskt och kreativt sätt. Arbetar gärna med användbarhet där jag får använda mina sociala och lösningsorienterade egenskaper</h3></div>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <WorkExperience/>
                <br/><br/>
                <Education/>
            </div>
            <SideBar/>
        </div>
    )
}

export default Cv
