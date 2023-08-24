import { useEffect, useState } from 'react'
import {View, Text, Image, Button} from 'react-native'

const Questao01 = () => {

    const[mudar,useMudar] = useState("../../media/tmt.jpg")
    const[flag,useFlag] = useState(false);

    useEffect(
        ()=>{
            if(mudar == "../../media/tmt.jpg"){
                useMudar("../../media/omen.png")
            }else{
                useMudar("../../media/tmt.jpg")
            }
        },
        [flag]
    )

    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Image
                source={mudar}
                style={{
                    width: 200,
                    height: 200
                }}
            />
            <Text style={{
                fontSize: 50,
                fontWeight: "bold",
            }}>Luis Guilherme Viana Fernandes</Text>
            <Text style={{
                fontSize: 40,
            }}>Canindé-CE</Text>
            <Text style={{
                fontSize: 40,
                color: "red"
            }}>8°semestre de Design Digital</Text>
            <Button 
                title="Mudar imagem"
                onPress={()=>{
                    useFlag(prev => prev = !prev)         
                }}
            />
        </View>
    )
}

export default Questao01