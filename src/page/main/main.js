import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import Animated,{
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  interpolate,
  useDerivedValue,
  Extrapolate,
} from "react-native-reanimated";
import {mainStyle} from "./style";

export default function Main() {

  const textPosition = useSharedValue({
    y:30,
    x:0,
    opacity:0,
  });
  
  const textPositionStyle = useAnimatedStyle(()=>{
    
    return{
      transform:[
        {translateY:withTiming(textPosition.value.y,{duration:4000,easing:Easing.bounce})},
        {translateX:withTiming(textPosition.value.x,{duration:4000,easing:Easing.bounce})},
      ],
      opacity:withTiming(textPosition.value.opacity,{duration:1500,easing:Easing.linear}),
    };

  });

  return (
    <View style={mainStyle.container}>
      <Animated.Text style={[mainStyle.textAnimated,textPositionStyle]}>
        start working on your app!
      </Animated.Text>
      <TouchableOpacity
          style={{
            width:200,
            height:40,
            backgroundColor:"red",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:100,
          }} 
          onPress={()=>{
          textPosition.value = textPosition.value.y === 30 ? {y:0,x:45,opacity:1} : {y:30,x:0,opacity:0};
        }}
      >
        <Text>Fazer Animação</Text>
      </TouchableOpacity>
    </View>
  );
}
