import React, { FC } from 'react';
import { Button, Pressable, StyleSheet, Text } from "react-native";

interface bttnLogInt{
  log:string
  key:number
  flag:number
  setFlag:(flag:number)=>void
  setNumb:(numb:number)=>void;
}

const ButtonLog:FC<bttnLogInt> = ({ log, key, flag, setFlag,setNumb }) => {

  const onBttnClick = () =>{
    switch (log){
      case '+':
        setFlag(1);
        break;
      case '-':
        setFlag(2);
        break;
      case '*':
        setFlag(3);
        break;
      case '/':
        setFlag(4);
        break;
      case 'c':
        setNumb(0);
        break;
    }
  };

  return (
    <Pressable onPress={onBttnClick} style={styles.buttonLog}>
      <Text style={styles.text}>{log}</Text>
    </Pressable>

  );
};

const styles = StyleSheet.create({
  buttonLog:{
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width:'20%',
    height:'100%',

  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});

export default ButtonLog;
