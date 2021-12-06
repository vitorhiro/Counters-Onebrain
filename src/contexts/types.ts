import { ICounter } from '../utils/types';

export interface ICounterContext {
  currentCounter: ICounter;
  countersList: Array<ICounter>[];
  setCurrentCounter: (counter: ICounter) => void;
  addCounter: (counter: ICounter) => void;
  removeCounter: (counterId: number) => void;
  updateCounter: (counter: ICounter) => void;
}
