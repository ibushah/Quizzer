import react, { Component } from 'react';
import Cam from '../Screens/Cam'
import Test from '../Screens/Test'
import FrontLoad from '../Screens/FrontLoad'
import Result from '../Screens/Result'
import { View, Text } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";


const mainNavigation = createSwitchNavigator({
    Front: FrontLoad,
    Quiz: Test,
    Camera: Cam,
    End:Result


})

export default createAppContainer(mainNavigation);





