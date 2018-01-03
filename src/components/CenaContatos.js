import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';


const detalheContato = require('../images/detalhe_contato.png');

export default class CenaContatos extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#FFF'}}>
				<StatusBar 
					hidden
				/>


				<View style={styles.cabecalho}>
					<Image source={detalheContato} />
					<Text style={styles.txtTitulo}>Contatos</Text>
				</View>

				<View style={styles.detalheContatos}>
					<Text style={styles.textDetalheContato}>TEL: (84)2020-1885</Text>
					<Text style={styles.textDetalheContato}>CEL: (84)98118-0663</Text>
					<Text style={styles.textDetalheContato}>EMAIL: rafaelbp92@gmail.com</Text>
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
		color: '#61BD8C',
		marginLeft: 10,
		marginTop: 25 
	},
	detalheContatos: {
		padding: 20,
		marginTop: 20
	},
	textDetalheContato: {
		fontSize: 18,
		marginLeft: 20
	}
});
