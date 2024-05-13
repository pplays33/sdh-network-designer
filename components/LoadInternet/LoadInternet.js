'use client'
import React, {useState, useEffect, use} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CalculateLoadsComponent = (citys) => {
    if (!Array.isArray(citys)) {
        console.error('citys должно быть массивом');
        return [];
    }

    return citys.map(city => ({
        ...city,
        updatedLoad: (city.population * 0.1 * 0.06).toFixed(2) + ' Эрл',
    }));
}

export default function LoadInter(){
    const [towns, setTowns] = useState([]);
    const [loadInternet, setLoadInternet] = useState([]);

    useEffect(() => {
        const LoadTowns = JSON.parse(localStorage.getItem('TownsState') || '{}');
        setLoadInternet(CalculateLoadsComponent(LoadTowns));
    },[]);

    return (

        <List dense={true}
        sx={{
            width: '100%',
            borderRadius: '20px',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 900,
            marginTop: '20px',
            marginLeft: '20px',
            marginRight: '20px',
            color: '#00000',
            '& ul': { padding: 0 },
        }}
        >
              {loadInternet.map((city, index) => (
                <ListItem>
                  <ListItemText
                    primary={city.name + ':'}
                    secondary={city.updatedLoad}
                    primaryTypographyProps={{ style: { color: 'red' } }}
                  />
                </ListItem>
              ))}
        </List>
    );
};


/*         <ul>
        {loadInternet.map((city, index) => (
            <li key={index}>
            {city.name}: {city.updatedLoad}
            </li>
        ))}
        </ul> */
