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
			<View style={{flex: 1, backgroundColor: '#FFF'}}>
				<StatusBar 
					hidden
				/>

				<View style={styles.logo}>
					<Image source={logo} />
				</View>

				<View style={styles.menu}>
					<View style={styles.menuGrupo}>

						<TouchableHighlight
							onPress={() => {
								this.props.navigation.navigate('Clients');
							}}
						>
							<Image style={styles.menuGrupoItem} source={menuCliente} />
						</TouchableHighlight>

						<TouchableHighlight
							onPress={() => {
								this.props.navigation.navigate('Contacts');
							}}
						>
							<Image style={styles.menuGrupoItem} source={menuContato} />
						</TouchableHighlight>
					
					</View>

					<View style={styles.menuGrupo}>

						<TouchableHighlight
							onPress={() => {
								this.props.navigation.navigate('Company');
							}}
						>
							<Image style={styles.menuGrupoItem} source={menuEmpresa} />
						</TouchableHighlight>

						<TouchableHighlight
							onPress={() => {
								this.props.navigation.navigate('C_Services');
							}}
						>
							<Image style={styles.menuGrupoItem} source={menuServico} />
						</TouchableHighlight>									
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