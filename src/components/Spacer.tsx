import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface ISpacerProps {
  children?: any;
}

const Spacer = ({children}: ISpacerProps) => (
  <View style={styles.spacer}>{children}</View>
);

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default Spacer;
