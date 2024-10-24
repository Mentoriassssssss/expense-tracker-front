"use client";
import {Chart as ChartJS, CategoryScale, LinearScale,
    PointElement, LineElement, Title, Tooltip, Legend, Filler
} from 'chart.js';

import { useGlobal } from '../globalState/Provider';
import { GlobalState, Action } from '../globalState/Provider';

import { Line } from 'react-chartjs-2';
import GetAPI from '../getAPI/getAPI';
import TransformTransactions from '../handlingDataForGraph/transformTransactions';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
)

const Graph = () => {
    const [state,] : [GlobalState, React.Dispatch<Action>] = useGlobal();

    const transformedData = TransformTransactions();

    const data = {
        labels: Object.keys(transformedData),
        datasets: [
            {
                label: "Income",
                data: Object.keys(transformedData).map((item) => {
                    return transformedData[item].Income.reduce((a, b) => a + b, 0);
                }),
                backgroundColor: 'rgba(201, 242, 155, 0.6)',
                borderColor: 'green',
                fill: true,
                tension: 0.6,
            },
            {
                label: "Expense",
                data: Object.keys(transformedData).map((item) => {
                    return transformedData[item].Expense.reduce((a, b) => a + b, 0);
                }),
                backgroundColor: 'rgba(255, 99, 71, 0.4)',
                borderColor: 'red',
                fill: true,
                tension: 0.6,
            },
        ]
    }

    return (<div className='h-[90%] w-full flex items-center justify-center'>
        {state.key.accessKey && <GetAPI type="getAllTransactions"/>}
        <Line data={data} className='w-full h-full'/>
    </div>)

}

export default Graph;