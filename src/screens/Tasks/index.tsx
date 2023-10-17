import { useState } from "react";
import { Alert, FlatList, Image, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { Badge } from "../../components/Badge";
import { Empty } from "../../components/Empty";
import LogoImage from '../../assets/images/logo.png'
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import AntDesign from '@expo/vector-icons/AntDesign'
import { colors } from "../../styles/colors";

export type TaskType = {
  content: string
  done: boolean
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [taskInputValue, setTaskInputValue] = useState('')

  const tasksCreated = tasks.length
  const tasksDone = tasks.filter(item => item.done).length

  function handleAddTask() {
    const newTask = {
      content: taskInputValue,
      done: false
    }

    setTasks(prevState => [...prevState, newTask])
    setTaskInputValue('')
  }

  function handleChangeTask(taskIndex: number) {
    setTasks(prevState => prevState.map((task, index) => index === taskIndex ? { content: task.content, done: !task.done } : task))
  }

  function handleRemoveTask(taskIndex: number) {
    Alert.alert('Remover tarefa', 'Deseja realmente remover essa tarefa?', [
      {
        text: 'Sim, remover',
        style: 'destructive',
        onPress: () => setTasks(prevState => prevState.filter((_, index) => index !== taskIndex))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView>
          <View style={styles.headerContent}>
            <Image source={LogoImage} style={styles.headerLogo} />
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <Input value={taskInputValue} onChangeText={setTaskInputValue} />
          <Button onPress={handleAddTask}>
            <AntDesign name='pluscircleo' size={16} color='white' />
          </Button>
        </View>

        <View style={styles.contentData}>
          <View style={styles.contentDataHeader}>
            <View style={styles.contentDataHeaderItem}>
              <Text style={{ ...styles.itemTitle, color: colors.blue }}>
                Criadas
              </Text>

              <Badge>{tasksCreated}</Badge>
            </View>

            <View style={styles.contentDataHeaderItem}>
              <Text style={{ ...styles.itemTitle, color: colors.purple }}>
                Concluídas
              </Text>

              <Badge>{tasksDone}</Badge>
            </View>
          </View>

          <FlatList
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingBottom: 64,
              gap: 8
            }}
            data={tasks}
            keyExtractor={(item) => item.content}
            renderItem={({ item, index }) => <Task task={item} onChange={() => handleChangeTask(index)} onRemove={() => handleRemoveTask(index)} />}
            ListEmptyComponent={<Empty />}
          />
        </View>
      </View>
    </View>
  )
}