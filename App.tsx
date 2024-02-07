import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from "react-native";
import GridRowMy from "./components/GridRowMy";

function App(): React.JSX.Element {
  const [flag, setFlag] = useState(0);
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text style={styles.line}>
        {number}
      </Text>


      <GridRowMy flag={flag} setFlag={setFlag} number={number} setNumber={setNumber}/>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flex:1,

  },
  view:{
    backgroundColor: 'black',
    flexDirection:'row',
    height: 50,
    marginBottom: 20,
    width: '100%',
    justifyContent: 'space-around',
  },
  line:{
    marginTop:'10%',
    marginBottom:'20%',
    textAlign:'center',
    fontSize:40,
    width: '100%',

  }
});
export default App;
