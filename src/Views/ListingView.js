import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import Routes from '../Navigations/Routes';
import MovieCell from '../Components/Cells/MovieCell';
import Loader from '../Components/Loader';
import { getSubreddits } from '../API/APIController';


export default class ListingView extends Component {
    static navigationOptions = {
        headerTitle: "Listing",
    }

    state = {
        subredditsList: [],
        isLoading: false
    }

    renderItem = this.renderItem.bind(this);
    listRefreshing = this.listRefreshing.bind(this);

    componentDidMount() {
        this.getListing()
    }

    getListing() {
        this.setState({ isLoading: true })
        getSubreddits().then((response) => {
            if (response.error === null) {
                this.setState({ subredditsList: response.object })
            }
            this.setState({ isLoading: false })
            console.log(response.object, response.error)
        })
    }

    listRefreshing() {
        this.getListing()
    }


    onTouchItem(item) {
        this.props.navigation.navigate(Routes.Details, { info: item })
    }

    render() {
        console.log(this.state.subredditsList)
        return (
            <SafeAreaView style={styles.container}>
                <Loader isLoading={this.state.isLoading} />
                <FlatList
                    extraData={this.state}
                    data={this.state.subredditsList}
                    renderItem={this.renderItem}
                    refreshing={this.state.isLoading}
                    onRefresh={this.listRefreshing}
                    keyExtractor={(item, index) => item.fullnameId}
                    style={styles.tableView}
                />
            </SafeAreaView>
        );
    }

    renderItem({ item }) {
        return (
            <MovieCell info={item} onTouch={() => this.onTouchItem(item)} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tableView: {
        flex: 1
    },
});
