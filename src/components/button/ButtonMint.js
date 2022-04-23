import React, { Children } from 'react';
import styled from 'styled-components';
import './buttonMint.css'


const BtnMint = (props) => {
    return(
        <>
            <div class="on-hover">
                {props.children}
            </div>
            <div class="hidden-block">
                <div className="text-hidden-block">
                Coming soon
                </div>
            </div>  
        </>
    )
}
export default BtnMint;