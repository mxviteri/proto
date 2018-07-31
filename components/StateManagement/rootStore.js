import { observable, action, computed } from 'mobx';
import Tasks from '../fixtures/tasks';

class RootStore {
  @observable user = {};
  @observable tasks = [];

  constructor(user) {
    this.user = user;
    this.getTasks();
  }

  @computed get userName() {
    return this.user.name;
  }

  @computed get taskTotal() {
    return this.tasks
      .filter(task => task.complete)
      .reduce((accum, next) => accum + next.points, 0);
  }

  @action.bound
  getTasks() {
    Object.keys(Tasks).forEach(person => {
      if (this.userName === person) {
        this.tasks = Tasks[person]
      }
    });
  }

  @action.bound
  addTask(task) {
    this.tasks.push({ name: task, complete: false, points: 0 });
  }

  @action.bound
  toggleTaskCompletion(index) {
    this.tasks[index].complete = !this.tasks[index].complete;
  }
}

export default RootStore;
