import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import {
    propTypes,
    defaultProps,
    itemPropTypes,
    itemDefaultProps,
} from './props-type'
import { Text } from "troila-mobile-ui";


class List extends Component {
    static propTypes = propTypes
    static defaultProps = defaultProps
    render() {
        const {
            children,
            style,
            disabled,
            disabledOnPress,
        } = this.props
        return (
            <View
                style={[styles.list, style]}
            >
                {children}
                {
                    disabled && (
                        <TouchableOpacity
                            style={{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.7)', height: '100%' }}
                            activeOpacity={1}
                            onPress={disabledOnPress}
                        />
                    )
                }
            </View>
        )
    }
}




class Item extends Component {
    static propTypes = itemPropTypes
    static defaultProps = itemDefaultProps
    render() {
        const {
            children,
            onPress,
            required,
            numberOfLines,
            extra,
            extraIcon,
            extraTextStyle,
            style,
        } = this.props
        let contentDom;
        if (children && React.isValidElement(children)) {
            contentDom = <View style={styles.view1}>{children}</View>;
        } else {
            contentDom = (
                <View style={styles.view1}>
                    <Text
                        style={styles.text1}
                        numberOfLines={numberOfLines}
                    >
                        {children}
                    </Text>
                </View>
            )
        }
        let extraDom;
        if (extra) {
            extraDom = (
                <Text
                    style={[styles.extra, extraTextStyle]}
                >
                    {extra}
                </Text>
            )
            if (React.isValidElement(extra)) {
                extraDom = extra;
            }
        }
        return (
            <TouchableOpacity
                style={[styles.item, style]}
                activeOpacity={1}
                onPress={onPress}
            >
                <Text style={styles.requiredText}>{required ? '*' : ' '}</Text>
                {contentDom}
                {extraDom}
                {extraIcon && this.extraIcon(extraIcon)}
            </TouchableOpacity>
        )
    }
    extraIcon = (icon) => {
        const {
            onClose
        } = this.props
        const arrEnum = {
            horizontal: (
                <Image
                    source={require('../assets/list_horizontal.png')}
                    style={styles.arrow}
                />
            ),
            close: (
                <TouchableOpacity
                    style={styles.closeButton}
                    activeOpacity={1}
                    onPress={onClose}
                >
                    <Image
                        source={require('../assets/list_close.png')}
                        style={styles.close}
                    />
                </TouchableOpacity>

            ),
        }
        return arrEnum[icon] || null
    }
}


const styles = StyleSheet.create({
    list: {
        backgroundColor: '#fff',
        marginTop: 15,
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#F1F1F2',
        flexDirection: 'row',
        paddingVertical: 13,
        paddingHorizontal: 12.5,
        alignItems: 'center',
    },
    requiredText: {
        fontSize: 15,
        color: 'red',
        marginRight: 3,
    },
    view1: {
        flex: 1,
    },
    text1: {
        fontSize: 18,
        color: '#000',
    },
    arrow: {
        width: 8,
        height: 13,
        tintColor: '#D7D7D7',
        marginLeft: 5,
    },
    close: {
        width: 17,
        height: 17,
    },
    closeButton: {
        marginLeft: 5,
    },
    extra: {
        fontSize: 18,
        color: '#A3A5A8',
    }
});

List.Item = Item

export default List