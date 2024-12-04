
import React from 'react'
import { CloseIcon, OverlayButton, OverlayCard, OverlayWrapper } from './Overlay.style'
import { FaTimes } from 'react-icons/fa'
import Button from '../clicks/button/Button'


export default function Overlay({children, contentHight, contentWidth, overlayButtonClick, closeOverlayOnClick, btnText1, btnText2, btnDisplayNo, alternatFunc}) {
  return (
    <OverlayWrapper>
      <OverlayCard contentHight={contentHight} contentWidth={contentWidth}>
     {/* close icon */}
      <CloseIcon ><span onClick={closeOverlayOnClick}><FaTimes/></span></CloseIcon>
          
          {/* Overlay content */}
          {children}

          {/* Overlay buttons */}
        <OverlayButton>
            <Button 
              btnColor={'black'}
              btnText={btnText1 ? btnText1 : 'ok'}
              btnOnClick={overlayButtonClick}
            />
            <Button 
              btnColor={'black'}
              btnText={btnText2 ? btnText2 : 'No'}
              // btnPd={'10px 20px'}
              btnPd={'5px 10px'}
              btnOnClick={alternatFunc? alternatFunc: closeOverlayOnClick}
              btnDisplay={btnDisplayNo}
            />
        </OverlayButton>
      </OverlayCard>
    </OverlayWrapper>
  )
}
