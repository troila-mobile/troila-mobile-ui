import PropTypes from 'prop-types'
import {
    ViewPropTypes,
} from 'react-native';

const propTypes = {
    label: PropTypes.array,
    activeIndex: PropTypes.number,
    activeColor: PropTypes.string,
}


const defaultProps = {
    label: [],
    activeIndex: 0,
    activeColor: 'blue',
}

export {
    propTypes,
    defaultProps,
}