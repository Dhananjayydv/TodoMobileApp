import React, { useState } from "react";
import { StyleSheet, Text,TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";
const Login = ({navigation}) => {
   const [email,setEmail]=useState("");
   const [password,setPassword]= useState("");
   const handleLogin =async()=>{
      if(password.length<8){
         alert("The length of Password should be greater than 8");
      }
      else{
      const user = {
         Email:email,
         Password:password
      }
      const details = {
         email:email
      }
      try{const result = await axios.post('http://192.168.43.232:8080/api/login',user)
               if(result.data=="user logged in successfully"){
                  // alert("User registered successfully. Click on Login Button to proceed")
                  // console.log("user registered successfully");
                  setEmail("");
                  setPassword("");
                  // navigation.navigate('profile')
                  navigation.navigate('ProfileSc',{Email: email});
                 
               }
               else{
                  alert(result.data);
               }
            }
      catch(error){
            console.log(error);
            alert(error);
         }
      }
   }
  return(
    <View style={{backgroundColor:"skyblue",flex:1,marginTop:25}}>
      <View>
      <Text style={{color:"white",marginTop:"50%",paddingBottom:30,fontSize:50,textAlign:"center"}}>LOGIN</Text>

      </View>
       <View style={{alignItems:"center"}}>
          {/* <TextInput placeholder="Enter the Username/Email" style={{color:"white",borderColor:"white"}}></TextInput> */}
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter your Username/Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none" onChangeText={(textContent)=>{setEmail(textContent)}}/>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter your Password"
               secureTextEntry
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none" onChangeText={(textContent)=>{setPassword(textContent)}}/>
          
         
           <TouchableOpacity
               style = {styles.submitButton}
               onPress = {handleLogin }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            <View style={{flexDirection:"row",width:"80%",justifyContent:"space-between"}}>
            <TouchableOpacity onPress={()=>{
               navigation.navigate('Register');
            }} >
            <Text style={{color:"white",fontSize:18,margin:15}}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={{color:"white",fontSize:18,margin:15}}>Forgot Password?</Text>
          </TouchableOpacity>
            </View>
       </View>
    </View>
  )
};


const styles = StyleSheet.create({
    loginContainer: {
     height:500,
     width:300,
   //   backgroundColor:"skyblue",
     color:"white",
     marginTop:25
    },
    input: {
     margin: 15,
    //  textAlign:"center",
     justifyContent:"center",
    //  height: 40,
    width:"80%",
     borderColor: '#7a42f4',
     borderWidth: 1,
     padding:10,
     color:'#7a42f4',
     borderRadius:20

    //  outline:"none"
  },
  submitBtn:{
     width:"70%",
     margin:30
  },
 
    loginHeading:{
     color:"white",
     fontSize:30,
     margin:"auto",
     textAlign:"center",
     marginTop:60
    },
    submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     width:"80%",
     margin: 15,
     height: 40,
     borderRadius:20
     
  },
  submitButtonText:{
     color: 'white',
     textAlign:"center"
  }
 })
export default Login;