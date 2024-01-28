import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthParamsList} from '../types';

interface IAuthNavigationLinkProps {
  to: 'Signin' | 'Signup';
  linkText: string;
}

const AuthNavigationLink = ({to, linkText}: IAuthNavigationLinkProps) => {
  const authNavigation: NavigationProp<AuthParamsList> = useNavigation();

  return (
    <Text style={styles.textNote}>
      Already have an account?{' '}
      <TouchableOpacity onPress={() => authNavigation.navigate(to)}>
        <Text>{linkText}</Text>
      </TouchableOpacity>
    </Text>
  );
};

const styles = StyleSheet.create({
  textNote: {
    textAlign: 'center',
  },
});

export default AuthNavigationLink;
