import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer"
import TabNavigator from "./TabNavigator"
import Profile from "../screens/Profile"
const Drawer =createDrawerNavigator()
const DrawerNavigator =()=>{
 
    return (
     <Drawer.Navigator>
    < Drawer.Screen name="home" component={TabNavigator}/>
    < Drawer.Screen name="Profile" component={Profile}/>
     </Drawer.Navigator>
    )
  
}

const styles = StyleSheet.create({
 
});
export default DrawerNavigator