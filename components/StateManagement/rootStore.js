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
    console.log("adding task:", task);
    this.tasks.push(task);
  }
}

export default RootStore;
