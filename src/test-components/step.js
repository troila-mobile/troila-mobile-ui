import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {Step} from 'troila-mobile-ui';


export default class Example extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Step
                    label={['目录基本信息', '分配交付组', '规格配置', '外网IP段', '通信权限']}
                    activeIndex={1}
                    activeColor={'#0099FF'}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f9',
        paddingTop: 50,
    }
})