const InStationLoadRes = (TotalLoadFromSubs, CoefsInStationMsg ) => {
    console.log(TotalLoadFromSubs);
    console.log(CoefsInStationMsg);
/*     if (!TotalLoadFromSubs || !CoefsInStationMsg || TotalLoadFromSubs.length !== CoefsInStationMsg.length) {
      console.error('Массивы должны быть непустыми и одинаковой длины!');
      return []; 
    } */
    if (!Array.isArray(TotalLoadFromSubs, CoefsInStationMsg)) {
        console.error('должны быть массивом');
        return [];
    }
  
    const resultArray = TotalLoadFromSubs.map((item, index) => {
      if (CoefsInStationMsg[index]) {
        return {
          name: item.name, 
          result: item.TotalLoadFromSub * CoefsInStationMsg[index].percent,
        };
      }
      return { name: item.name, result: NaN }; 
    });

    return resultArray;
}

export default InStationLoadRes;