import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const Container = styled.View`
  width: 90%;
  flex: 1;
  align-self: center;
  margin-top: 20;
  margin-bottom: 20;
`;

const Info = styled.TextInput`
  background-color: #FFFFFF;
  margin-top: 10;
  border-radius: 10px;
`;

const SaveButton = styled.View`
  margin-top: 10;
  margin-bottom: 10;
`;

const CompleteButton = styled.View`
  margin-bottom: 10;
`;

@inject('rootStore')
@observer
class Task extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('taskName'),
    }
  };
  state = {
    name: '',
    description: '',
    points: ''
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { navigation } = this.props;
    const taskIndex = navigation.getParam('taskIndex');
    this.task = this.props.rootStore.tasks[taskIndex];
    this.taskIndex = taskIndex;
    this.props.navigation.setParams({ taskName: this.task.name });
    this.setState({
      name: this.task.name,
      description: this.task.description,
      points: this.task.points.toString()
    });
  }

  toggleTaskCompletion = () => {
    this.props.rootStore.toggleTaskCompletion(this.taskIndex);
  }

  save = () => {
    this.props.rootStore.saveTask(this.state, this.taskIndex);
  }

  render() {
    return (
      <Container>
        <Info
          onChangeText={(text) => this.setState({ name: text })}
          value={this.state.name}
        />
        <Info
          onChangeText={(text) => this.setState({ points: text })}
          value={this.state.points}
        />
        <Info
          multiline = {true}
          numberOfLines = {4}
          onChangeText={(text) => this.setState({ description: text })}
          value={this.state.description}
        />
        <SaveButton>
          <Button
            onPress={() => this.save()}
            title="Save"
          />
        </SaveButton>
        <CompleteButton>
          <Button
            color="green"
            onPress={() => this.toggleTaskCompletion()}
            title="Complete"
          />
        </CompleteButton>
      </Container>
    )
  }
};

export default Task