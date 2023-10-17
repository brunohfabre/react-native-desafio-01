import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray500,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray400,
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center'
  },
  containerDone: {
    backgroundColor: colors.gray500,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray500,
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    color: colors.gray100,
    fontSize: 14,
  },
  contentDone: {
    flex: 1,
    color: colors.gray300,
    textDecorationLine: 'line-through',
    fontSize: 14,
  },
  checkbox: {
    marginLeft: 4,
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 8
  },
  checkboxChecked: {
    marginLeft: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.purpleDark,
    justifyContent: 'center',
    alignItems: 'center'
  }
})