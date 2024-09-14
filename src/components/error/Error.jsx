import React from 'react'

const Error = ({ error }) => {
    return (
        <div className='text-center'>
            <span className='text-rose-400 text-center'>{error || "Something went to wrong!"}</span>
            <br />
        </div>
    )
}

export default Error;