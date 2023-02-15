import * as React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {EnteredGoalTextState} from '../App';

const GoalItem = ({
  data,
  onDeleteItem,
}: {
  data: EnteredGoalTextState;
  onDeleteItem: (id: string) => void;
}) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#216044'}}
        onPress={onDeleteItem.bind(this, data.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{data.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
