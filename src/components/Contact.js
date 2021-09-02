import contact from './../resources/contact.svg';

function Contact() {
    return (
        <div class="grid-container">
            <div className='image'></div>
            <div className='image'></div>
            <div className='image'></div>
            <div className='image'></div>

            <div>
                <img className='image' src={contact} alt="contact" />
            </div>

            <div>
                <h1>Kontakt</h1>
                <ul>
                    <li className='contact-list'>Tel: 0760502933</li>
                    <li className='contact-list'>Mail: me@axelfilipsson.com</li>
                    <li className='contact-list'>Linkedin: linkedin.com/in/axel-filipsson</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
