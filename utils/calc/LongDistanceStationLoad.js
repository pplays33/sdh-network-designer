/* import { useRecoilState } from 'recoil';
import { townsState, LongDistanceStationLoadState } from "../../State/store";
 */

export default function LongDistanceStationLoad(towns){
    const long_distance_load_from_one_subscriber = 0.003;

    if (!Array.isArray(towns)) {
        console.error('towns должно быть массивом');
        return [];
    }

    return towns.map(town => ({
        name: town.name,
        load: long_distance_load_from_one_subscriber * parseFloat(town.population)
    }));
}