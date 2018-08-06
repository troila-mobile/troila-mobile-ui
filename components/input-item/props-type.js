import PropTypes from 'prop-types'
import {
    ViewPropTypes,
} from 'react-native';

const propTypes = {
    style: ViewPropTypes.style,
    inputStyle: PropTypes.any,
    placeholder: PropTypes.string,
}


const defaultProps = {
    style: null,
    inputStyle: null,
    placeholder: '',
}

export {
    propTypes,
    defaultProps,
}