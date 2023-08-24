import { StyleSheet, Text, View } from 'react-native';
import Questao01 from './components/tarefa01/Questao01';
import Questao03 from './components/tarefa01/Questao03';

export default function App() {
  return (
    <View style={{ 
        flex: 1,
        backgroundColor: "#c0c0c0"
      }}>
      <Questao01/>
      <Questao03 cor={"purple"}/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
