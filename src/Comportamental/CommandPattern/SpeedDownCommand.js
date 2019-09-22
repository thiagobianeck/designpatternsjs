export default class SpeedDownCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }

  execute() {
    this.turbine.speedDown();
  }
}
