import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: colors.blueDark,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerGhost: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  }
})