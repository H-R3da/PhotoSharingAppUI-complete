 
import React, {useState} from 'react';  
import {StyleSheet, Text, View} from 'react-native';
 
 const GalleryScreen = props => {
   
 return (  
        <View style={styles.container}>       
       <Text>Gallery </Text>       
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

export default GalleryScreen;


