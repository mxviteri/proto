import { observable, action, computed, reaction } from 'mobx';
import Tasks from '../fixtures/tasks';

class RootStore {
  @observable authenticated = false;
  @observable user = {};
  @observable tasks = [];

  constructor() {
    reaction(
      () => this.user,
      () => this.getTasks()
    );
  }

  @action.bound
  authenticate(user, bool) {
    this.user = user;
    this.authenticated = bool;
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
    this.tasks.push({ name: task, complete: false, points: 0, description: '' });
  }

  @action.bound
  toggleTaskCompletion(index) {
    this.tasks[index].complete = !this.tasks[index].complete;
  }

  @action.bound
  saveProfile(profile) {
    this.user = {
      ...this.user,
      ...profile
    };
  }

  @action.bound
  saveTask(task, taskIndex) {
    this.tasks[taskIndex] = {
      ...this.tasks[taskIndex],
      ...task
    };
  }

  @computed get userName() {
    return this.user.name;
  }

  @computed get taskTotal() {
    return this.tasks
      .filter(task => task.complete)
      .reduce((accum, next) => accum + parseInt(next.points), 0);
  }
}

export default RootStore;
