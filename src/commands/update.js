const {Command, flags} = require('@oclif/command');
const {Todo} = require('../db');

class UpdateCommand extends Command {
  async run() {
    const {
      flags: {id, done}
    } = this.parse(UpdateCommand);
    const res = await Todo.find(
      {id: parseInt(id, 10)}
    )
    .assign({done: done || false})
    .write();
    this.log(res);
  }
}

UpdateCommand.desciption = `Marks a task as done or undone
...
Marks a task as done or undone
`

UpdateCommand.flags = {
  id: flags.string({char: 'n', description: 'task id'}),
  done: flags.boolean({char: 'd', description: 'task done'}),
}

module.exports = UpdateCommand;
