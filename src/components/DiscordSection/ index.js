import React from 'react'
import { DiscordContainer, DiscH1, DiscLink, DiscWrapper } from './DiscordElements'
import {FaDiscord} from 'react-icons/fa'
const DiscordSection = ({DiscTitle, DiscordLink, img, alt}) => {
  return (
    <DiscordContainer>
       <DiscWrapper>
        <DiscH1>{DiscTitle}</DiscH1>
        <DiscLink href={DiscordLink}>
            <FaDiscord />
        </DiscLink>
      </DiscWrapper>
    </DiscordContainer>
  )
}

export default DiscordSection

