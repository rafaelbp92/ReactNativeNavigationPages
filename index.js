import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';


import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

const RootNavigator = StackNavigator({
  Home: {
    screen: CenaPrincipal,
    navigationOptions: {
      
    },
  },
  Clients: {
    screen: CenaClientes,
     navigationOptions: {
      
    },
  },
});

export default class ReactNativeNavigationPages extends Component {
	render() {
		const { navigation } = this.props;
		return (
			<CenaPrincipal navigation={navigation} />
		);
	}
}

AppRegistry.registerComponent('ReactNativeNavigationPages', () => RootNavigator);
