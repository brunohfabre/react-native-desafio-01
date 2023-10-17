import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode
  onPress: () => void
  variant?: 'primary' | 'ghost'
}

export function Button({ children, onPress, variant = 'primary' }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={variant === 'primary' ? styles.container : styles.containerGhost} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}