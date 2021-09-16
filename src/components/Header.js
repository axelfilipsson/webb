import {Link } from "react-router-dom"



function Header() {
    return (
        <header >
            <div >
                <Link class="logo" to="/">Axel Filipsson</Link>
                <div class="header-right">
                <Link class="menu" to="about">Om mig</Link>
                <Link class="menu" to="projects">Projekt</Link>
                {/* <Link class="menu" to="contact">Kontakt</Link> */}
                {/* <Link class="menu" to="cv">CV</Link> */}
                {/* <a class="menu" href='https://drive.google.com/file/d/1TH2UFDDMtLRN_oy4vuFWvejLWRDS23Ao/view?usp=sharing' >CV</a> */}
                </div>
            </div>
        </header>
    )
}

export default Header
