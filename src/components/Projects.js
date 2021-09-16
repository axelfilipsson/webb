import projects from './../resources/projects.svg';

function Projects() {
    return (

        <div class="grid-container">
           
            <div><h1 className='head-text' >Projekt</h1></div>
            <div class='image'></div>
            <div><h2>Sen jag började intressera mig för webbutveckling, UX och programmering så har jag tagit på mig flera uppdrag. Här har jag samlat några av dem. </h2></div>  
            {/* <img className='image' src={projects} alt="projects" /> */}
            <div>
                <a href='https://almarna.org/'> <h2>Almarna.org</h2></a>
                <p>
                Almarna.org var ett jobb jag gjorde för Alternativ Stad då de skulle fira och uppmärksamma 50-årsjubilet av Almstriden. Utmaningen låg i att kommunicera med dessa väldigt kompetenta men icke IT bevandrade pensionärer för att komma fram till en bra och pedagogisk hemsida samtidigt som vi var under en ganska extrem tidspress. Hemsidan är skapad i Squarespace </p>
            </div>
            <div>
                <a href='https://www.ivl.se/projektwebbar/storsudret.html'> <h2>Dammluckan på Storsudret</h2></a>
                <p>
                Detta projekt är mitt mest ansvarfulla och komplexa hitils. Projektet går ut på att programmera en dammlucka som ska reglera vattennivån i en av IVL’s vattentestbäddar på Storsudret, Gotland. I och med datorns utsatta position långt bort från civilisationen så sätts höga krav på stabilitet och varnings system för när saker inte går som det ska. Programmet är skrivet Python och använder sig bland annat utav ett av Googles API'er.
                </p>
            </div>
            <div>
                <h2>Turbinator Databas</h2>
                <p>
                    På IVL så fick jag också chansen i att vara med och skapa en databas för ett av deras prestigeprojekt, nämligen “Turbinatorn”. Denna maskin ska kort sammanfattat mäta turbititet(grummlighet) i vattendrag och brunnar genom att analysera bilder med hjälp av AI. Min uppgift var att skapa en databas för att hantera all denna bild data. Utmaningen låg främst i att jag aldrig bregrep maskinens komplexitet men ändå var tvungen att kommuncera med dess utvecklare för att komma fram till ett bra ekosystem för databasen. Sedan skapade jag databasen och dess tabeller i Azure SQL Database.
                </p>
            </div>
            <div>
                <a href='https://hydroponics-website-3pevl.ondigitalocean.app/#/'> <h2>The Hydroponics project</h2></a>
                <p>
                Avdelningen för människa-datorinteraktion utlyste en internshiptjänst och jag var snabb med på att nappa. Vi kom fram till att jag skulle hjälpa till att utveckla ett verktyg för att studera och kontrollera växter som sedan skulle kunna användas i forskning inom MDI. Jag har fått mycket hjälp och suttit i nära kontakt med en av deras forskningsingenjörer och arbetet har varit mycket lärorikt och inspirerande. Hemsidan är skapad i React JS, apiet i Node.js, databasen i MongoDB och bilderna lagras i AWS. 
                </p>
            </div>
           
            <div>
                <a href='https://falksevent.se/'> <h2>Falksevent.se</h2></a>
                <p>
                För företaget Falks Event så har jag hjälpt till med att uppdatera och förenkla deras hemsida i wordpress. Utmaningen låg främst i att hantera ett för mig nytt verktyg (wordpress) och sätta mig in i hur de tidigare utvecklarna skapat hemsidan där det mesta var skrivit i PHP. 
                </p>
            </div>
            <div>
                <a href='https://malaropadel.vercel.app/'> <h2>Mälaröpadel.com</h2></a>
                <p>Åt min lokala padelbana så skapar jag en hemsida som fortfarande är under utveckling. Hemsidan är skapad i React JS vilket denna hemsida som du befinner dig på just nu också är.</p>
            </div>
            <div>
                <a href='https://friendtoafamily.com/'> <h2>Friendtoafamily.com</h2></a>
                <p>Min kompis som är kläddesigner bad mig assistera honom i att utveckla hans webbshop med arkitektur och design. Hemsidan är skapad i Wix och är fortfarande under utveckling.</p>
            </div>
        </div>

    )
}

export default Projects
