import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Enter your registered Email address to get link to reset your password.
      </Text>
      <View style={styles.placeholderStyle}>
        <TextInput placeholder="Email address" style={styles.textinput} />
      </View>
      <TouchableOpacity style={styles.titleBtn}>
        <Text style={styles.loginBtn}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    gap: 30,
  },
  placeholderStyle: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  iconStyle: {
    alignSelf: 'center',
  },
  textinput: {
    width: 350,
    fontWeight: 600,
    fontSize: 16,
  },
  titleBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#9F2B68',
    // marginTop: 30,
    justifyContent: 'center',
    borderRadius: 10,
    color: 'white',
  },
  loginBtn: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 700,
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
});
