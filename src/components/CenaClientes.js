import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet
} from 'react-native';


import BarraNavegacao from './BarraNavegacao';

const logo = require('../images/logo.png');
const menuCliente = require('../images/menu_cliente.png');
const menuContato = require('../images/menu_contato.png');
const menuEmpresa = require('../images/menu_empresa.png');
const menuServico = require('../images/menu_servico.png');

export default class CenaClientes extends Component {
	render() {
		return (
			<View>
				<StatusBar 
					hidden
				/>

				<BarraNavegacao />
				

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