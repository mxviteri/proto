import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { CheckBox, List, ListItem } from 'react-native-elements';

const Container = styled.View`
  margin-top: 10;
  margin-bottom: 10;
`;

const Heading = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const TaskWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const NewTask = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10;
`;

const NewTaskInput = styled.TextInput`
  flex: 1;
  height: 35px;
  background-color: #FFFFFF;
`;

const NewTaskButton = styled.View`
  padding: 0;
`;

@inject('rootStore')
@observer
class TaskList extends Component {
  state = {
    newTask: ''
  };

  addTask = (task) => {
    if (task) {
      this.props.rootStore.addTask(task);
      this.setState({ newTask: '' });
    }
  }

  toggleTask = (taskIndex) => {
    this.props.rootStore.toggleTaskCompletion(taskIndex);
  }

  render () {
    const rootStore = this.props.rootStore;

    return (
      <Container>
        <Heading>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Task List:</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{rootStore.taskTotal}</Text>
        </Heading>
        <List>
        {
          rootStore.tasks.map((task, index) => (
            <ListItem
              key={index}
              onPress={() => this.props.navigation.navigate('Task', { taskIndex: index })}
              title={task.name} />
          ))
        }
        </List>
        <NewTask>
          <NewTaskInput
            onChangeText={(text) => this.setState({newTask: text})}
            placeholder="New Task"
            value={this.state.newTask}
          />
          <NewTaskButton>
            <Button
              onPress={() => this.addTask(this.state.newTask)}
              title="Add Task"
            />
          </NewTaskButton>
        </NewTask>
      </Container>
    )
  }
}

export default TaskList;