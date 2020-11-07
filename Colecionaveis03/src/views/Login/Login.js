import React, { useState } from 'react';
import { ImageBackground, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import estiloLogin from './estiloLogin';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>

            <ImageBackground style={estiloLogin.fundo} source={require('../../../assets/imagens/parede.jpg')}>            

                <View style={estiloLogin.logoContainer}>
                    <LinearGradient colors={['#FF7F50', '#FFA07A', '#FAEBD7']} style={estiloLogin.logo}>
                       <Entypo name="book" size={40} color="white" />
                    </LinearGradient> 
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="person" size={24} color="white" />
                    <TextInput
                        style={estiloLogin.campo}
                        placeholder="Login"
                        onChangeText={login => setLogin(login)}
                        value={login}
                    />
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="vpn-key" size={24} color="white" />
                    <TextInput
                        style={estiloLogin.campo}
                        placeholder="Senha"
                        onChangeText={senha => setSenha(senha)}
                        value={senha}
                    />
                </View>

                <TouchableOpacity onPress={entrar}>
                    <LinearGradient colors={['#FF7F50', '#FFA07A', '#FAEBD7']} style={estiloLogin.botaoLinearGradient}>
                        <MaterialCommunityIcons name="send" size={24} color="white" />                   
                        <Text style={estiloLogin.botaoTexto}> Entrar </Text>
                    </LinearGradient>                
                </TouchableOpacity>

            </ImageBackground>  

        </View>
    )
}

export default Login;
