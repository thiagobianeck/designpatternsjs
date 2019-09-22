export default class OffCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }

  execute() {
    this.turbine.off();
  }
}
