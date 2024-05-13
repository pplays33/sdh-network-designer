'use client'
import { useState } from 'react';

const ErlangBCalculator = () => {
  const [A, setA] = useState(1110.96); // Начальное значение интенсивности трафика
  const [Pb, setPb] = useState(0.01); // Начальное значение вероятности блокировки
  const [channels, setChannels] = useState(0);

  const factorial = (n) => {
    if (n === 0) return 1;
    let product = 1;
    for (let i = 1; i <= n; i++) {
      product *= i;
    }
    return product;
  };

  const calculateErlangB = (A, N) => {
    let numerator = Math.pow(A, N) / factorial(N);
    let sum = 0;
    for (let i = 0; i <= N; i++) {
      sum += Math.pow(A, i) / factorial(i);
    }
    return numerator / sum;
  };

  const findChannels = () => {
    let N = Math.floor(A); // Начальное предположение
    while (calculateErlangB(A, N) > Pb) N++;
    return N;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Erlang B Calculator</h2>
      <input
        type="number"
        value={A}
        onChange={(e) => setA(parseFloat(e.target.value))}
        placeholder="Введите интенсивность трафика (A)"
      />
      <input
        type="number"
        value={Pb}
        onChange={(e) => setPb(parseFloat(e.target.value))}
        placeholder="Введите вероятность блокировки (Pb)"
      />
      <button onClick={() => setChannels(findChannels())}>Calculate</button>
      <p>Необходимое количество каналов: {channels}</p>
    </div>
  );
};

export default ErlangBCalculator;