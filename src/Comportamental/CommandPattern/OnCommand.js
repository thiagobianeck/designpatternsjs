export default class OnCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }

  execute() {
    this.turbine.on();
  }
}
