import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthParamsList} from '../types';

interface IAuthNavigationLinkProps {
  to: 'Signin' | 'Signup';
  linkText: string;
}

const AuthNavigationLink = ({to, linkText}: IAuthNavigationLinkProps) => {
  const authNavigation: NavigationProp<AuthParamsList> = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.textNote}>
        {to === 'Signin'
          ? 'Already have an account?'
          : "Don't have an account?"}{' '}
      </Text>
      <TouchableOpacity
        onPress={() => authNavigation.navigate(to)}
        style={styles.tOpacity}>
        <Text>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textNote: {
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
  tOpacity: {
    marginLeft: 5,
  },
});

export default AuthNavigationLink;
