import { StyleSheet, Text,TextInput,TouchableOpacity, View,Button } from 'react-native';

import React,{useState} from 'react'
import axios from "axios";


function Register({navigation}) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");
    const [cnfPassword,setCnfPassword]= useState("");
  
    const submitForm = async()=>{
         //password!=cnfPassword?alert("confirm password doesn't matches with password"):null;
         //navigation.navigate('Login');
         
         if(password.length<8){
            alert("The length of Password should be greater than 8");
            // console.log(password.length);
         }
          else{
            // console.log(password.length)
            if(cnfPassword!=password){
               alert("Password and confirm Password should be same");
            }
            else{
               let user = {
                  Name: name,
                  Email: email,
                  Password: password
                }


          try{const result = await axios.post('http://192.168.43.232:8080/api/register',user)
               if(result.data=="user registered successfully"){
                  console.log("user registered successfully");
                  navigation.navigate('Login')
            }
            else{
               alert(result.data);
            }
         }

          catch(error){
                  console.log(error);
            }
           }

          }

   }
   return (
    <View style={styles.loginContainer}>
     <View>
     <Text style={styles.loginHeading} >REGISTER</Text>

     </View>
    
      <View>

      {/* <form ></form> */}
      <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none" value={name} onChangeText={(text)=> setName(text)}/>
      <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               keyboardType="email-address"
               autoCapitalize = "none" value={email} onChangeText={(text)=>setEmail(text)}/>
            
      <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               secureTextEntry
               autoCapitalize = "none" value={password} onChangeText={(text)=>setPassword(text)}/>
      <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Confirm Password"
               placeholderTextColor = "#9a73ef"
               secureTextEntry
               autoCapitalize = "none" value={cnfPassword} onChangeText={(text)=>setCnfPassword(text)}/>
      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {submitForm}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            {/* <View style={{justifyContent:"center",width:"80%",alignItems:"center"}}> */}

            <TouchableOpacity style={{width:"100%",textAlign:"center",justifyContent:"center",alignItems:"center"}} onPress={()=>{
               // navigation.navigate("Login")
               navigation.navigate('Login');

            }}>
               <Text style={{color:"white",fontSize:18,marginTop:10}}>Already have an account?  Login</Text>
               {/* <Text style={{color:"white"}}>Login</Text> */}
            </TouchableOpacity>
            {/* </View> */}

       </View>
    </View>
  )
}

const styles = StyleSheet.create({
   loginContainer:{
    flex:1,
    backgroundColor:"skyblue",
   // backgroundImage:"linear-gradient(to bottom, blue, green)",
    color:"white",
    justifyContent:"center",
    marginTop:25

   },
   input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding:10,
    color:'#7a42f4',
    outline:"none",
    borderRadius:20
 },
 submitBtn:{
    width:80,
    margin:30,
 },

   loginHeading:{
    color:"white",
    fontSize:40,
    margin:"auto",
    textAlign:"center",
    marginTop:60
   },
   submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius:20    
 },
 submitButtonText:{
    color: 'white',
    textAlign:"center"
 }
})

export default Register;