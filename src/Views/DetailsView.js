import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';

import MovieCell from '../Components/Cells/MovieCell';
import CommentView from '../Components/CommentView';

export default class DetailsView extends Component {
    static navigationOptions = {
        headerTitle: "Details"
    }

    state = {
        info: this.props.navigation.state.params.info
    }

    

    renderCommentView() {
        return this.state.info.comments.map((item, i) => {
            return (
                <CommentView key={i} info={item} />
            )
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <MovieCell info={this.state.info} />
                    {this.renderCommentView()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
