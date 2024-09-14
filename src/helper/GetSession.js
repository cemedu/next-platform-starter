import { cookies, headers } from 'next/headers';

export const GetSession = () => {
    const cookie = cookies();
    return cookie.get('token')?.value || '';
};

export const GetHeaders = async () => {

    const headersList = headers()
    const referer = headersList.get('referer')
    return referer;

}
