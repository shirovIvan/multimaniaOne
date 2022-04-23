import React, { Children } from 'react';
import styled from 'styled-components';
import './ButtonFree.css'


const BtnFree = (props) => {
    return(
        <>
            <div class="on-hoverFree">
            {props.children}
            </div>
            <div class="hidden-blockFree">
                <div className="text-hidden-blockFree">
                Coming soon
                </div>
            </div>  
        </>
    )
}
export default BtnFree;