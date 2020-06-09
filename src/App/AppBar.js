import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "./AppProvider";
import './App.css';

//Logo Settings //

const Logo = styled.div`
    font-size: 0.9;
    
`

// Links at top right

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 400px auto 150px 150px;
    font-size: 0.8;
    @media (max-width: 790px) {
         grid-template-columns: 235px 100px 200px 170px;
         font-size: 0.8em;
    } 

    @media (max-width: 690px) {
        grid-template-columns: 200px 125px auto 120px;
        text-align: center;
        font-size: 0.8em;
   } 

    @media (max-width: 420px) {
        grid-template-columns: 115px 50px auto 100px;
        text-align: center;
        margin-right: 10px;
        font-size: 0.8em;
   }      
    
    @media (max-width: 400px) {
        grid-template-columns: 115px 40px auto 100px;
        text-align: center;
        margin-right: 5px;
        font-size: 0.7em;
   }
    @media (max-width: 380px) {
        grid-template-columns: 95px 15px 100px 100px;
        text-align: center;
        font-size: 0.7em;
    }
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
            <Logo>KryptoDash by Sandman Solutions</Logo>
            <div/>
            <ControlButton active name="dashboard"/>
            <ControlButton name="settings"/>
            
        </Bar>
    )    
}

