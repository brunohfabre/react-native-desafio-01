import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 48,
    borderTopWidth: 1,
    borderColor: colors.gray400
  },
  image: {
    height: 56,
    marginBottom: 16
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.gray300,
    fontWeight: 'bold'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.gray300,
  }
})