import styled from 'styled-components'

export const ReglasContainer = styled.div`
    color: #fff;
    
    width: 100%;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#000')};

    @media screen and (max-width: 760px){
        padding: 100px 0;
    }
`

export const ReglasWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 760px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const ReglasRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 760px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col 1 col1' 'col2 col2'`)}
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 5px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.div`
    color: #01bf71;
    line-size: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    color: #000;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;


export const Subtitulo = styled.p`
    font-weight: bold;
    margin: 10px;
    max-width: 440px;
    display: block;
    margin-bottom: 25px;
    font-size: 23px;
    line-heigth: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    border: solid #0000;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%
`

export const Img = styled.img`
        width: 100%;
        margin: 0 0 10px 0;
        padding-right: 0;
    
`;
