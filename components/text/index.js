import React, { Component } from 'react';
import { Text } from 'react-native';
import {
    propTypes,
    defaultProps,
} from './props-type'

export default class TroilaMobileText extends Component {
    static propTypes = propTypes
    static defaultProps = defaultProps
    render() {
        const {
            children
        } = this.props
        return (
            <Text
                allowFontScaling={false}
                {...props} 
            >
                {children}
            </Text>
        )
    }
}
