import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
} from 'react-native';

export default class TestContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('title'),
    })
    render() {
        const {
            navigation
        } = this.props
        const {
            view
        } = navigation.state.params
        return (
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f9',
    }
})