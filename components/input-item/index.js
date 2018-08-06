import React, { Component } from 'react';
import {
    propTypes,
    defaultProps,
} from './props-type'
import { View, StyleSheet } from 'react-native';
import { TextInput,Text } from '../index';

export default class InputItem extends Component {
    static propTypes = propTypes
    static defaultProps = defaultProps
    render() {
        const {
            style,
            inputStyle,
            placeholder,
            children,
            textStyle,
            ...props
        } = this.props
        return (
            <View
                style={[
                    {
                        backgroundColor: '#fff',
                        paddingHorizontal: 15,
                        paddingVertical: 15,
                        borderTopWidth: 0.5,
                        borderBottomWidth: 0.5,
                        borderColor: '#DBDBDC',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }, style
                ]}
            >
                {
                    children 
                    ?   (
                        typeof children === 'string' 
                        ?   (
                                <Text style={[styles.text, textStyle]}>{children}</Text>
                            ) 
                        :   (
                                <View style={{flex:1}}>{children}</View>
                            )
                        ) 
                    :   null
                }
                <TextInput
                    style={{flex:3}}
                    inputStyle={[
                        {
                            fontSize: 15,
                            color: "#333",
                            flex: 1,
                        }, inputStyle
                    ]}
                    placeholder={placeholder}
                    {...props}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    text: {
        fontSize:14,
        color:'#333',
        flex:1,
    }
})