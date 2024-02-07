import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import ButtonMy from "./ButtonMy";
import ButtonLog from "./ButtonLog";


interface GridInt{
  number:number;
  setNumber:(number:number)=>void;
  flag:number;
  setFlag: (flag:number)=>void
}



const GridRowMy:FC<GridInt> = ({number,setNumber,flag,setFlag}) => {
  const logicComp:string[] = ['+','-','*','/','c'];
  const numbComp:number[] = [1,2,3,4,5,6,7,8,9,0]
  return (
    <View>
      <View style = {styles.viewLog}>
        {
          logicComp.map( (log,index)=>(
            <ButtonLog log={log} key={index} flag={flag} setFlag={setFlag} setNumb={setNumber}/>
          ))
        }

      </View>
      <View style = {styles.viewNum}>
        {
          numbComp.map( (numb,index)=>(
            <ButtonMy numb={numb} setNumb={setNumber} numbSt={number} flag={flag} setFlag={setFlag} key = {index}/>
          ))
        }
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  viewLog:{
    flexWrap:'wrap',
    flexDirection:'row',
    height: 100,
    marginBottom: 200,
    width: '100%',
    justifyContent: 'space-around',
  },
  viewNum:{
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent:'center',
    height: 50,
    width: '100%',
  }

});

export default GridRowMy;
