import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const Container = styled.View`
  margin-top: 10;
  margin-bottom: 10;
`;

const Heading = styled.Text`
  font-size: 15;
  font-weight: bold;
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
    this.props.rootStore.addTask(task);
    this.setState({ newTask: '' });
  }

  render () {
    const rootStore = this.props.rootStore;

    return (
      <Container>
        <Heading>Task List:</Heading>
        {
          rootStore.tasks.map((task, index) => (
            <Text key={index}>{task}</Text>
          ))
        }
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