import React from 'react'
import { FaFacebook} from 'react-icons/fa'
import { ContactHeading,SocialIconLink, SocialIcons } from './ContactUsElements'
import { animateScroll as scroll } from 'react-scroll';
import { ContactContainer, ContactLinkContainer, ContactLinkItems, ContactLinkTitle, ContactLinkWrapper, ContactWrap,ContactLink } from './ContactUsElements';

const Contact = () => {
  
  return (
    <ContactContainer id="contact">
      <ContactHeading>Contact Info</ContactHeading>
      <ContactWrap>
        <ContactLinkContainer>
          <ContactLinkWrapper>
            <ContactLinkItems>
              <ContactLinkTitle>Email</ContactLinkTitle>
            <ContactLink ><span><a href="mailto:deliabruyns@gmail.com">deliabruyns@gmail.com</a></span></ContactLink>
            </ContactLinkItems>
            <ContactLinkItems>
              <ContactLinkTitle>Mobile Number</ContactLinkTitle>
                <ContactLink >+27 83 279 9774</ContactLink>
            </ContactLinkItems>
            <ContactLinkItems>
            <SocialIcons>
              <SocialIconLink href='https://facebook.com' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
              </ContactLinkItems>
          </ContactLinkWrapper>
        </ContactLinkContainer>
      </ContactWrap>
    </ContactContainer>
  )
}

export default Contact