import React from 'react';
import {AppContext} from '../App/AppProvider';
import styled from 'styled-components';
import PriceTile from './PriceTile';


const PriceGrid = styled.div`
    display: grid;
`

export default function () {
    return (
        <AppContext.Consumer>
            {({prices}) => (
                <PriceGrid>
                    {prices.map(price => <PriceTile price={price}/>)}
                
                
                </PriceGrid>

            )}
        
        
        </AppContext.Consumer>


    )
}



