import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import {Button} from 'react-native';
import {logout, useMyContextController} from '../store';
import {useEffect} from 'react';

const Stack = createStackNavigator();
const MyStack = ({navigation}) => {
  const [controller, dispatch] = useMyContextController();
  const {userLogin} = controller;

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}  options={{headerTitleAlign: 'center'}}/>
      <Stack.Screen name="Register" component={Register} options={{headerTitleAlign: 'center'}} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: {fontStyle: 'italic'},
          title: 'Hello ' + (userLogin != null && userLogin.fullname),
          headerTitleAlign: 'center',
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
