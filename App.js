import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("")
  const colors = {
    dark: '#222520',
    dark1: '#292B36',
    dark2: '#272B33',
    dark3: '#000',
    light: "#FFF",
    light1: "#F1F1F1",
    light2: "#F7F7F7",

  };
  const getBtnColor = (type) =>{
    if(type=="down"){
      return "#35FB06"
    }else if(type=="top"){
      return "#ff0a0a"
    }else if(type=="right"){
      return "#eb34c6"
    }else{
      return getColor(colors.dark, colors.light)
    }
  }
  const calculate =(title) =>{
    if(title == 'C'){
      setResult('')
    }else if(title == 'DL'){
      setResult(result.substring(0,result.length-1))
    }else if(title == '='){
      setResult(eval(result))
    } else {
        setResult(result + title)
    }
  }
  const Btn =({title,type}) =>(
    <TouchableOpacity
      onPress={()=>{calculate(title)}}
      style={{
      elevation:2,
      backgroundColor:getColor(colors.light1,colors.dark2),
      color:getBtnColor(type),
      height:80,
      width:"25%",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      }} >
      <Text style={{fontSize:35,color:"black",textAlign:"center",color:getBtnColor(type),}}>{title}</Text>
    </TouchableOpacity>
  )
  const getColor = (light, dark) => darkTheme ? dark : light

  return (
    <View style={{
      paddingVertical: 20,
      color:getColor(colors.dark3,colors.light1),
      backgroundColor:getColor(colors.light2, colors.dark),
      alignItems: "center",
    }}>
      <Switch style={{
        color:getColor(colors.dark3,colors.light1),
        backgroundColor:getColor(colors.light2, colors.dark),
      }} value={darkTheme} onValueChange={() => { setDarkTheme(!darkTheme) }}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
      />
      <View style={{
        display: "flex",
        justifyContent:"flex-end",
        flexDirection: "column",
        height:660,
        }}>
      <Text style={{ 
        color:getColor(colors.dark3,colors.light1),
        backgroundColor:getColor(colors.light2, colors.dark),
        fontSize:40,
        textAlign:"right",
        paddingRight:20,
        paddingTop:20,
        // height:"100%",
        width:"100%",
        position: "absolute",
        top: -20,
        zIndex: -1,

        }}>
          {result}
        </Text>
        <View style={{
          flexDirection:"row",
          flexWrap:"wrap",
          backgroundColor:getColor(colors.light,colors.dark),
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
          justifyContent:"center",
          marginBottom:20,
        }}>
            <Btn title="C" type="top"/>
            <Btn title="DL" type="right"/>
            <Btn title="/" type="right"/>
            <Btn title="%" type="right"/>
            <Btn title="7" type="number"/>
            <Btn title="8" type="number"/>
            <Btn title="9" type="number"/>
            <Btn title="*" type="right"/>
            <Btn title="4" type="number"/>
            <Btn title="5" type="number"/>
            <Btn title="6" type="number"/>
            <Btn title="-" type="right"/>
            <Btn title="1" type="number"/>
            <Btn title="2" type="number"/>
            <Btn title="3" type="number"/>
            <Btn title="+" type="right"/>
            <Btn title="00" type="number"/>
            <Btn title="0" type="number"/>
            <Btn title="." type="number"/>
            <Btn title="=" type="down"/>
        </View>
      </View>
    </View>
  )
}

export default App; 