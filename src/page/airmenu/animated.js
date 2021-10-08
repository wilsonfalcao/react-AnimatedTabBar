import { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";


export const AnimatedFunction = ()=>{

    const elementsPosition = useSharedValue({
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
    });

    const elementPositionStyle = {
        element1: useAnimatedStyle(()=>{
            return{
                transform:[
                    {translateY:withTiming(elementsPosition.value.element1.y)},
                    {translateX:withTiming(elementsPosition.value.element1.x)},
                ],
            };
        }),
        element2: useAnimatedStyle(()=>{
            return{
                transform:[
                    {translateY:withTiming(elementsPosition.value.element2.y)},
                    {translateX:withTiming(elementsPosition.value.element2.x)},
                ],
            };
        }),
        element3: useAnimatedStyle(()=>{
            return{
                transform:[
                    {translateY:withTiming(elementsPosition.value.element3.y)},
                    {translateX:withTiming(elementsPosition.value.element3.x)},
                ],
            };
        })
    }

    return{
        elementsPosition,
        elementPositionStyle
    }
}

//Exportando funções de animação