import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Button from '../components/Button';
import Counter from '../components/Counter';

import styles from './styles';

import CounterContext from '../../contexts/counters';

import { useNavigation } from '@react-navigation/native';
import { ICounter } from '../../utils/types';

export default function Home() {
  const [counterRef, setCounterRef] = useState<ICounter | any>(null);
  const { countersList, currentCounter } = useContext(CounterContext);
  const { navigate } = useNavigation();

  useEffect(() => {
    setCounterRef(currentCounter || countersList[0]);
  }, [currentCounter]);

  const handleRegisterCounter = () => {
    navigate('Settings');
  };

  return (
    <View style={styles.container}>
      {!countersList || countersList?.length <= 0 ? (
        <Button onPress={handleRegisterCounter} text="Create Counter" />
      ) : (
        <FlatList
          data={countersList}
          renderItem={({ item }: { item: ICounter }) => (
            <Counter item={item} active={counterRef?.id === item?.id} />
          )}
          keyExtractor={(item: any) => item.id}
        />
      )}
    </View>
  );
}
