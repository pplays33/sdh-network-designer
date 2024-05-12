
export default function FromToOutLoads(cities){
      // Расчет суммы всех нагрузок за исключением текущего города i
  const totalLoad = cities.reduce((sum, city) => sum + city.result, 0);

  const loads = cities
    .map((cityI, i) => {
      return cities
        .map((cityJ, j) => {
          if (i !== j) {
            const iLoad = cityI.result;
            const jLoad = cityJ.result;
            const load = (iLoad * jLoad) / (totalLoad - iLoad);
            return {
              from: cityI.name,
              to: cityJ.name,
              load: load.toFixed(2), // Округление до двух знаков после запятой для упрощения чтения
            };
          }
          return null;
        })
        .filter((load) => load); // Убираем null значения, полученные при сравнении i и j
    })
    .flat(); // Превращаем массив массивов в одномерный массив

    return loads;
  
};
