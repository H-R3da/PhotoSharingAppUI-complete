 
import React, {useState} from 'react';  
import {StyleSheet, Text, View} from 'react-native';
 
 const HomeScreen = props => {
   
 return (  
        <View style={styles.container}>       
       <Text>Morocco </Text>       
        </View>  
    );  
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
         flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  

export default HomeScreen;


