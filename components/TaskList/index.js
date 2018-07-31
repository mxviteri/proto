import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { CheckBox } from 'react-native-elements';

const Container = styled.View`
  margin-top: 10;
  margin-bottom: 10;
`;

const Heading = styled.View`
  flex-direction: row;
  justify-content: space-between;
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
        {
          rootStore.tasks.map((task, index) => (
            <TaskWrapper key={index}>
              <Text style={{ textAlignVertical: 'center', flex: 1 }}>{task.name}</Text>
              <Text style={{ textAlignVertical: 'center' }}>{task.points}</Text>
              <CheckBox
                center
                iconRight
                onPress={() => this.toggleTask(index)}
                onIconPress={() => this.toggleTask(index)}
                containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                checked={task.complete}
              />
            </TaskWrapper>
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