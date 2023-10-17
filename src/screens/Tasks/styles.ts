import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600
  },
  header: {
    backgroundColor: colors.gray700,
  },
  headerContent: {
    padding: 24,
    paddingBottom: 68,
    alignItems: 'center'
  },
  headerLogo: {
    height: 32
  },
  content: {
    flex: 1,
    marginTop: -24,
  },
  form: {
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 24
  },
  contentData: {
    flex: 1,
  },
  contentDataHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  contentDataHeaderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})