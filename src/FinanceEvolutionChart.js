import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import config from './config';
export default function FinanceEvolutionChart(props) {
    let { title, subTitle, data, percentageValue } = props;
    const [categories, setCategories] = useState([])
    useEffect(() => {
        if (data) {
            let categories = [];
            data.map(element => { categories.push(element.name) })
            setCategories(categories)
        }
    }, [data])

    const options = {
        chart: {
            line: {
                animation: false
            }
        },
        credits: { enabled: false },
        title: {
            text: title,
            style: {
                fontSize: '20px',
                fontFamily: 'roboto'
            },
            useHTML: Highcharts.hasBidiBug,
            opposite: true

        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: subTitle,
                style: {
                    fontSize: '18px',
                    fontFamily: 'roboto'
                },
                useHTML: Highcharts.hasBidiBug
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            useHTML: true,
            formatter: function () {
                return this.point.percentage ? `${this.point.name}<br/> <p dir='rtl'> النسبة :<b>+${this.point.percentage}%</b> </p>`
                    : this.point.name
            }
        },
        plotOptions: {
            series: {
                color: config.palette[3]
            },
            line: {
                animation: false,
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        let value = `${Highcharts.numberFormat(this.y, 0)}`;
                        return percentageValue ? `${value}%` : value;
                    }
                }
            },
        },
        series: [
            {
                "data": data
            }
        ]
    }

    return (
        <div >
            <ReactHighcharts
                config={options}
            />
        </div>
    )
}
