import { Mail, Phone, LinkedIn, GitHub} from '@material-ui/icons';


function Footer() {
    return (
        <footer >
            <LinkedIn/>
            <a className='footer-item' href='https://www.linkedin.com/in/axel-filipsson/'>Linkedin</a>
            <Phone/>
            <p className='footer-item'>0760502933</p>
            <Mail/>
            <a className='footer-item' href="mailto:me@axelfilipsson.se">me@axelfilipsson.se</a>
            <GitHub/>
            <a className='footer-item' href='https://github.com/axelfilipsson'>Github</a>
        </footer>
    )
}

export default Footer
