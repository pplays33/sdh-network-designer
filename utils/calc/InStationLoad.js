const ranges = [
    { min: 0.5, max: 0.7, result: 0.17 },
    { min: 0.7, max: 1.3, result: 0.18 },
    { min: 1.3, max: 1.5, result: 0.19 },
    { min: 1.5, max: 5, result: 0.2 },
    { min: 5, max: 6, result: 0.21},
    { min: 5, max: 6, result: 0.21 },
    { min: 6, max: 7, result: 0.22 },
    { min: 7, max: 8, result: 0.25 },
    { min: 8, max: 9, result: 0.26 },
    { min: 9, max: 10, result: 0.27 },
    { min: 10, max: 15, result: 0.3 },
    { min: 15, max: 20, result: 0.38 },
    { min: 20, max: 30, result: 0.43 },
    { min: 30, max: 40, result: 0.5 },
    { min: 40, max: 50, result: 0.55 },
    { min: 50, max: 60, result: 0.65 },
    { min: 60, max: 70, result: 0.74 },
    { min: 70, max: 80, result: 0.82 },
    { min: 80, max: 90, result: 0.85 },
    { min: 90, max: 100, result: 0.94 },
];

const calculateResult = (value) => {
    const matchingRange = ranges.find(range => value >= range.min && value < range.max);
    return matchingRange ? matchingRange.result : NaN;
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