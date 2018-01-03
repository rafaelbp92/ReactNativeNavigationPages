import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


import BarraNavegacao from './BarraNavegacao';

const logo = require('../images/logo.png');
const menuCliente = require('../images/menu_cliente.png');
const menuContato = require('../images/menu_contato.png');
const menuEmpresa = require('../images/menu_empresa.png');
const menuServico = require('../images/menu_servico.png');

export default class CenaPrincipal extends Component {
	render() {
		return (
			<View>
				<StatusBar 
					hidden
				/>

				<BarraNavegacao />
				<View style={styles.logo}>
					<Image source={logo} />
				</View>

				<View style={styles.menu}>
					<View style={styles.menuGrupo}>

						<TouchableHighlight
							onPress = {() => {
								this.props.navigation.navigate('Clients');
							}}
						>
							<Image style={styles.menuGrupoItem} source={menuCliente} />
						</TouchableHighlight>


						<Image style={styles.menuGrupoItem} source={menuContato} />
					</View>

					<View style={styles.menuGrupo}>
						<Image style={styles.menuGrupoItem} source={menuEmpresa} />
						<Image style={styles.menuGrupoItem} source={menuServico} />
					</View>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	logo: {
		marginTop: 30,
		alignItems: 'center'
	},
	menu: {
		alignItems: 'center'
	},
	menuGrupo: {
		flexDirection: 'row'
	},
	menuGrupoItem: {
		margin: 15
	}
});