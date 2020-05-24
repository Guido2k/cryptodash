import HighchartsConfig from './HighchartsConfig';
import React from 'react';
import {AppContext} from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import {Tile} from '../Shared/Tile';
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);


export default function(){
    return <AppContext.Consumer>
        {({historical, changeChartSelect}) => 
        <Tile>
            <ChartSelect
                defaultValue={"months"}
                onChange={e => changeChartSelect(e.target.value)}
            >
                <option value="days">Daily</option>
                <option value="weeks">Weekly</option>
                <option value="months">Monthly</option>
            </ChartSelect>
            {historical ? <ReactHighcharts config={HighchartsConfig(historical)}/>
            : <div> Retrieving Historical Data... </div>}
        </Tile>
    }
    </AppContext.Consumer>

}