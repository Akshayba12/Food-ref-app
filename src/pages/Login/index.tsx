import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons/faGooglePlus';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="@ Email ID" style={styles.textinput} />
      <View style={styles.form}>
        <View style={styles.passContainer}>
          <FontAwesomeIcon icon={faLock} style={{alignSelf: 'center'}} />
          <TextInput placeholder="Password" style={styles.inputPass} />
        </View>
        <TouchableOpacity>
          <Text>Forgot?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.titleBtn}>
        <Text style={styles.loginBtn}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>Or, login with...</Text>
      <View style={styles.socialMedia}>
        <TouchableOpacity style={styles.OptionBtn}>
          <FontAwesomeIcon
            color="blue"
            icon={faGooglePlus}
            size={30}
            style={styles.mediaIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.OptionBtn}>
          <FontAwesomeIcon
            color="blue"
            icon={faFacebook}
            style={styles.mediaIcons}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.OptionBtn}>
          <FontAwesomeIcon
            color="blue"
            icon={faTwitter}
            style={styles.mediaIcons}
            size={30}
          />
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
  OptionBtn: {
    width: '25%',
    margin: 20,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    // elevation: 1.5,
    borderRadius: 10,
  },
  socialMedia: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    resizeMode: 'cover',
  },
  textinput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: 350,
    marginTop: 20,
    fontWeight: 800,
  },
  mediaIcons: {
    alignSelf: 'center',
  },
  loginText: {textAlign: 'center'},
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
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
