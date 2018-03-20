import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Card extends Component{
    render(){
        <View style={styles.containers}>
            <View style={styles.header}>
                <Text style ={styles.headerText}>
                    {this.props.title}
                </Text>
            </View>
            <View style={styles.body}>
                <Text style ={styles.bodyText}>
                    {this.props.title}
                </Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create() {

}