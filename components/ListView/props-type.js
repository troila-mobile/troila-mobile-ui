import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    View,
    Text,
} from 'react-native';


const propTypes = {
    listEmptyComponent: PropTypes.func,
    getNativeData: PropTypes.func,
    onRefresh: PropTypes.func,
    contentContainerStyle: ViewPropTypes.style,
    changeDataStructurese: PropTypes.func,
    progressBackgroundColor: PropTypes.string,
    tintColor: PropTypes.string,
}


const defaultProps = {
    listEmptyComponent: ({ fetchAllow }) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 15, color: '#666', marginTop: 15 }}>
                    {fetchAllow ? '正在获取数据' : '暂无数据'}
                </Text>
            </View>
        )
    },
    getNativeData: () => { },
    onRefresh: () => { },
    contentContainerStyle: null,
    changeDataStructurese: null,
    progressBackgroundColor: '#0099FF',
    tintColor: '#0099FF',
}

export {
    propTypes,
    defaultProps,
}