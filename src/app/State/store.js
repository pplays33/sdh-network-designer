// state/store.js
'use client'

import { atom } from 'recoil';

export const townCountState = atom({
  key: 'townCountState',
  default: 20,
});

export const townsState = atom({
  key: 'townsState',
  default: Array.from({ length: 20 }, () => ({ name: '', population: '', distance: '' })),
});

export const cableState = atom({
  key: 'cableState',
  default: {      
    cableType: '',
    attenuation: '',
    cableLength: '',
    spliceLoss: '',
    connectorLoss: '',
    amplifierGain: '',
    regenLength: '',
  },
});

export const calcState = atom({
  key: 'calcState',
  default: {
    phonePer100: '',
    peakLoad: '',
    internetLoad: '',
    internetAccessRate: ''
  },
});

//result states

export const LongDistanceStationLoadState = atom({
  key: 'LongDistanceStationLoadState',
  default: Array.from({ length: 20 }, () => ({ name: '', load: '' })),
});

export const TotalLoadFromSubscribersOfOneStationState = atom({
  key: 'TotalLoadFromSubscribersOfOneStationState',
  default: Array.from({ length: 20 }, () => ({ name: '', TotalLoadFromSub: '' })),
});

export const StationCommunicationCoefficientState = atom({
  key: 'StationCommunicationCoefficientState',
  default: Array.from({ length: 20 }, () => ({ name: '', percent: '' })),
});

export const InStationLoadResState = atom({
  key: 'InStationLoadResState',
  default: Array.from({ length: 20 }, () => ({ name: '', result: '' })),
});

// стор "Суммарная исходящая нагрузка от каждой станции" 
export const TotalOutgoingLoadFromEachState = atom({
  key: 'TotalOutgoingLoadFromEachState',
  default: Array.from({ length: 20 }, () => ({ name: '', result: '' })),
});