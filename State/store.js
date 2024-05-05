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