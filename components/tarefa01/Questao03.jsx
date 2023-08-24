import {View, Text} from 'react-native'

const Questao03 = ({cor}) => {
    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                color: cor,
                fontSize: 40,
            }}>Comunicação Visual</Text>
            <Text style={{
                color: cor,
                fontSize: 40,
            }}>LMS</Text>
            <Text style={{
                color: cor,
                fontSize: 40,
            }}>Modelagem 3D</Text>
            <Text style={{
                color: cor,
                fontSize: 40,
            }}>Topicos especiais em artes</Text>
        </View>
    )
}

export default Questao03