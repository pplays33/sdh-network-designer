// NetworkForm.js
'use client'
import React, { useState } from 'react';
import styles from './NetworkForm.module.css';



const NetworkForm = ({ onSubmit }) => {
  const [townCount, setTownCount] = useState(3);
  const initialState = () => Array.from({ length: 3 }, () => ({ name: '', population: '', distance: '' }));
  const [towns, setTowns] = useState(initialState);

  const handleTownCountChange = (event) => {
    const newTownCount = parseInt(event.target.value, 10);
    setTownCount(newTownCount);
    setTowns(new Array(newTownCount).fill({ name: '', population: '', distance: '' }));
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    setTowns(towns => towns.map((town, i) => (
      i === index ? { ...town, [name]: value } : town
    )));
  };


  const handleAddTown = () => {
    if(townCount < 15) {
      setTownCount(townCount + 1);
      setTowns([...towns, { name: '', population: '', distance: '' }]);
    }
  };

  const handleRemoveTown = index => {
    const values = [...towns];
    values.splice(index, 1);
    setTownCount(townCount - 1);
    setTowns(values);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(towns);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.formTitle}>Конфигуратор внутризоновой сети SDH</h2>
      <div className={styles.inputRow}>
        <label htmlFor="townCount" className={styles.label}>
          Количество населённых пунктов:
        </label>
        <select
          id="townCount"
          value={townCount}
          onChange={handleTownCountChange}
          className={styles.select}
        >
          {[...Array(13).keys()].map((i) => (
            <option key={i + 3} value={i + 3}>
              {i + 3}
            </option>
          ))}
        </select>
      </div>

      {towns.slice(0, townCount).map((town, index) => (
        <div key={index} className={styles.inputRow}>
          <input
            type="text"
            placeholder="Название населённого пункта"
            name="name"
            value={town.name}
            onChange={(event) => handleInputChange(index, event)}
            className={styles.input}
          />

          <label>Численность населения:</label>
          <input
            type="number"
            placeholder="Численность"
            name="population"
            value={town.population}
            onChange={event => handleInputChange(index, event)}
            className={styles.input}
          />

          <label>Расстояние до следующего пункта (км):</label>
          <input
            type="number"
            placeholder="Расстояние"
            name="distance"
            value={town.distance}
            onChange={event => handleInputChange(index, event)}
            className={styles.input}
          />

          {index >= 3 && (
            <button
              type="button"
              onClick={() => handleRemoveTown(index)}
              className={`${styles.button} ${styles.smallButton}`}
            >
              Удалить
            </button>
          )}
        </div>
      ))}

      <div className={styles.buttonRow}>
        {townCount < 15 && (
          <button
            type="button"
            onClick={handleAddTown}
            className={styles.button}
          >
            Добавить населённый пункт
          </button>
        )}
        <button type="submit" className={styles.button}>
          Рассчитать
        </button>
      </div>
    </form>
  );
};

export default NetworkForm;