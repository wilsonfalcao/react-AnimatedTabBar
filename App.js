import React from 'react';
import { View,StyleSheet} from 'react-native';

//telas
import Main from "./src/page/main/main";
import AirMenu from "./src/page/airmenu";

export default function App() {

  return (
    <View style={{
        flex:1,
      }}
    >
      <View style={{
        position:"absolute",
        bottom:"45%",
        right:"44%",
      }}>
        <AirMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAnimated:{
    fontSize:20,
    fontWeight:"bold",
    color:"rgb(40,224,70)",
    marginBottom:50,
  }
});
