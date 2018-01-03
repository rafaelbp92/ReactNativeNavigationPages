import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';


const detalheServico = require('../images/detalhe_servico.png');

export default class CenaServicos extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#FFF'}}>
				<StatusBar 
					hidden
				/>


				<View style={styles.cabecalho}>
					<Image source={detalheServico} />
					<Text style={styles.txtTitulo}>Nossos Serviços</Text>
				</View>

				<View style={styles.detalhesServico}>
					<Text style={styles.textServico}>. Consultoria</Text>
					<Text style={styles.textServico}>. Processos</Text>
					<Text style={styles.textServico}>. Acompanhamento de Projetos</Text>
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
		color: '#19D1C8',
		marginLeft: 10,
		marginTop: 25 
	},
	detalhesServico: {
		padding: 20,
		marginTop: 20
	},
	textServico: {	
		fontSize: 18
	}
});
