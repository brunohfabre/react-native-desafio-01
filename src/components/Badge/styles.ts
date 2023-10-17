import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: colors.gray400,
    borderRadius: 16
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.gray200
  }
})