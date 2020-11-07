import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#FFE4B5	'
   },
   header: {   
      height: 50,
      backgroundColor: '#FFD700',  
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
   },
   formularioContainer: {
        flex: 1,
        justifyContent: 'center',
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
   },
   campoContainer: {
      flexDirection: 'row',
      padding: 5,
      paddingLeft: 50,
      paddingRight: 50,
      margin: 5,
      marginRight: 50,
      alignItems: 'center',
   },
   campoContainerDescricao: {
      flexDirection: 'row',
      padding: 5,
      paddingLeft: 45,
      paddingRight: 40,
      margin: 5,
   },
   campo: {
      width: '100%',
      fontSize: 18,
      color: '#FFFFFF',
      backgroundColor: '#F0E68C',
      marginLeft: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: '#FFD700',
      borderRadius: 5
   },
   campoDescricao: {
      width: '90%',
      height: 100,
      fontSize: 18,
      color: '#FFFFFF',
      backgroundColor: '#F0E68C',
      marginLeft: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: '#FFD700',
      borderRadius: 5,
      textAlignVertical: 'top',
   },
   campoDescricaoScroll: {
      width: '100%'
   },
   botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 50,
   },
   botaoContainer: {
    alignItems: 'center',
    padding: 5,
   },
   botao: {
    with: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
   },
});

export default estiloItem;