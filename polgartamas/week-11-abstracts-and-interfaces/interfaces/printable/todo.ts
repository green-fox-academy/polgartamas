import { Printable } from './printable';

class Todo implements Printable {
  task: string;
  priority: string;
  isItDone: boolean;

  constructor(task: string, priority: string, isItDone: boolean) {
    this.task = task;
    this.priority = priority;
    this.isItDone = isItDone;
  }

  printAllFields(): void {
    console.log(
      `Task: ${this.task} | Priority: ${this.priority} | Done: ${this.isItDone}`
    );
  }
}
const newTodo = new Todo('Buy milk', 'high', true);
newTodo.printAllFields();
