import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';


import BarraNavegacao from './BarraNavegacao';

const detalhesCliente = require('../images/detalhe_cliente.png');
const cliente1 = require('../images/cliente1.png');
const cliente2 = require('../images/cliente2.png');

export default class CenaClientes extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#FFF'}}>
				<StatusBar 
					hidden
				/>


				<View style={styles.cabecalho}>
					<Image source={detalhesCliente} />
					<Text style={styles.txtTitulo}>Nossos Clientes</Text>
				</View>

				<View style={styles.detalheCliente}>
					<Image source={cliente1} />
					<Text style={styles.textDetalheCliente}>Lorem ipsum dolorem</Text>
				</View>

				<View style={styles.detalheCliente}>
					<Image source={cliente2} />
					<Text style={styles.textDetalheCliente}>Lorem ipsum dolorem</Text>
				</View>
				

			</View>
		);
	}
}

const styles = StyleSheet.create({
	cabecalho: {
		flexDirection: 'row',
		marginTop: 20 
	},
	txtTitulo: {
		fontSize: 30,
		color: '#B9C941',
		marginLeft: 10,
		marginTop: 25 
	},
	detalheCliente: {
		padding: 20,
		marginTop: 10
	},
	textDetalheCliente: {
		fontSize: 18,
		marginLeft: 20
	}
});
