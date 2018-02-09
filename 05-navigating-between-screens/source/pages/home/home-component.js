import React, { Component } from 'react';
import { Text } from 'react-native';
import { Body, Container, Button } from '@descco/react-native-ui';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress(){
    this.props.navigation.navigate('articles', { title: 'Artigos' });
  }

  render() {
    return (
      <Body>
        <Container>
          <Text style={{ textAlign: 'center', fontSize: 100, color: 'red' }}>Teste</Text>
          <Button onPress={this.onPress}>
            Clique
          </Button>
        </Container>
      </Body>
    );
  }
}

export default HomePage;
