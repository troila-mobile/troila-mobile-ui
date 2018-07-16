import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {Text} from 'troila-mobile-ui';


export default class TestText extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    text测试内容
                </Text>
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