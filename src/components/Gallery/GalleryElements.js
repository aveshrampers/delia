import styled from "styled-components";


export const GalleryWrapper = styled.div`
flex-wrap: wrap;
justify-content: center;
margin: auto auto;
background: #fff;
`
export const GalleryHeading = styled.h1`
height: 80px;
line-height: 100px;
font-size: clamp(2rem, 2.5vw, 3rem);
text-align:center;
margin-bottom:24px;
margin-top: 60px;
color: #000;
`

export const GalleryImages = styled.img`

height: 200px;
width: 200px;
//max-width: 100%;
//box-shadow: inset 14px 20px 20px 20px #fdc500;
padding: 8px;
margin-bottom: 15px;
margin-inline-start: 40px;
cursor: pointer;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`