import React, {useState} from 'react';
import { View, Text, Touchable, TouchableOpacity, Alert } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import CheckBox from "expo-checkbox";
import AppLoading from "expo-app-loading";
import { AsyncStorage } from 'react-native';
import UserData from './UserData';
// import AsyncStorage
// import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = (props, {navigation}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       await AsyncStorage.setItem('username', userName);
//       await AsyncStorage.setItem('password', password);
//       console.log('Credentials saved successfully!');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       {/* Input fields for username and password */}
//       <Button title="Login" onPress={handleLogin} />
//     </>
//   );
// };



// const retrieveCredentials = async () => {
//   try {
//     const username = await AsyncStorage.getItem('username');
//     const password = await AsyncStorage.getItem('password');
//     console.log('Retrieved credentials:', username, password);
//   } catch (error) {
//     console.error(error);
//   }







  const Submit = () =>
    {
        if(userName ==  `${userName}` && password == `${password}`)
        {
            Alert.alert("Thank You `${userName}`");
            // Alert.alert("Hello");
            // navigation.navigate(("/src/UserData"), {myName: `${userName}`});
           

        }
        else
        {
            Alert.alert("Something Went Wrong Please Recheck...");
        }
        
    }
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={userName}
             onChangeText= {(actualData)=> setUserName(actualData)}
              
          />
          <Field placeholder="Password" secureTextEntry={true} 
            value={password}
            onChangeText={(pswd)=>setPassword(pswd)}
          />

          <View
            style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200 }}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View>
        
      
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => Submit() } />
    
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Signup') }}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('FlatList') }}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>FlatList</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
