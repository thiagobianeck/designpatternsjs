export default class Cockpit {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}
