'use client'
import styles from './CableForm.module.css';

import React, { useState } from 'react';

const CableForm = ({ onSubmit }) => {
  const [cableType, setCableType] = useState('');
  const [attenuation, setAttenuation] = useState('');
  const [cableLength, setCableLength] = useState('');
  const [spliceLoss, setSpliceLoss] = useState('');
  const [connectorLoss, setConnectorLoss] = useState('');
  const [amplifierGain, setAmplifierGain] = useState('');
  const [regenLength, setRegenLength] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      cableType,
      attenuation,
      cableLength,
      spliceLoss,
      connectorLoss,
      amplifierGain,
      regenLength
    });
  };

  const handleReset = () => {
    setCableType('');
    setAttenuation('');
    setCableLength('');
    setSpliceLoss('');
    setConnectorLoss('');
    setAmplifierGain('');
    setRegenLength('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Тип кабеля"
        value={cableType}
        onChange={(e) => setCableType(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Затухание на длине волны 1550 нм (дБ/км)"
        value={attenuation}
        onChange={(e) => setAttenuation(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Конструктивная длина кабеля (КМ)"
        value={cableLength}
        onChange={(e) => setCableLength(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Потери на сростках (дБ)"
        value={spliceLoss}
        onChange={(e) => setSpliceLoss(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Затухание в оптических разъемах (дБ)"
        value={connectorLoss}
        onChange={(e) => setConnectorLoss(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Величина усиления встроенного усилителя (дБ)"
        value={amplifierGain}
        onChange={(e) => setAmplifierGain(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Длина регенерационного участка (KM)"
        value={regenLength}
        onChange={(e) => setRegenLength(e.target.value)}
        className={styles.input}
      />

      <button type="submit" className={styles.button}>Сохранить</button>
      <button type="button" onClick={handleReset} className={styles.buttonReset}>Очистить</button>
    </form>
  );
};

export default CableForm;