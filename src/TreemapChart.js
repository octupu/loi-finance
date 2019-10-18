import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
ReactHighcharts.Highcharts.setOptions({
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
        '#FF9655', '#FFF263', '#6AF9C4']
})

export default function SpentColumnChart({data}) {

    const options = {
        colorAxis: {
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0],
            colorAxis: {
                min: 0,
                max: 30
            },
        },
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            data
        }],
        title: {
            text: 'Highcharts Treemap'
        }
    }

    return (
        <div  >
            <ReactHighcharts
                config={options}
            />
        </div>
    )
}
