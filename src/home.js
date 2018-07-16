import React, { Component, PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Image,
} from 'react-native';
import config from './test-components'


class ListItem extends PureComponent {
    render() {
        const {
            name,
            view,
            navigation,
        } = this.props
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button1}
                onPress={()=>{
                    navigation.navigate('TestContainer',{
                        title: name,
                        view,
                    })
                }}
            >
                <Text style={styles.text3}> {name} </Text>
                <Image
                    source={require('./assets/arrow.png')}
                    style={styles.image1}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
        );
    }
}



export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    animated
                />
                <Text style={styles.text1}>Troila Mobile Ui</Text>
                <Text style={styles.text2}>卓朗科技移动端react-native组件库</Text>
                {
                    config.map((e,i)=>(
                        <ListItem
                            key={i}
                            {...e}
                            navigation={this.props.navigation}
                        />
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f9',
        paddingHorizontal: 15,
    },
    text1: {
        fontSize: 21,
        marginVertical: 27,
    },
    text2: {
        fontSize: 13,
        color: 'rgba(0,0,0,0.75)',
        marginBottom: 27,
    },
    button1:{
        paddingLeft: 15,
        paddingRight: 10,
        flexDirection: 'row',
        backgroundColor:'#fff',
        paddingVertical: 15,
    },
    text3:{
        flex:1,
        fontSize:17,
    },
    image1:{
        height:20
    },
});