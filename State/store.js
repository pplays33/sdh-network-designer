// state/store.js
'use client'

import { atom } from 'recoil';

export const townCountState = atom({
  key: 'townCountState',
  default: 3,
});

export const townsState = atom({
  key: 'townsState',
  default: Array.from({ length: 3 }, () => ({ name: '', population: '', distance: '' })),
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