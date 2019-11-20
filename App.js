import React, {Component} from 'react';
import { StyleSheet, Text, View , Button,TouchableOpacity} from 'react-native';
import SwitchExample from './swtich.js';


 export default  class App extends Component{

  constructor(props){
    super(props)
    this.state={
      resultText:"",
      switch1Value: false,
      backgroundColor:'#222831'
    }
    this.operations=['C','±','%','/'],
    this.operation123=['/','*','-','+','=']

   }

   toggleSwitch1 = (value) => {
    this.setState({switch1Value: value,backgroundColor:this.state.backgroundColor});
    //console.log('Switch 1 is: ' + value)
 }
   
  calculateResult(){
    const text=this.state.resultText
  }

  buttonPresssed(text)
  {
   //  console.log(text)
     if(text=='='){

           return this.calculateResult()
     }
 
     this.setState({
     resultText:this.state.resultText+text
   })

  }

  operate(operation){

    switch(operation){
        case 'C':
       //   console.log(this.state.resultText)
          let text=this.state.resultText.split('')
          text.pop()
          this.setState({
                   resultText:text.join('') 
          })
          break
        case '+':
        case '-':
        case '*':
        case '/':
          
          const lastchar = this.state.resultText.split('').pop()
          if(this.operations.indexOf(lastchar)||this.operation123.indexOf(lastchar))  return
        
            
        if(this.state.text == "")return 
           this.setState({
                   resultText:this.state.resultText + operation},
                   console.log(resultText)
                   )          

    }
  }

  render()
  {
    let ops=[]
    for(let i=0;i<4;i++){
       ops.push(
              
               <TouchableOpacity onPress={()=>this.operate(this.operations[i])}
                   style={styles.submit}>
                   <Text style={styles.submitText}>{this.operations[i]}</Text>
               </TouchableOpacity> 
        )
    }


    let rows=[]
    let nums=[[0,'.'],[7,4,1],[8,5,2],[9,6,3]]

    for(let i=0;i<nums.length;i++)
    {
          let row=[]
          for(let j =0;j<3;j++)
          {

            row.push(
                <TouchableOpacity  onPress={()=>this.buttonPresssed(nums[i][j])}
                   style={styles.submit}>
                   <Text style={styles.submitText}>{nums[i][j]}</Text>
               </TouchableOpacity> 
              )
          }
          rows.push(<View style={styles.row}>{row}</View>)
    }

    let ops123=[]
    for(let i=0;i<5;i++)
    {
        ops123.push(
              
               <TouchableOpacity onPress={()=>this.operate(this.operation123[i])}
                   style={styles.submit}>
                   <Text style={styles.submitText}>{this.operation123[i]}</Text>
               </TouchableOpacity> 
        )
    }

    return(
     <View style={styles.container}>
         <View>
          
         <SwitchExample
            toggleSwitch1 = {this.toggleSwitch1}
            switch1Value = {this.state.switch1Value}
            />

         </View> 


          <View style={[styles.result,{backgroundColor:this.toggleSwitch1}]}>
            <Text style={styles.result12}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>

             <View>
             <View style={styles.number}>{ops}</View>
            <View style={styles.number}>{rows}</View>
            
            <View style={styles.number123}>{ops123}</View>
                              
            </View>

          </View>
                       
      </View>
        


      );
  }
}
 
 const styles=StyleSheet.create({
 
  number123:{
   flexDirection:'row',
   alignItems:"flex-end",
   justifyContent:"space-around",
  },
  container:{
     flex:1
  },
  result12:{
    fontSize:60,
  },
  result:{
       flex:1,
      backgroundColor:"#ecfcff",
      alignItems:"flex-end",
      justifyContent:'flex-end',
  },
  calculation:{
    flex:2,
   backgroundColor:"#ecf0f1",
   flexDirection:'row',
   justifyContent:'space-around'
  },
 buttonColor:{
   marginTop:5,
   marginLeft:40,
   marginRight:40,
   flexDirection:'row',
   justifyContent:'space-evenly'
 },
 submit:{
    width:50,
    height:50,
    backgroundColor:'#ecfcff',
    borderRadius:25,
    justifyContent:'space-around',
    margin:10 
  },
 submitText:{
      color:'#2d3436',
      textAlign:'center',
      fontSize:20,
      fontFamily:'sans-serif'
},
functionbutton:{
  margin:20,
   justifyContent:'space-around',
   flexDirection:'column',
   fontSize:40,
   alignItems:'flex-end'
},

number:{
  flexDirection:'row',
  justifyContent:"space-evenly",
  alignItems:'center'
},

row:{
  marginTop:20,
  justifyContent:'space-evenly'
},
column:{
  flexDirection:'row',
  margin:20
},
column1:{
    backgroundColor:'#55efc4'
},
column2:{
    backgroundColor:'#ecf0f1'
},
column3:{
  flexDirection:'row',
  justifyContent:'space-evenly'
},

row2:{
  flexDirection:'row',
  margin:10,
  justifyContent:'space-around'
},
equal:{
  backgroundColor:'#55efc4'
}

 })
  


