import React, { Component } from 'react';
import { Text } from 'react-native';
import { Body, Container } from '@descco/react-native-ui';

class ArticlesPage extends Component {
  render() {
    return (
      <Body>
        <Container>
          <Text style={{ textAlign: 'center', fontSize: 100, color: 'red' }}>Articles</Text>
        </Container>
      </Body>
    );
  }
}

export default ArticlesPage;
