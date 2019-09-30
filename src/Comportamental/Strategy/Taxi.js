import Vehicle from './Vehicle';

export default class Taxi extends Vehicle{
  constructor() {
    super();
    this._timeTaken = 5;
  }
}

