import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    RefreshControl,
    ViewPropTypes,
    StyleSheet,
} from 'react-native';
// import request from "../../utils/request";
// import Toast from "../../utils/Toast";
import PropTypes from "prop-types";
import { themeStyle } from '../../utils/theme';
import {
    propTypes,
    defaultProps,
} from './props-type'


export default class ListView extends Component {
    static propTypes = propTypes
    static defaultProps = defaultProps
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            fetchParams: this.props.fetchParams ? Object.assign(this.props.fetchParams, { page_num: 1, page_size: 10 }) : { page_num: 1, page_size: 10 },
            fetchAllow: true,
            isRefreshing: false,
            ListViewHeight: 0,
        };
        this.listViewRender = this.listViewRender.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData()
    }
    async fetchData() {
        const {
            fetchParams
        } = this.state
        const {
            apiName
        } = this.props
        if (this.state.fetchAllow) {
            this.state.fetchAllow = false
            try {
                const e = await request.get(apiName, fetchParams)
                if (e.code === 200) {
                    const {
                        getNativeData
                    } = this.props
                    this.listViewRender(e)
                    getNativeData(e)
                } else {
                    // Toast.info(e.message)
                }
            } catch (e) {
                this.setState({
                    isRefreshing: false
                })
            }
        }
    }
    listViewRender(e) {
        const {
            changeDataStructurese
        } = this.props
        if (e.data.length < 10) {
            this.state.fetchAllow = false;
        } else {
            this.state.fetchAllow = true;
        }

        if (this.state.fetchParams.page_num === 1) {
            const dataSource = changeDataStructurese ? changeDataStructurese(e.data, []) : e.data;
            this.setState({ dataSource, isRefreshing: false });
        } else {
            const dataSource = changeDataStructurese ? changeDataStructurese(e.data, this.state.dataSource) : [...this.state.dataSource, ...e.data];
            this.setState({ dataSource, isRefreshing: false });
        }
        ++this.state.fetchParams.page_num;
    }
    changeData = (func) => {
        this.setState({
            dataSource: func(this.state.dataSource)
        })
    }
    onRefresh() {
        const {
            fetchParams
        } = this.state
        this.setState({
            isRefreshing: true,
            fetchAllow: true,
            fetchParams: Object.assign({}, fetchParams, { page_num: 1 })
        }, () => {
            this.fetchData()
        })
    }
    manuallyRefresh() {
        this.setState({
            fetchAllow: true,
            fetchParams: Object.assign({}, this.state.fetchParams, { page_num: 1 })
        }, () => {
            this.fetchData()
        })
    }
    render() {
        const {
            dataSource
        } = this.state
        const {
            keyboardDismissMode,
            renderItem,
            style,
            contentContainerStyle,
            ListFooterComponent,
            ListHeaderComponent,
            listEmptyComponent,
            keyExtractor,
            onRefresh,
            progressBackgroundColor,
            tintColor,
        } = this.props
        return (
            <FlatList
                keyboardDismissMode={this.props.keyboardDismissMode}
                ref={(e) => { this.ListView = e }}
                data={dataSource}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={[styles.listView, style]}
                onEndReachedThreshold={600}
                onEndReached={() => {
                    this.fetchData()
                }}
                contentContainerStyle={contentContainerStyle}
                refreshControl={
                    <RefreshControl
                        colors={['#fff']}
                        progressBackgroundColor={progressBackgroundColor}
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => {
                            this.onRefresh()
                            onRefresh()
                        }}
                        tintColor={tintColor}
                        progressViewOffset={30}
                    />
                }
                ListFooterComponent={ListFooterComponent}
                ListHeaderComponent={ListHeaderComponent}
                ListEmptyComponent={() => {
                    return listEmptyComponent({ fetchAllow: this.state.fetchAllow })
                }}
            />
        )
    }
    setFetchParams(e) {
        this.ListView.scrollToOffset({ x: 0, y: 0, animated: false })
        this.setState({
            isRefreshing: true,
            fetchAllow: true,
            fetchParams: Object.assign({}, this.state.fetchParams, e, { page_num: 1 })
        }, () => {
            this.fetchData();
        });
    }
}



const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
});