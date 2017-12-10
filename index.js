import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';

export default class ReactNativeNavigationPages extends Component{
	render(){
		return(
			<CenaPrincipal />
		);
	}
}

AppRegistry.registerComponent('ReactNativeNavigationPages', () => ReactNativeNavigationPages);
