import styled from 'styled-components'

export const ContactContainer = styled.div`
  background-color: #fff;
`

export const ContactWrap = styled.div`
  padding: 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const ContactLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    //padding-top: 32px;
  }
`

export const ContactLinkWrapper = styled.div`
  display: flex;
  text-align-last:center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const ContactLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const ContactLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  inline-size:inherit;
`
export const ContactLink = styled.div`
  display: flex;
  flex-direction: row;
  align-self: self-end;
  color: #000;
  text-decoration: none;
  margin-right: 1.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled.a`
  color: #000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-self: center;
  margin-bottom: 16px;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24px;
`
export const SocialIconLink = styled.a`
  color: #3b5998;
  font-size: 24px;
`

export const ContactHeading = styled.h1`
height: 80px;
line-height: 80px;
font-size: clamp(2rem, 2.5vw, 3rem);
text-align:center;
text-justify: auto;
color: #000;
`