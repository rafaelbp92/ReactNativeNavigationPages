import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import BarraNavegacao from './src/components/BarraNavegacao'

export default class ReactNativeNavigationPages extends Component{
	render(){
		return(
			<BarraNavegacao />
		);
	}
}

AppRegistry.registerComponent('ReactNativeNavigationPages', () => ReactNativeNavigationPages);
