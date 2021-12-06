import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors['primary'],
    backgroundColor: colors['white'],

    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2, // Android
  },
  id: {
    fontSize: 20,
    color: colors['gray'],
    fontWeight: 'bold',
  },
  valueArea: {
    paddingTop: 40,
    alignItems: 'flex-end',
  },
  value: {
    fontSize: 60,
    color: colors['darkGray'],
    fontWeight: 'bold',
  },
});

export default styles;
