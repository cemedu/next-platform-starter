import React from 'react';
import './style.css';
import Icons from '@/library/icons';
import Container2 from '../container/Container2';


const MyTable = ({ rows = [], cols = [] }) => {
    return (
        <Container2>
            <table>
                <thead>
                    <tr>
                        {cols.map((x) => (
                            <th key={x}>{x}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((x) => (
                        <tr key={x.id} className={x.paid && 'bg-green-600'}>

                            {cols.map((y, i) => (
                                <td key={i}>{x[y]}</td>
                            ))}
                            
                            <td>
                                <div className='flex gap-3 cp'>
                                    <span>{Icons.Home}</span>
                                    <span>{Icons.Donate}</span>
                                    <span>{Icons.Info}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container2>
    )
}

export default React.memo(MyTable);