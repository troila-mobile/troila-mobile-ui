import PropTypes from 'prop-types'
import {
    ViewPropTypes,
} from 'react-native';

const propTypes = {
    show: PropTypes.bool,
    activeComponent: PropTypes.any,
}


const defaultProps = {
    show: false,
    activeComponent: null,
}

export {
    propTypes,
    defaultProps,
}