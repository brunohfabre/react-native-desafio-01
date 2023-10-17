import { Image, Text, View } from "react-native";
import ClipboardImage from '../../assets/images/clipboard.png'
import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.container}>
      <Image source={ClipboardImage} style={styles.image} />

      <Text style={styles.title}>
        Você ainda não tem tarefas cadastradas  
      </Text>

      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}