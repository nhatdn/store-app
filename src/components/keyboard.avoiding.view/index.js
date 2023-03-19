import React from 'react';
import {
  View,
  KeyboardAvoidingView as AvoidView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export const KeyboardAvoidingView = ({children}) => {
  return (
    <AvoidView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
            {children}
        </View>
      </TouchableWithoutFeedback>
    </AvoidView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

