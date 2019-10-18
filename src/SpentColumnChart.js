import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
ReactHighcharts.Highcharts.setOptions({
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
        '#FF9655', '#FFF263', '#6AF9C4']
})

export default function SpentColumnChart(props) {

    let { data, axis, title, stackingChart, legend, colorByPoint, tooltip, type } = props;
    let stacking = stackingChart ? { stacking: 'normal' } : null
    const options = {
        chart: {
            type: type,
        },
        credits: { enabled: false },

        title: {
            text: title,
            style: {
                fontSize: '18px',
                fontFamily: 'roboto'
            },
        },
        legend: {
            enabled: legend,
        },
        xAxis: {
            categories: data.categories,
            labels: {
                style: {
                    fontFamily: 'roboto',
                    fontSize: '18px'
                }
            }

        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: axis,
                style: {
                    fontSize: '20px',
                    fontFamily: 'roboto'
                },
            },
        },

        tooltip: {
            useHTML: true,
            formatter: function () {
                return `<b>${tooltip[0] === 'category' ? this.point[tooltip[0]]
                    : (tooltip[0] === 'name' ? this.series[tooltip[0]] : data.series[0].data[this.point.index][2])}</b> 
                <p dir='auto'> ${tooltip[1] !== null ? tooltip[1] : ''} <b>${this.y}</b> </p>
                <p dir='auto'>${tooltip[2] !== null ? tooltip[2] : ''}<b> ${Number(this.point.percentage).toFixed(2)}  </b> </p> 
                `
            }
        },

        plotOptions: {
            bar: {
                stacking,
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return `${this.series[tooltip[0]] ? this.series[tooltip[0]] : data.series[0].data[this.point.index][2]}`
                    },
                    style: {
                        color: 'black',
                        textOutline: '0'
                    }
                },
                colorByPoint: colorByPoint
            },
            column: {
                stacking,
                dataLabels: {
                    enabled: true,
                },
                colorByPoint: colorByPoint
            },
        },

        series: data.series

    }

    return (
        <div  >
            <ReactHighcharts
                config={options}
            />
        </div>
    )
}
