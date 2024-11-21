import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Line,
    LineChart,
    ResponsiveContainer
} from 'recharts'
import React from 'react'
import Layout from './Layout/Layout'
export default function VisualInfo ({ user }) {
    const colors = ['#ead435', '#12ea43', '#45e23a', '#1a2e3a', '#123456']
    return (
        <Layout>
            <div className='container-fluid p-2 '>
                <div className='bar-chart-container shadow-md m-3'>
                    <div className='heading mx-2'>
                        <h2 className='text-2xl -translate-x-3 font-extralight mx-9 p-6'>
                            Bar chart for age of persons
                        </h2>
                    </div>
                    <div className='chart-container mx-2 w-[77vw]'>
                        <ResponsiveContainer height={400} width={'100%'}>
                            <BarChart height={400} width={500} data={user}>
                                <Bar dataKey={'age'}>
                                    {user.map((entry, inx) => {
                                        return (
                                            <Cell
                                                key={`cell-${inx}`}
                                                fill={
                                                    colors[inx % colors.length]
                                                }
                                            />
                                        )
                                    })}
                                </Bar>
                                <XAxis dataKey={'name'} />
                                <YAxis />
                                <Legend fill='#aed453' />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'lightgray'
                                    }}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='bar-chart-container shadow-md m-3'>
                    <div className='heading mx-2'>
                        <h2 className='text-2xl -translate-x-3 font-extralight mx-9 p-6'>
                            Pie chart for age of persons
                        </h2>
                    </div>
                    <div className='chart-container mx-2 w-[77vw]'>
                        <ResponsiveContainer height={400} width={'100%'}>
                            <PieChart height={400} width={500}>
                                <Pie
                                    dataKey={'age'}
                                    fill='#1e3a8a'
                                    data={user}
                                    visibility={true}
                                >
                                    {user.map((entry, inx) => {
                                        return (
                                            <Cell
                                                key={`cell-${inx}`}
                                                fill={
                                                    colors[inx % colors.length]
                                                }
                                            />
                                        )
                                    })}
                                </Pie>
                                <Legend fill='#aed453' />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'lightgray'
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='bar-chart-container shadow-md m-3'>
                    <div className='heading mx-2'>
                        <h2 className='text-2xl -translate-x-3 font-extralight mx-9 p-6'>
                            Line chart for age of persons
                        </h2>
                    </div>
                    <div className='chart-container mx-2 w-[77vw]'>
                        <ResponsiveContainer height={400} width={'100%'}>
                            <LineChart height={400} width={500} data={user}>
                                <Line
                                    dataKey={'age'}
                                    fill='#1e3a8a'
                                    data={user}
                                    visibility={true}
                                >
                                    {user.map((entry, inx) => {
                                        return (
                                            <Cell
                                                key={`cell-${inx}`}
                                                fill={
                                                    colors[inx % colors.length]
                                                }
                                            />
                                        )
                                    })}
                                </Line>
                                <XAxis dataKey={'name'} />
                                <YAxis />
                                <Legend fill='#aed453' />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'lightgray'
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
