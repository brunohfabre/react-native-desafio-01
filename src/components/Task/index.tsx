import { Text, TouchableOpacity, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign'

import { Button } from "../Button"

import { styles } from "./styles"
import { colors } from "../../styles/colors"
import { TaskType } from "../../screens/Tasks"

interface TaskProps {
  task: TaskType
  onChange: () => void
  onRemove: () => void
}

export function Task({ task, onChange, onRemove }: TaskProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={task.done ? styles.containerDone : styles.container} onPress={onChange}>
      <View style={task.done ? styles.checkboxChecked : styles.checkbox}>
        {task.done && <AntDesign name='check' color={colors.gray100} />}
      </View>

      <Text style={task.done ? styles.contentDone : styles.content}>
        {task.content}
      </Text>

      <Button onPress={onRemove} variant="ghost">
        <AntDesign name='delete' size={14} color={colors.gray300} />
      </Button>
    </TouchableOpacity>
  )
}