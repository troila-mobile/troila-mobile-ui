import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    ViewPropTypes,
} from 'react-native';


const propTypes = {
    disabled: PropTypes.bool,
    disabledOnPress: PropTypes.func,
    style: ViewPropTypes.style,
}


const defaultProps = {
    disabled: false,
    disabledOnPress: () => { },
}


const itemPropTypes = {
    onPress: PropTypes.func,
    required: PropTypes.bool,
    numberOfLines: PropTypes.number,
    extra: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    extraIcon: PropTypes.oneOf(['horizontal', 'close']),
    extraTextStyle: ViewPropTypes.style,
    style: ViewPropTypes.style,
    onClose: PropTypes.func,
}


const itemDefaultProps = {
    onPress: () => { },
    required: false,
    numberOfLines: 1,
    extra: null,
    extraIcon: null,
    extraTextStyle: null,
    style: null,
    onClose: () => { },
}


export {
    propTypes,
    defaultProps,
    itemPropTypes,
    itemDefaultProps,
}