import { TextInput, TextInputProps } from "react-native";

import { colors } from "../../styles/colors";

import { styles } from "./styles";

export function Input(props: TextInputProps) {
  return (
    <TextInput 
      {...props}
      style={styles.container} 
      placeholder="Adicione uma nova tarefa" 
      placeholderTextColor={colors.gray300}
    />
  )
}