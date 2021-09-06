import projects from './../resources/projects.svg';

function Projects() {
    return (

        <div class="grid-container">
           
            <div><h1>Projekt</h1></div>
            <div class='image'></div>
            <div>
                <a href='https://www.ivl.se/projektwebbar/storsudret.html'> <h2>Dammluckan på Storsudret</h2></a>
                <p>
                Detta projekt är mitt mest ansvarfulla och komplexa hitils. Projektet går ut på att programmera en dammlucka som ska reglera vattennivån i en av IVL’s vattentestbäddar på Storsudret, Gotland. Själva regleringen i sig är inte så komplex men i och med datorns utsatta position långt bort från civilisationen så sätts höga krav på stabilitet och varnings system för när saker inte går som det ska. Programmet är skrivet Python och använder sig bland annat utav ett av Googles API'er.
                </p>
            </div>
            <img className='image' src={projects} alt="projects" />
            <div>
                <h2>Turbinator Databas</h2>
                <p>
                    På IVL så fick jag också chansen i att vara med och skapa en databas för ett av deras prestigeprojekt, nämligen “Turbinatorn”. Denna maskin ska kort sammanfattat mäta turbititet(grummlighet) i vattendrag och brunnar genom att analysera bilder med hjälp av AI. Min uppgift var att skapa en databas för att hantera all denna bild data. Utmaningen låg främst i att jag aldrig bregrep maskinens komplexitet men ändå var tvungen att kommuncera med dess utvecklare för att komma fram till ett bra ekosystem för databasen. Sedan skapade jag databasen och dess tabeller i Azure SQL Database.
                </p>
            </div>
            <div>
                <a href='https://hydroponics-website-3pevl.ondigitalocean.app/#/'> <h2>The Hydroponics project</h2></a>
                <p>
                Avdelningen för människa-datorinteraktion utlyste en internshiptjänst och jag var snabb med på att nappa. Vi kom fram till att jag skulle hjälpa till att utveckla ett verktyg för att studera och kontrollera växter som sedan skulle kunna användas i forskning inom MDI. Jag har fått mycket hjälp och suttit i nära kontakt med en av deras forskningsingenjörer och arbetet har varit mycket lärorikt och inspirerande. Det var bland annat här jag bestämde mig för att lära mig React och Front end utveckling. 
                </p>
            </div>
            <div>
                <a href='https://falksevent.se/'> <h2>Falksevent.se</h2></a>
                <p>
                För företaget Falks Event så har jag hjälpt till med att uppdatera och förenkla deras hemsida i wordpress. Utmaningen låg främst i att hantera ett för mig nytt verktyg (wordpress) och sätta mig in i hur de tidigare utvecklarna skapat hemsidan där det mesta var skrivit i PHP. 
                </p>
            </div>
            <div>
                <a href='https://almarna.org/'> <h2>Almarna.org</h2></a>
                <p>
                Almarna.org var ett jobb jag gjorde för Alternativ Stad då de skulle fira och uppmärksamma 50-årsjubilet av Almstriden. Utmaningen låg i att kommunicera med dessa väldigt kompetenta men icke IT bevandrade pensionärer för att komma fram till en bra och pedagogisk hemsida samtidigt som vi var under en ganska extrem tidspress </p>
            </div>
        </div>

    )
}

export default Projects
