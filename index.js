import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import CenaClientes from './src/components/CenaClientes';

export default class ReactNativeNavigationPages extends Component{
	render(){
		return(
			<CenaClientes />
		);
	}
}

AppRegistry.registerComponent('ReactNativeNavigationPages', () => ReactNativeNavigationPages);
