/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  ListRenderItemInfo,
  ListRenderItem,
} from 'react-native';
import GoalInput from './components/GoalInput';

import GoalItem from './components/GoalItem';

export interface EnteredGoalTextState {
  text: string;
  id: string;
}

function App(): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = React.useState<boolean>(false);
  const [courseGoals, setCourseGoals] = React.useState<EnteredGoalTextState[]>(
    [],
  );

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((currentCourseGoals: EnteredGoalTextState[]) => [
      //@ts-ignore
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);

    endAddGoalHandler();
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentCourseGoals: EnteredGoalTextState[]) => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color={'#a065ec'}
        onPress={startAddGoalHandler}
      />

      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={itemData => {
            return (
              <GoalItem data={itemData.item} onDeleteItem={deleteGoalHandler} />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5,
  },
});
