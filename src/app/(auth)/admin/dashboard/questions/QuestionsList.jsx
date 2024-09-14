import MyTable from '@/components/tables/MyTable';
import React from 'react'

const QuestionsList = ({ data }) => {
    const rows = [...data];
    const cols = ['id', 'paid', 'category', 'author', 'title', 'answer'];
    return (
        <>
            <h1 className='text-2xl text-center'>Questions List</h1>
            <br />
            <MyTable rows={rows} cols={cols} />
        </>
    )
}

export default QuestionsList;