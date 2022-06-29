
import styled from 'styled-components';
import { AiFillMail, AiFillPhone, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';



export const FooterStyle = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3rem;
    justify-content: space-between;       
`


export const ContactItem = styled.span`

    margin-inline: 2rem;
    p, a{
        display: inline; 
        font-size: 20px;
        margin-left: 0.6rem;
    }
   
    a:hover {
        color: rgb(226, 167, 254);
    }   
    &:hover {
        color: rgb(226, 167, 254);
    }
`

export const Mail = styled(AiFillMail)`
    position: relative;
    top: 6px;
    font-size:26px;
`

export const Github = styled(AiFillGithub)`
    position: relative;
    top: 6px;
    font-size:26px;
`

export const Phone = styled(AiFillPhone)`
    position: relative;
    top: 3.8px;
    font-size:26px;
`

export const Linkedin = styled(AiFillLinkedin)`
    position: relative;
    top: 5px;
    font-size:26px;
`




