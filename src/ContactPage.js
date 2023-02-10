import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import React , {useState} from "react";
import CheckBox from "expo-checkbox";
import {
    useFonts,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_900Black,    
} from "@expo-google-fonts/montserrat";

import{
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";

import AppLoading from "expo-app-loading";
const ContactPage = ({navigation}) =>
{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);

    const Submit = () =>
    {
        if(userName === "Prajakta" && password==="Gauri")
        {
            Alert.alert("Thank You `${userName}`");
            navigation.navigate("UserData", {myName: `${userName}`});
        }
        else
        {
            Alert.alert("Something Went Wrong Please Recheck...")
        }
        
    }
    // console.log(userName);
    let [fontLoaded,error] =useFonts
    (
    {
    bold: Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
 
  
    regular: JosefinSans_400Regular,
    JosefinSans_500Medium
     } );
     if(!fontLoaded){
        return <AppLoading />;
     }
    return(
        <View style= {styles.mainContainer}>
            <Text style= {styles.mainHeader}>LOGIN FORM</Text>
            <Text style={styles.description}>
                You can Reach Us Via chiddarwarprajakta711@gmail.com
            </Text>

            <View style= {styles.inputContainer}>
                <Text style= {styles.labels}>Enter Your Name</Text>
                <TextInput style= {styles.inputStyle} 
                autoCapitalize="none"  autoCorrect={false}
                    value={userName}
                    onChangeText= {(actualData)=> setUserName(actualData)}
                />
            </View>
            
            <View style= {styles.inputContainer}>
                <Text style= {styles.labels}>Enter Your Password</Text>
                <TextInput style= {styles.inputStyle} 
                autoCapitalize="none"  autoCorrect={false} secureTextEntry={true}
                    value={password}
                    onChange={(actualPassword)=> setPassword(actualPassword)}
                />
            </View>
            
            {/* <View style={styles.wrapper}>
                <CheckBox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "#4630EB " : undefined}
                />
                <Text style={styles.wrapperText}>
                    I have read and agreed with all Terms and Conditions.
                </Text>
            </View>  */}
            
 
            <TouchableOpacity 
            style= {[styles.buttonStyle,{ backgroundColor: agree ? "#4630EB " : "grey"}]}
            disabled={!agree}
            onPress={()=>Submit()}>
                <Text style= {styles.buttonText} >LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        mainContainer:
        {
           height: "100%",
           paddingHorizontal:30,
           paddingTop: 30 ,
           backgroundColor: "#fff",
        },
        mainHeader:
        {
           fontSize: 25,
           color: "#344055",
           fontWeight : "500",
           paddingTop: 20,
           paddingBottom: 15,
           textTransform: "capitalize",
        //    fontFamily: "bold ",
        },
        description:
        {
            fontSize: 20,
            color:"#7d7d7d",
            paddingBottom: 20,
            lineHeight: 25,
            // fontFamily:"regular"
        },
        inputContainer:
        {
            marginTop: 20,
        },
        labels :
        {
            fontSize: 18,

        },

        buttonStyle:
        {
        
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 4,
                elevation: 3,
                backgroundColor: 'black',
            
        },
        buttonText:
        {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
    //     wrapper: 
    //     {
    //         flex: -1,
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    //     }
    }
)
export default ContactPage;