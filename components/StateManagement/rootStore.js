import { observable, computed } from 'mobx';

class RootStore {
  @observable user = {};

  constructor(user) {
    this.user = user;
  }

  @computed get userName() {
    return this.user.name;
  }
}

export default RootStore;
