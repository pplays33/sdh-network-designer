'use client'
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ErlangBCalculator = () => {
  /*   const [A, setA] = useState(1110.96); */
  const [Pb, setPb] = useState(0.01);
  const [channels, setChannels] = useState([]);
  const [loadInternet, setLoadInternet] = useState([]);

  useEffect(() => {
    const LoadDatas = JSON.parse(localStorage.getItem('loadInternet') || '{}');
    setLoadInternet(LoadDatas);
  }, []);

  useEffect(() => {
    setChannels(loadInternet.map((towns, index) => ({
      ...towns,
      result: findMinimumChannels(towns.updatedLoad, Pb),
    })));
  }, [loadInternet]);

  useEffect(() => {
    console.log(channels);
  }, [channels]);

  const factorialLn = (n) => {
    if (n === 0) return 0;
    return Math.log(n) + factorialLn(n - 1);
  };

  const calculateErlangB = (A, N) => {
    let numeratorLn = N * Math.log(A) - factorialLn(N);
    let denominatorLn = 0;
    for (let k = 0; k <= N; k++) {
      denominatorLn += Math.exp(k * Math.log(A) - factorialLn(k));
    }
    return Math.exp(numeratorLn - Math.log(denominatorLn));
  };

  const findMinimumChannels = (A, Pb) => {
    let N = Math.floor(A);
    while (calculateErlangB(A, N) > Pb) {
      N++;
    }
    return N;
  };

  const handleCalculate = () => {
    const requiredChannels = findMinimumChannels(A, Pb);
    setChannels(requiredChannels);
  };
  
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
      {channels.map((city, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={city.name + ':'}
            secondary={'Кол-во каналов:' + city.result}
            primaryTypographyProps={{ style: { color: 'red' } }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ErlangBCalculator;