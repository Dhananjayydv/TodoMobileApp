import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,TextInput,
  TouchableOpacity,Button
} from 'react-native';
import axios from 'axios';

const Profile = ({navigation,route}) => {
    const [username,setUsername]=useState("");
    const {Email} = route.params
    const user = {
      Email:Email
    }
    useEffect(()=>{
        
      async function handleLogin(){
        // console.log(email,password);
        const user = {
           Email:Email
          //  Password:password
        }
        // const details = {
        //    email:email
        // }
        try{const result =await axios.post('http://192.168.43.232:8080/api/profile',user)
                //  if(result.data=="user logged in successfully"){
                    // alert("User registered successfully. Click on Login Button to proceed")
                    console.log(result.data);
                    setUsername(result.data.Name);
                    // navigation.navigate('profile')
                    // navigation.navigate('ProfileSc',{ Email: email });
                 }
                 catch(error){
                    console.log(error);
                 }
        
     };
     handleLogin();

    },[])

    const deleteProfile =async ()=>{
      const user = {
        Email:Email
      }
      // console.log("delete btn is clicked")
      try{const result =await axios.delete(`http://192.168.43.232:8080/api/profile/${Email}`)
       if(result.data=="deleted successfully"){
          // alert("User registered successfully. Click on Login Button to proceed")
          console.log(result.data);
          navigation.navigate("Register");
       }
       else{
        console.log(result.data);
       }
          // setUsername(result.data.Name);
          // navigation.navigate('profile')
          // navigation.navigate('ProfileSc',{ Email: email });
       }
       catch(error){
          console.log(error);
       }
    }
    
    return (
      
      <View style={styles.profileContainer}>
         <View>  
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
         </View>
         <View style={{paddingTop:80,width:"80%",alignSelf:'center',flex:1,alignItems:'center'}}>
           <View style={{padding:20}}> 
            <Text style={{fontSize:30}}>Personal Details</Text>
            {/* <Button title='Edit' style={{paddingLeft:20}}></Button> */}
           </View>
           <View>

           
            <Text style={{textAlign:"center",fontSize:20,padding:3}}>{username}</Text>
            <Text style={{textAlign:"center",fontSize:20,padding:3}}>{Email}</Text>
            {/* <Text style={{textAlign:"center",fontSize:20,padding:3}}>Userphoneno</Text> */}
            <Text></Text>
            <TouchableOpacity
               style = {styles.submitButton} >
               <Text style = {styles.submitButtonText}> Edit Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton} onPress={deleteProfile}>
               <Text style = {styles.submitButtonText}> Delete Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton} onPress={() =>
                  navigation.navigate('Todo')
                  } >
               <Text style = {styles.submitButtonText}> Go To Todo List Screen</Text>
            </TouchableOpacity>
            </View>
         </View>
          
      </View>
    );
  
}

const styles = StyleSheet.create({
   profileContainer:{
    // backgroundColor:"black",
    flex:1
   },
    header:{
      backgroundColor: "#00BFFF",
      height:170,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
      color:"white"
    },
    submitButton: {
        backgroundColor: '#0099ff',
        padding: 10,
        margin: 5,
        height: 40,
        
     },
     submitButtonText:{
        color: 'white',
        textAlign:"center"
     }
  });

  export default Profile;