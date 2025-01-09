import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import bannerImage from '../../assets/bannerimg.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faEnvelope,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import gooleImage from '../../assets/google.png';

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerImageContainer}>
        <Image style={styles.imageStyle} source={bannerImage} />
      </View>
      <View style={styles.socialMedia}>
        <TouchableOpacity style={styles.socialMediaBtn}>
          <Image source={gooleImage} style={styles.googleImageStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialMediaBtn}>
          <FontAwesomeIcon
            icon={faFacebook}
            color="#0047AB"
            size={30}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialMediaBtn}>
          <FontAwesomeIcon
            icon={faTwitter}
            color="#87CEEB"
            size={30}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.emailText}>or, register with email...</Text>
      <View style={styles.inputContainerStyle}>
        <View style={styles.placeholderStyle}>
          <FontAwesomeIcon icon={faUser} style={styles.iconStyle} />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="gray"
            style={styles.textinputStyle}
          />
        </View>
        <View style={styles.placeholderStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={styles.iconStyle} />
          <TextInput placeholder="Email ID" style={styles.textinputStyle} />
        </View>
        <View style={styles.placeholderStyle}>
          <FontAwesomeIcon icon={faLock} style={styles.iconStyle} />
          <TextInput placeholder="Password" style={styles.textinputStyle} />
        </View>
        <View style={styles.placeholderStyle}>
          <FontAwesomeIcon icon={faLock} style={styles.iconStyle} />
          <TextInput
            placeholder="Confirm Password"
            style={styles.textinputStyle}
          />
        </View>
        <View style={styles.placeholderStyle}>
          <FontAwesomeIcon icon={faCalendar} style={styles.iconStyle} />
          <TextInput
            placeholder="Date of Birth"
            style={styles.textinputStyle}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerbtntxt}>Register</Text>
      </TouchableOpacity>
      <View style={styles.backToLoginoption}>
        <Text style={styles.backToLoginoptionTxt}>
          Already have an account?,
        </Text>
        <TouchableOpacity>
          <Text style={styles.LoginTxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  bannerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 250,
    width: 350,
    marginVertical: 14,
  },
  registerText: {
    fontSize: 32,
    color: 'black',
    fontWeight: '700',
  },
  socialMedia: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: 10,
  },
  socialMediaBtn: {
    height: 48,
    width: 90,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailText: {
    textAlign: 'center',
    fontSize: 16,
    margin: 5,
    fontWeight: '400',
  },
  placeholderStyle: {
    width: '100%',
    borderBottomWidth: 1.5,
    borderBottomColor: '#D3D3D3',
    marginTop: 10,
    flexDirection: 'row',
  },
  textinputStyle: {
    fontSize: 16,
    fontWeight: 800,
  },
  inputContainerStyle: {
    marginVertical: 0,
  },
  registerBtn: {
    height: 62,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#9F2B68',
    marginVertical: 10,
    borderRadius: 10,
  },
  registerbtntxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#ffff',
  },
  backToLoginoption: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 28,
  },
  backToLoginoptionTxt: {
    textAlign: 'center',
  },
  LoginTxt: {
    textAlign: 'center',
    marginHorizontal: 5,
    color: '#9F2B68',
  },
  googleImageStyle: {
    height: 35,
    width: 35,
  },
  iconStyle: {
    alignSelf: 'center',
  },
});
