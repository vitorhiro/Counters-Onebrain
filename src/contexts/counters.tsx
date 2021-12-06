import React, { useState } from 'react';
import { createContext } from 'react';
import { ICounter, ICountersList } from '../utils/types';
import { ICounterContext } from './types';

const CounterContext = createContext<ICounterContext>({} as ICounterContext);

export const CounterProvider: React.FC = ({ children }) => {
  const [currentCounter, setCurrentCounter] = useState<ICounter | any>();
  const [countersList, setCounterList] = useState<ICountersList | any>([]);

  const addCounter = (counter: ICounter) => {
    setCounterList((state: any) => {
      return [...state, counter];
    });
  };

  const removeCounter = (counterId: number) => {
    const counterIndex = countersList.findIndex(
      (c: ICounter) => c.id === counterId
    );

    if (counterIndex >= 0) {
      let list = [...countersList];

      list.splice(counterIndex, 1);

      setCounterList(list);
    }
  };

  const updateCounter = (counter: ICounter) => {
    const counterIndex = countersList.findIndex(
      (c: ICounter) => c.id === counter.id
    );

    if (counterIndex >= 0) {
      let list = [...countersList];
      list[counterIndex] = counter;

      setCounterList(list);
    }
  };

  return (
    <CounterContext.Provider
      value={{
        currentCounter,
        countersList,
        setCurrentCounter,
        addCounter,
        removeCounter,
        updateCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
