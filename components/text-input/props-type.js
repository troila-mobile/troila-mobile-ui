import PropTypes from 'prop-types'

const propTypes = {
    showClearButton: PropTypes.bool,
    onChangeText: PropTypes.func,
}


const defaultProps = {
    showClearButton: false,
    onChangeText: () => { },
}

export {
    propTypes,
    defaultProps,
}