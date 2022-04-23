import React, { Children } from 'react';
import styled from 'styled-components';
import './ButtonNft.css'


const BtnNFT = (props) => {
    return(
        <>
            <div class="on-hoverNft">
            {props.children}
            </div>
            <div class="hidden-blockNft">
                <div className="text-hidden-blockNft">
                Coming soon
                </div>
            </div>  
        </>
    )
}
export default BtnNFT;