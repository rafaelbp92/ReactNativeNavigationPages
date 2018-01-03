import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';


import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

const RootNavigator = StackNavigator({
  Home: {
    screen: CenaPrincipal,
    navigationOptions: {
      headerTitle: 'ATM Consultoria',
    },
  },
  Clients: {
    screen: CenaClientes,
     navigationOptions: {
      headerTitle: 'Clientes',
      headerTintColor: '#B9C941'
    },
  },
  Contacts: {
    screen: CenaContatos,
     navigationOptions: {
      headerTitle: 'Contatos',
      headerTintColor: '#61BD8C'
    },
  },
  Company: {
    screen: CenaEmpresa,
     navigationOptions: {
      headerTitle: 'Empresa',
      headerTintColor: '#EC7148'
    },
  },
  C_Services: {
    screen: CenaServicos,
     navigationOptions: {
      headerTitle: 'Serviços',
      headerTintColor: '#19D1C8'
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
