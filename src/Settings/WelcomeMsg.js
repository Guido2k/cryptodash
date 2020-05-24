import React from 'react';
import {AppContext} from '../App/AppProvider';



export default function ({firstVisit}) {
    return (
        <AppContext.Consumer>
        {({firstVisit}) =>
            firstVisit ? <div>
                Sandman Solutions Presents KryptoDash.  Please select favorite coins to begin.{' '}
            </div> : null
        }
        </AppContext.Consumer>    
        
    );   
}

