const items = [
    {
        name: 'Плата SSW',
        quantity: 0,
        price: 78300,
    },
    {
        name: 'Плата CU',
        quantity: 0,
        price: 33990,
    },
    {
        name: 'Плата SPIU',
        quantity: 0,
        price: 15021,
    },
    {
        name: 'Плата SU',
        quantity: 0,
        price: 22080,
    },
    {
        name: 'STM-1',
        quantity: 0,
        price: 8736,
    },
    {
        name: 'Плата 2MTA',
        quantity: 0,
        price: 45234,
    },
    {
        name: 'Плата 2M',
        quantity: 1,
        price: 30982,
    }
];

import CapitalCoast from "../../../components/CapitalCoast/CapitalCoast";

const CapitalCoastPage = () => {
    return <CapitalCoast items={items} />;
};

export default CapitalCoastPage;