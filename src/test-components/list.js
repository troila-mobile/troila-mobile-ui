import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Button,
} from 'react-native';
import { List, Text } from 'troila-mobile-ui';

const {
    Item
} = List

export default class Example extends Component {
    render() {
        return (
            <View style={styles.container}>
                <List>
                    <Item>List.Item</Item>
                    <Item
                        required={true}
                        numberOfLines={1}
                        extraIcon={'horizontal'}
                    >
                        You can also declare that a prop is an instance of a class. This uses JS's instanceof operator
                    </Item>
                    <Item
                        numberOfLines={2}
                        extraIcon={'close'}
                        onClose={()=>{
                            alert('this a close')
                        }}
                    >
                        You can also declare that a prop is an instance of a class. This uses JS's instanceof operator
                    </Item>
                    <Item
                        extra={
                            <Image
                                source={require('../assets/list_1.png')}
                                style={{width:20}}
                            />
                        }
                        onPress={()=>{
                            alert('onPress the item')
                        }}
                    >
                        List.Item
                    </Item>
                    <Item
                        extra={
                            <Button
                                title={'extra'}
                                onPress={()=>{}}
                            />
                        }
                        onPress={() => {
                            alert('onPress the item')
                        }}
                    >
                        <View>
                            <Image
                                source={require('../assets/list_2.png')}
                                style={{width:80,height: 80,}}
                            />
                            <Text style={{marginTop: 5,color:'red'}}>Troila</Text>
                        </View>
                    </Item>
                </List>
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