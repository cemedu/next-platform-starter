import EmptyState from '@/components/empty-state/EmptyState'
import React from 'react'

const page = () => {
    return (
        <div>
            <EmptyState msg={'Payment failed!'}
                msg2={
                    'If payment deducted in any cases we will refund you within a week or two. for more details/support please contact us at zoyweb@gmail.com.'
                }
            />
        </div>
    )
}

export default page