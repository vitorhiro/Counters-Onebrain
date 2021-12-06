import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 20,
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: colors['white'],

    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  text: {
    color: colors['primary'],
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
