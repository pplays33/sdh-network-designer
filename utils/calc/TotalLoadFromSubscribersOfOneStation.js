

export default function TotalLoadFromSubscribersOfOneStation(towns){
    const Avg_number_calls = 2;
    const Avg_call_duration = 80;

    if (!Array.isArray(towns)) {
        console.error('towns должно быть массивом');
        return [];
    }

    return towns.map(town => ({
        name: town.name,
        TotalLoadFromSub: (Avg_number_calls * Avg_call_duration * parseFloat(town.population))/3600
    }));
}