import React, { Component } from 'react';
import {
    TextInput,
    View,
    TouchableOpacity,
    Image,
    Platform,
} from 'react-native';
import { propTypes,defaultProps } from './props-type';



export default class ThemeTextInput extends Component {
    static propTypes = propTypes
    static defaultProps = defaultProps
    state = {
        value: null,
    }
    render() {
        const {
            showClearButton,
            style,
            inputStyle,
            onChangeText,
            ...props
        } = this.props
        const {
            value
        } = this.state
        return (
            <View style={[{ flexDirection: 'row', }, style]}>
                <TextInput
                    style={[{ padding: 0, textAlignVertical: 'top' }, inputStyle]}
                    underlineColorAndroid="transparent"
                    clearButtonMode={showClearButton ? 'while-editing' : 'never'}
                    onChangeText={(e) => {
                        this.setState({
                            value: e
                        }, () => {
                            onChangeText(e)
                        })
                    }}
                    {...props}
                    ref={(e) => { this.TextInput = e }}
                />
                {
                    Platform.OS === 'android' && showClearButton && value && (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                this.clear()
                            }}
                            style={{ marginRight: 10, }}
                        >
                            <Image
                                source={require('../assets/list_close.png')}
                                style={{ height: 21, width: 21, }}
                            />
                        </TouchableOpacity>
                    )
                }
            </View>
        )
    }
    clear = () => {
        this.TextInput.clear()
        this.TextInput.setNativeProps({ text: ' ' })
        setTimeout(() => {
            this.TextInput.setNativeProps({ text: '' });
        });
        this.setState({
            value: null,
        })
    }
}

