import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Button,
} from 'react-native';
import { TextInput } from 'troila-mobile-ui';


export default class Example extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor:'#fff',marginTop: 15,padding:15}}>
                    <TextInput
                        inputStyle={{
                            fontSize: 16,
                            color: '#333',
                            height:20,
                            flex:1,
                        }}
                        placeholder={'请输入内容'}
                    />
                </View>
                <TextInput
                    style={{
                        marginTop: 30,
                        height: 30,
                        backgroundColor: '#fff',
                        marginLeft: 15,
                    }}
                    inputStyle={{
                        fontSize: 16,
                        color: '#333',
                        flex: 1,
                    }}
                    placeholder={'请输入内容'}
                    showClearButton={true}
                    onChangeText={(e)=>{
                        console.log(e)
                    }}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f9',
    }
})