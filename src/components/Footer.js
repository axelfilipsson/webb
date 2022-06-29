
import { FooterStyle, ContactItem, Mail, Phone, Linkedin, Github } from '../styles/FooterStyle'


function Footer() {
    return (
        <FooterStyle>

            <ContactItem>
                <Linkedin />
                <a className='footer-item' href='https://www.linkedin.com/in/axel-filipsson/'>Linkedin</a>
            </ContactItem>

            <ContactItem>
                <Phone />
                <p className='footer-item'>0760502933</p>
            </ContactItem>

            <ContactItem>
                <Mail />
                <a className='footer-item' href="mailto:me@axelfilipsson.se">me@axelfilipsson.se</a>
            </ContactItem>

            <ContactItem>
                <Github />
                <a className='footer-item' href='https://github.com/axelfilipsson'>Github</a>
            </ContactItem>
        </FooterStyle>
    )
}

export default Footer
