import React from 'react'
import { DiscordContainer, DiscH1, DiscImg, DiscLink, DiscWrapper } from './DiscordElements'

const DiscordSection = ({DiscTitle, DiscordLink, img, alt}) => {
  return (
    <DiscordContainer>
       <DiscWrapper>
        <DiscH1>{DiscTitle}</DiscH1>
        <DiscLink href={DiscordLink}>
            <DiscImg src={img} alt={alt} />
        </DiscLink>
      </DiscWrapper>
    </DiscordContainer>
  )
}

export default DiscordSection

