import React, { Component } from 'react';
import { View } from 'react-native';
import { propTypes, defaultProps } from './props-type';
import Text from '../text';

export default class Step extends Component {
    static propTypes = propTypes
    static defaultProps = defaultProps
    render() {
        const {
            label,
            activeIndex,
            activeColor,
        } = this.props
        return (
            <View>
                <View style={{ flexDirection: 'row', height: 20 }}>
                    {
                        label.map((item, i) => {
                            return (
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }} key={i}>
                                    {
                                        i !== 0
                                            ? <View style={{ height: 3, flex: 1, backgroundColor: activeIndex >= i ? activeColor : '#D9E6EC', }} />
                                            : <View style={{ height: 3, flex: 1 }} />
                                    }
                                    <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: activeIndex >= i ? activeColor : '#D9E6EC' }} />
                                    {
                                        i !== label.length - 1
                                            ? <View style={{ height: 3, flex: 1, backgroundColor: activeIndex >= i ? activeColor : '#D9E6EC', }} />
                                            : <View style={{ height: 3, flex: 1 }} />
                                    }
                                </View>
                            )
                        })
                    }
                </View>
                <View style={{ flexDirection: 'row', height: 30 }}>
                    {
                        label.map((item, i) => (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} key={i}>
                                <Text style={{ fontSize: 14, color: '#333' }}>{item}</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        );
    }
}
