import React, { useContext, useEffect, useState } from 'react';

import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';
import Counter from '../components/Counter';

import styles from './styles';

import iconAdd from '../../assets/icons/add.png';
import iconReset from '../../assets/icons/reset.png';
import iconRemove from '../../assets/icons/remove.png';

import { randomNumber, zeroPad } from '../../utils/functions';
import { ICounter } from '../../utils/types';

import CounterContext from '../../contexts/counters';

import { useNavigation } from '@react-navigation/native';

export default function Config() {
  const [counter, setCounter] = useState<ICounter | null>(null);

  const {
    countersList,
    currentCounter,
    addCounter,
    removeCounter,
    updateCounter,
  } = useContext(CounterContext);

  const { navigate } = useNavigation();

  useEffect(() => {
    if (currentCounter) {
      setCounter(currentCounter);
    }
  }, [currentCounter]);

  const handleAddCounter = () => {
    addCounter({
      id: countersList.length + 1,
      value: zeroPad(randomNumber(), 4),
    });
    navigate('Home');
  };

  const handleRemoveCounter = () => {
    Alert.alert(
      'Excluir Contador',
      'Deseja realmente excluir este contador?',
      [
        { text: 'Cancelar', onPress: () => {} },
        {
          text: 'Sim',
          onPress: () => {
            removeCounter(counter!.id);
            navigate('Home');
          },
        },
      ],
      { cancelable: false }
    );
  };
  const handleUpdateCounter = () => {
    Alert.alert(
      'Editar Contador',
      'Deseja realmente editar este contador?',
      [
        { text: 'Cancelar', onPress: () => {} },
        {
          text: 'Sim',
          onPress: () => {
            updateCounter(counter!);
            navigate('Home');
          },
        },
      ],
      { cancelable: false }
    );
  };

  const increment = () => {
    setCounter((state: any) => {
      const value = parseInt(state.value) + 1;
      return { ...state, value: zeroPad(value, 4) };
    });
  };

  const decrement = () => {
    setCounter((state: any) => {
      const value = parseInt(state.value) - 1;
      return { ...state, value: zeroPad(value, 4) };
    });
  };

  const reset = () => {
    setCounter(currentCounter);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addCounter}>
        <Text style={styles.title}>Counters</Text>
        <View style={styles.buttonsArea}>
          <Button onPress={() => handleAddCounter()} text={'Add\nCounter'} />
          <Button
            onPress={() => handleRemoveCounter()}
            text={'Remove\nCounter'}
          />
        </View>
      </View>
      <View style={styles.counterControl}>
        <Text style={styles.title}>Selected Counter</Text>
        <View style={styles.controlArea}>
          <Counter item={counter!} active />
          <View style={styles.controls}>
            <TouchableOpacity onPress={decrement}>
              <Image style={styles.control} source={iconRemove} />
            </TouchableOpacity>

            <TouchableOpacity onPress={reset}>
              <Image style={styles.control} source={iconReset} />
            </TouchableOpacity>

            <TouchableOpacity onPress={increment}>
              <Image style={styles.control} source={iconAdd} />
            </TouchableOpacity>
          </View>
          {counter?.value !== currentCounter?.value && (
            <Button
              onPress={() => handleUpdateCounter()}
              text={'Confirm changes'}
            />
          )}
        </View>
      </View>
    </View>
  );
}
