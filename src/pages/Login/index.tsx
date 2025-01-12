import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {useNavigation} from '@react-navigation/native';
import gooleImage from '../../assets/google.png';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.placeholderStyle}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.iconStyle} />
        <TextInput placeholder="Email ID" style={styles.textinput} />
      </View>
      <View style={styles.form}>
        <View style={styles.passContainer}>
          <FontAwesomeIcon icon={faLock} style={styles.iconStyle} />
          <TextInput placeholder="Password" style={styles.inputPass} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}>
          <Text>Forgot?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.titleBtn}>
        <Text style={styles.loginBtn}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>Or, login with...</Text>
      <View style={styles.socialMedia}>
        <TouchableOpacity style={styles.socialMediaBtn}>
          <Image source={gooleImage} style={styles.googleImageStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialMediaBtn}>
          <FontAwesomeIcon
            icon={faFacebook}
            color="#0047AB"
            size={38}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialMediaBtn}>
          <FontAwesomeIcon
            icon={faTwitter}
            color="#87CEEB"
            size={40}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
        <Text>Don't have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.regBtn}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 800,
    width: '100%',
  },
  titleBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#9F2B68',
    margin: 30,
    justifyContent: 'center',
    borderRadius: 10,
    color: 'white',
  },
  socialMediaBtn: {
    height: 50,
    width: 60,
    padding: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialMedia: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: 16,
  },
  image: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    resizeMode: 'cover',
  },
  textinput: {
    width: 350,
    fontWeight: 800,
    fontSize: 16,
  },
  mediaIcons: {
    alignSelf: 'center',
  },
  loginText: {textAlign: 'center', fontWeight: 400, fontSize: 16},
  loginBtn: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 700,
    fontSize: 16,
  },
  inputPass: {fontWeight: 800, fontSize: 16},
  passContainer: {display: 'flex', flexDirection: 'row'},
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1.5,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  register: {
    display: 'flex',
    flexDirection: 'row',
  },
  regBtn: {
    color: '#9F2B68',
    fontWeight: 800,
    marginLeft: 5,
  },
  googleImageStyle: {
    height: 48,
    width: 48,
  },
  iconStyle: {
    alignSelf: 'center',
  },
  placeholderStyle: {
    width: '100%',
    borderBottomWidth: 1.5,
    borderBottomColor: '#D3D3D3',
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
