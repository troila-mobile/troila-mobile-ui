import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { propTypes, defaultProps } from './props-type';

const screenHeight = Dimensions.get('window').height;


export default class SpringAnimatedView extends Component {
    static propTypes = propTypes
    static defaultProps = defaultProps
    state = {
        ani: new Animated.Value(0),
        show: this.props.show,
        pageY: null,
        height: 0,
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.show === true && this.props.show === false) {
            this.show()
        }
        if (nextProps.show === false && this.props.show === true) {
            this.hide()
        }
        if (nextProps.nativeEvent && nextProps.nativeEvent !== this.props.nativeEvent){
            const {
                pageY,
            } = nextProps.nativeEvent
            this.setState({
                pageY
            })
        }
    }
    render() {
        const {
            title,
            onPress,
            activeComponent,
        } = this.props
        const {
            show,
            height,
            pageY,
        } = this.state
        if (!show) {
            return null
        }
        const inputRange = [0, 1];
        const y = pageY - (screenHeight - height)
        return (
            <View
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.3)' }}
                onLayout={({ nativeEvent }) => {
                    this.setState({
                        height: nativeEvent.layout.height
                    })
                }}
            >
                {
                    height&&y ? (
                        <Animated.View
                            style={[
                                { backgroundColor: '#fff', padding: 50 },
                                {
                                    top: this.state.ani.interpolate({
                                        inputRange,
                                        outputRange: [y, 0],
                                    }),
                                    height: this.state.ani.interpolate({
                                        inputRange,
                                        outputRange: [0, height],
                                    }),
                                }
                            ]}
                        >
                            {this.props.children}
                        </Animated.View>
                    ) : null
                }
            </View>
        );
    }
    show = () => {
        this.setState({
            show: true
        }, () => {
            Animated.timing(
                this.state.ani,
                {
                    toValue: 1,
                    duration: 500,
                }
            ).start()
        })
    }
    hide = () => {
        Animated.timing(
            this.state.ani,
            {
                toValue: 0,
            }
        ).start((() => {
            this.setState({
                show: false,
                y: null
            })
        }))
    }
}
