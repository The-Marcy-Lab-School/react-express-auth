import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


export default function PaymentChart({data}) {
    const [chartData, setChartData] = useState({
        labels: data.map((user) => user.username),
        datasets: [{
            label: 'Payment Amount',
            data: data.map((user) => user.payment_amount),
            backgroundColor: data.map((user) => user.make_payments === 'true' ? 'green' : 'red'),
            borderColor: ['black'],
            borderWidth: 2,
        }]
    })
    useEffect(() => {
        setChartData({
            labels: data.map((user) => user.username),
            datasets: [{
                label: 'Payment Amount',
                data: data.map((user) => user.payment_amount),
                backgroundColor: data.map((user) => user.make_payments === 'true' ? 'green' : 'red'),
                borderColor: ['black'],
                borderWidth: 2,
            }]
        })
    }, [data])
    console.log(chartData)
    return <Pie data={chartData}/>;
};