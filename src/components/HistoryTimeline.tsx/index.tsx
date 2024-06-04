'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { HeaderPrimary } from '../Shared/Heading';
import GitHubCalendar from 'react-github-calendar';

function HistoryTimeline() {

    const data = [
  {
    name: 'Page A',
    uv: 1000,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    amt: 2100,
  },
];
    return(
        <div className='mt-5'>
            <HeaderPrimary className="mb-4">Am I Growing?</HeaderPrimary>
            <div className='mobile:w-[350px] mobile:mx-auto'>
                <GitHubCalendar username="tennga" />
            </div>
        </div>
    )
};

export default HistoryTimeline;