
import React from 'react';

//Componentes nativos
import {View,TouchableOpacity, Text} from "react-native";
import Animated from "react-native-reanimated";

//Styles, Animated Componentes do projeto
import {AirMenuStyle} from "./style";
import {AnimatedFunction} from "./animated";
import {FontAwesome} from "@expo/vector-icons"

export default function AirMenu(){

    const {elementPositionStyle, elementsPosition} = AnimatedFunction();

    const setValueAnimation = ()=>{

        if(elementsPosition.value.element1.x === 0){
            return {
                element1:{
                    x:-70,
                    y:0,
                },
                element2:{
                    x:-50,
                    y:-50,
                },
                element3:{
                    x:0,
                    y:-76,
                },  
            } 
        }

        if(elementsPosition.value.element1.x != 0){

            return {
                element1:{
                    x:0,
                    y:0,
                },
                element2:{
                    x:0,
                    y:0,
                },
                element3:{
                    x:0,
                    y:0,
                },  
            }
        }
    }

    return(
        <View style={AirMenuStyle.AirmenuContainner}>
            <View style={AirMenuStyle.AreaMenuCircle}>
                <View style={AirMenuStyle.PositionAreaMenu}>
                    <Animated.View style={[AirMenuStyle.ElementMenuStyle,elementPositionStyle.element1]}>
                                <TouchableOpacity onPress={()=>{
                                    null
                                }}>
                                    <FontAwesome name="gift" size={20} color="rgb(255,255,255)" />
                                </TouchableOpacity>
                            </Animated.View>
                    <Animated.View style={[AirMenuStyle.ElementMenuStyle,elementPositionStyle.element2]}>
                                <TouchableOpacity onPress={()=>{
                                    null
                                }}>
                                    <FontAwesome name="star" size={20} color="rgb(255,255,255)" />
                                </TouchableOpacity>
                            </Animated.View>
                    <Animated.View style={[AirMenuStyle.ElementMenuStyle,elementPositionStyle.element3]}>
                                <TouchableOpacity onPress={()=>{
                                    null
                                }}>
                                    <FontAwesome name="comment" size={20} color="rgb(255,255,255)" />
                                </TouchableOpacity>
                            </Animated.View>
                    <TouchableOpacity 
                            activeOpacity={1} 
                            onPress={()=>{
                                elementsPosition.value = setValueAnimation();
                            }} 
                            style={AirMenuStyle.CircleButtonAnimated}
                        >
                            <FontAwesome name="shopping-cart" size={25} color="rgb(255,255,255)" />
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}