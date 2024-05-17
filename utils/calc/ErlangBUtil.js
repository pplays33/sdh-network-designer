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

const FindMinimumChannels = (A, Pb) => {
  let N = Math.floor(A);
  while (calculateErlangB(A, N) > Pb) {
    N++;
  }
  return N;
};

export default FindMinimumChannels;