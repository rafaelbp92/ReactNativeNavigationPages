import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';


const detalheEmpresa = require('../images/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#FFF'}}>
				<StatusBar 
					hidden
				/>


				<View style={styles.cabecalho}>
					<Image source={detalheEmpresa} />
					<Text style={styles.txtTitulo}>A Empresa</Text>
				</View>

				<View style={styles.detalhesEmpresa}>
					<Text>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</Text>
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
		color: '#EC7148',
		marginLeft: 10,
		marginTop: 25 
	},
	detalhesEmpresa: {
		padding: 20,
		marginTop: 20
	}
});
