import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
import{MaterialCommunityIcons}from "@expo/vector-icons";

import Chw from "./Chw";
import Home from "./Home";
import Jojo from "./Jojo";

const Tab = createBottomTabNavigator()
;

export default function Rotastab(){
  
  return(
    <Tab.Navigator inicialRouteName='Home' screenOptions={{headerShown:false}}>
    
  <Tab.Screen name="Chainswan" component={Chw} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="cake" color={'#700000'} size={35}/>}}/>
    
    <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons  name="home" color={color} size={35}/>}}/>
    
    <Tab.Screen name="Jojo" component={Jojo}  options={{tabBarIcon:({color,size})=><MaterialCommunityIcons  name="star" color={'#4a0079'} size={35}/>}}/>
    
    </Tab.Navigator>
  );
}