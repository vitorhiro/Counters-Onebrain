import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['secondary'],
    padding: 20,
  },
  addCounter: {
    flex: 1,
  },
  counterControl: {
    flex: 2,
  },
  title: {
    fontSize: 24,
    color: colors['darkGray'],
    fontWeight: 'bold',
  },
  buttonsArea: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 20,
  },
  controlArea: {
    justifyContent: 'space-around',
    flex: 1,
  },
  controls: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  control: {
    width: 40,
    height: 40,
  },
});

export default styles;
