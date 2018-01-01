import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text
} from 'react-native';


import BarraNavegacao from './BarraNavegacao';

const detalhesCliente = require('../images/detalhe_cliente.png');
const cliente1 = require('../images/cliente1.png');
const cliente2 = require('../images/cliente2.png');

export default class CenaClientes extends Component {
	render() {
		return (
			<View>
				<StatusBar 
					hidden
				/>

				<BarraNavegacao />

				<View>
					<Image source={detalhesCliente} />
					<Text>Nossos Clientes</Text>
				</View>

				<View>
					<Image source={cliente1} />
					<Text>Lorem ipsum dolorem</Text>
				</View>

				<View>
					<Image source={cliente2} />
					<Text>Lorem ipsum dolorem</Text>
				</View>
				

			</View>
		);
	}
}