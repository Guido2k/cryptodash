import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "./AppProvider";

const Logo = styled.div`
    font-size: 1.5em;

`

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 110px 100px;

`
const ControlButtonEl = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        color: #25fe25;
        text-shadow: 3px 3px 60px white;
     `}
     ${props => props.hidden && css`
        display: none;

     `
    }
`

function toProperCase(lower){
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}){
    return(
        <AppContext.Consumer>
            {({firstVisit, page, setPage}) => (
                <ControlButtonEl 
                    active={page === name}
                    onClick={()=> setPage(name)}
                    hidden={firstVisit && name === 'dashboard'}>
                    {toProperCase(name)}
                </ControlButtonEl>
            )}
        </AppContext.Consumer>
    )
}


export default function(){
    return(
        <Bar>
            <Logo>KryptoDash</Logo>
            <div/>
            <ControlButton active name="dashboard"/>
            <ControlButton name="settings"/>
            
        </Bar>
    )    
}

