export default class SpeedUpCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }

  execute() {
    this.turbine.speedUp();
  }
}
