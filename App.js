import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const msg= 'Adarsh Mishra'

class App1 extends React.Component
{
  render()
  {
    return(
    <View>
    <Text style={{marginTop:20,color: 'orange'}}>{msg}</Text>
    </View>
    );

  }
}

function App()
{
  return(
    <View>
    <App1/>
    <Text style={{textAlign:'center',color:'blue'}}>{msg}</Text>
    <Text style={mystyle.textstyle}> {msg} </Text>
    <Text style={[mystyle.textstyle,{backgroundColor:'green',color:'white'}]}> Hello World</Text>
    </View>
  );
}

const mystyle=StyleSheet.create({
  textstyle:{
    marginTop: 50,
    textAlign:'center',
    color:'pink',
    fontSize:20,
    backgroundColor:'blue',
    padding:20
  }
});

export default App