export default class Turbine {
  constructor() {
    this.speed = 0;
    this.state = false;
  }

  on() {
    this.state = true;
    this.speed = 100;
  }

  off() {
    this.speed = 0;
    this.state = false;
  }

  speedDown() {
    if (!this.state) return;

    this.speed -= 100;
  }

  speedUp() {
    if (!this.state) return;

    this.speed += 100;
  }
}
