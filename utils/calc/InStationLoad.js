const calculateResult = (value) => {
    if (value >= 0.2 && value < 0.7) return 0.17;
    if (value >= 0.7 && value < 1.3) return 0.18;
    if (value >= 1.3 && value < 1.5) return 0.19;
    if (value >= 1.5 && value < 5) return 0.2;
    if (value >= 5 && value < 6) return 0.21;
    if (value >= 6 && value < 7) return 0.22;
    if (value >= 7 && value < 8) return 0.25;
    if (value >= 8 && value < 9) return 0.26;
    if (value >= 9 && value < 10) return 0.27;
    if (value >= 10 && value < 15) return 0.3;
    if (value >= 15 && value < 20) return 3.8;
    if (value >= 20 && value < 30) return 0.43;
    if (value >= 30 && value < 40) return 0.5;
    if (value >= 40 && value < 50) return 0.55;
    if (value >= 50 && value < 60) return 0.65;
    if (value >= 60 && value < 70) return 0.74;
    if (value >= 70 && value < 80) return 0.82;
    if (value >= 80 && value < 90) return 0.85;
    if (value >= 90 && value <= 100) return 0.94;
    return NaN; 
  };

export default function InStationLoad(towns){
    if (!Array.isArray(towns)) {
        console.error('towns должно быть массивом');
        return [];
    }


    const all_users = towns.reduce((sum, town) => {
        const population = typeof town.population === 'number' ? town.population : parseFloat(town.population);

        return sum + (!isNaN(population) ? population : 0);
    }, 0);
    console.log(all_users);

    const station_weight_coefficients = towns.map(town => ({
        name: town.name,
        percent: (town.population / all_users * 100).toFixed(2)
    }));
    console.log(station_weight_coefficients);

    const in_stations_load_msg = station_weight_coefficients.map(town => ({
        name: town.name,
        percent: calculateResult(town.percent).toFixed(2)
    }));

    return in_stations_load_msg;
}