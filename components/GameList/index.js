import React, {Component} from 'react';
import {Text, Button} from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import TaskList from '../TaskList';
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
@inject('rootStore')
@observer
class GameList extends Component {
	updateTasks=(game)=>{
		this.props.rootStore.getTasks(game.name);
	}
	render(){
		const rootStore = this.props.rootStore;
		return (
			<Container>
				<Heading>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Game List:</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{rootStore.gameTotal}</Text>
        </Heading>
				<List>
        {
          rootStore.games.map((game, index) => (
            <ListItem
              key={index}
              onPress={() => {
								this.updateTasks(game)
								this.props.navigation.navigate('TaskList', { gameIndex: index })
							}}
              title={game.name} />
          ))
        }
        </List>
			</Container>
		)
			
	}
}

export default GameList;