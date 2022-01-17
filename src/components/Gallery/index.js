import React from 'react'
import {GalleryImages, GalleryWrapper, GalleryHeading } from "./GalleryElements"

const Gallery = () =>{
return(

    <GalleryWrapper id='gallery'>
        <GalleryHeading>Gallery</GalleryHeading>
        <GalleryImages src='./images/table.jpg' onClick={() => window.open('./images/table.jpg')}/>
        <GalleryImages src='./images/bench.jpg' onClick={() => window.open('./images/bench.jpg')}/>
        <GalleryImages src='./images/tableNbench.jpg' onClick={() => window.open('./images/tableNbench.jpg')}/>
        <GalleryImages src='./images/tnB.jpg' onClick={() => window.open('./images/tnB.jpg')}/>
        
        <GalleryImages src='./images/table.jpg' onClick={() => window.open('./images/table.jpg')}/>
        <GalleryImages src='./images/bench.jpg' onClick={() => window.open('./images/bench.jpg')}/>
        <GalleryImages src='./images/tableNbench.jpg' onClick={() => window.open('./images/tableNbench.jpg')}/>
        
        <GalleryImages src='./images/table.jpg' onClick={() => window.open('./images/table.jpg')}/>
        <GalleryImages src='./images/bench.jpg' onClick={() => window.open('./images/bench.jpg')}/>
        <GalleryImages src='./images/tableNbench.jpg' onClick={() => window.open('./images/tableNbench.jpg')}/>
        <GalleryImages src='./images/table.jpg' onClick={() => window.open('./images/table.jpg')}/>
        <GalleryImages src='./images/bench.jpg' onClick={() => window.open('./images/bench.jpg')}/>
        <GalleryImages src='./images/tableNbench.jpg' onClick={() => window.open('./images/tableNbench.jpg')}/>
        
    </GalleryWrapper>
)
}

export default Gallery