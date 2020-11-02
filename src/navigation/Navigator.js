import React from "react"
import { NavigationContainer,DefaultTheme  } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import ResultsDetailScreen from '../screens/ResultsDetailScreen'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(37, 158, 182)',
  },
};
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: '#6ee1f8' } }}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Food App'}} />
        <Stack.Screen name='About' component={AboutScreen} options={{ title: 'About Us' }} />
        <Stack.Screen name='Details' component={ResultsDetailScreen} options={{ title: 'More on' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
