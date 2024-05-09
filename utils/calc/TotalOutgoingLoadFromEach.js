const TotalOutgoingLoadFromEach = (TotalLoadFromSubs, TotalOutgoingLoad, LongDistanceLoad) => {
/*     if (!TotalLoadFromSubs || !CoefsInStationMsg || TotalLoadFromSubs.length !== CoefsInStationMsg.length) {
      console.error('Массивы должны быть непустыми и одинаковой длины!');
      return []; 
    } */
    if (!Array.isArray(TotalLoadFromSubs, TotalOutgoingLoad, LongDistanceLoad)) {
        console.error('должны быть массивом');
        return [];
    }
  
    const resultArray = TotalLoadFromSubs.map((item, index) => {
      if (TotalOutgoingLoad[index] && LongDistanceLoad[index]) {
        return {
          name: item.name, 
          result: item.TotalLoadFromSub - TotalOutgoingLoad[index].result - LongDistanceLoad[index].load,
        };
      }
      return { name: item.name, result: NaN }; 
    });

    return resultArray;
}

export default TotalOutgoingLoadFromEach;