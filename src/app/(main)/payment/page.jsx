import React from 'react'
import PaymentForm from '@/components/form/PaymentForm';
import { GetSession } from '@/helper/GetSession';
import Actions from '@/actions/actions';
import EmptyState from '@/components/empty-state/EmptyState';
import PayImport from '../pricing/PayImport';
import ProductCard from './ProductCard';
import Container1 from '@/components/container/Container1';

const page = async () => {
    const token = GetSession();
    const { success, data: user, messsae, error } = await Actions.User.Info(token);

    if (!success || user?.id === '') {
        return <EmptyState msg={messsae || error} />
    };

    return (
        <Container1>
            <br />
            <br />
            <div className="grid md:grid-cols-2 gap-4 ">
                <div>
                    <div className='text-start'>
                        <span>In case arrives some problems in product / source code we can help you by the provided details. Please fill the details for further proccessing!</span>
                    </div>
                    <br />
                    <div>
                        <ProductCard />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <PaymentForm user={{ ...user, token: token }} />
                </div>
            </div>
            <PayImport />
            <br />
            <br />

        </Container1>
    )
}

export default page;    