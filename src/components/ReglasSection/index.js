import React from 'react'
import { ReglasContainer, ReglasWrapper, ReglasRow, Column1, TextWrapper, TopLine, Heading, Column2, ImgWrap, Img, Subtitulo } from './ReglasElements'

const ReglasSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, regla1, regla2, regla3, img, alt}) => {
  return (
    <>
    <ReglasContainer lightBg={lightBg} id={id}>
        <ReglasWrapper>
            <ReglasRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitulo darkText={darkText}>{regla1}</Subtitulo>
                    <Subtitulo darkText={darkText}>{regla2}</Subtitulo>
                    <Subtitulo darkText={darkText}>{regla3}</Subtitulo>
                </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap> 
                    <Img src={img} alt={alt}/>
                  </ImgWrap>
                </Column2>
            </ReglasRow>
        </ReglasWrapper>
    </ReglasContainer>
    </>
  )
}

export default ReglasSection
