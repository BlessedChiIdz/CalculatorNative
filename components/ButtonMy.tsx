import React, { FC } from "react";
import { Button, Pressable, StyleSheet, Text } from "react-native";

interface bttnMyIntfc{
  flag:number,
  setFlag:(flag:number)=>void;
  numbSt:number,
  numb:number,
  setNumb:(number:number) => void;
}


const ButtonMy:FC<bttnMyIntfc> = ({numb,setNumb,numbSt,flag,setFlag}) => {
  const onPress = () =>{
    switch (flag){
      case 0:
        setNumb(numb);
        break;
      case 1:
        setNumb(numbSt+numb);
        setFlag(0);
        break;
      case 2:
        setNumb(numbSt-numb);
        setFlag(0)
        break;
      case 3:
        setNumb(numb*numbSt);
        setFlag(0);
        break
      case 4:
        setNumb(numbSt/numb);
        setFlag(0)
        break
    }
  }
  return (
    <Pressable onPress={onPress} style={styles.buttonMy}>
      <Text style={styles.text}>{numb}</Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  buttonMy:{
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    height:100,
    width:100,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default ButtonMy;
