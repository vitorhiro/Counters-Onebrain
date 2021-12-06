import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CounterContext from '../../../contexts/counters';
import { ICounter } from '../../../utils/types';
import styles from './styles';

export default function Counter({
  item,
  active = false,
}: {
  item: ICounter;
  active: boolean;
}) {
  const { setCurrentCounter } = useContext(CounterContext);

  const { navigate } = useNavigation();

  const handleRegisterCounter = async (item: ICounter) => {
    setCurrentCounter(item);
    navigate('Settings');
  };
  return (
    <View
      style={[
        styles.container,
        {
          opacity: active ? 1 : 0.7,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => handleRegisterCounter(item)}
        style={styles.button}
      >
        <View>
          <Text style={styles.id}>Counter {item?.id}</Text>
        </View>
        <View style={styles.valueArea}>
          <Text style={styles.value}>{item?.value}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
