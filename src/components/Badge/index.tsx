import { Text, View } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}