import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import LoginScreen from './src/Login';
import RegisterScreen from './src/Register';
import ProfileScreen from './src/Profile';
import TodoScreen from './src/TodoApp';
// import Login from './src/Login';
// import Register from './src/Register';
// import Profile from './src/Profile';
// import ForgotPassword from './src/ForgotPassword';
// import Todo from './src/Todo'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './src/Login';
// import Register from './src/Register';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    // <ScrollView>
    //   <Login/>
    //   <Register/>
    //   <Profile/>
    //   <Todo/>
    // </ScrollView>
   
     <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Welcome To Todo App' }}
        />
      <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Welcome To Todo App' }}
         
        />
        
        <Stack.Screen name="ProfileSc" component={ProfileScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
 
  );
};
export default MyStack;
   