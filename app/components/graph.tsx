"use client";
import {Chart as ChartJS, CategoryScale, LinearScale,
    PointElement, LineElement, Title, Tooltip, Legend
} from 'chart.js';

import { useGlobal } from '../globalState/Provider';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Graph = () => {
    const [state, dispatch] = useGlobal();

    const data = {
        labels: state.currentUser?.transactions?.map((transaction) => {
            const {date} = transaction
            return date;
        }),
        datasets: [
            {
                label: "Income",
                data: state.currentUser?.transactions?.map((transaction) => {
                    if (transaction.type === 'Income') {
                        return transaction.amount;
                    }
                }),
                backgroundColor: 'green',
            },
            {
                label: "Expense",
                data: state.currentUser?.transactions?.map((transaction) => {
                    if (transaction.type === 'Expense') {
                        return transaction.amount;
                    }
                }),
                backgroundColor: 'red',
            },
        ]
    }

    return (<div className='w-full h-[90%]'>
        <Line data={data}/>
    </div>)

}

export default Graph;