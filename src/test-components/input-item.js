import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Button,
} from 'react-native';
import { InputItem, TextInput, Text } from 'troila-mobile-ui';


export default class Example extends Component {
    render() {
        return (
            <View style={styles.container}>
                <InputItem
                    placeholder={'请输入内容'}
                    style={{ marginTop: 15, }}
                >
                    请输入内容
                </InputItem>
                <InputItem
                    placeholder={'请输入内容'}
                    style={{marginTop: 15,}}
                >
                    <Image
                        source={require('../assets/list_1.png')}
                        style={{ width: 20 }}
                    />
                </InputItem>
                <InputItem
                    placeholder={'请输入内容'}
                    style={{ marginTop: 15, }}
                >
                    <View>
                        <Image
                            source={require('../assets/list_1.png')}
                            style={{ width: 20 }}
                        />
                        <Text style={{marginVertical: 10,}}>测试内容</Text>
                        <Image
                            source={require('../assets/list_1.png')}
                            style={{ width: 20 }}
                        />
                    </View>
                </InputItem>
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