import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: colors.gray500,
    flex: 1,
    borderRadius: 6,
    borderColor: colors.gray500,
    borderWidth: 1,
    color: colors.gray100
  }
})