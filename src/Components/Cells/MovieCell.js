import React, { PureComponent } from "react";
import { View, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import { Color } from "../../Common/Colors";
import { AppFont } from "../../Common/Fonts";

export default class MovieCell extends PureComponent {
    static propTypes = {
        info: PropTypes.object.isRequired,
        onTouch: PropTypes.func
    };

    static defaultProps = {
        onTouch: () => { }
    };

    renderTitleValue({ title, value }) {
        return (
            <Text style={styles.detailsTitleTextStyle}>{title + ": "}
                <Text style={styles.detailsTextStyle}>{value}</Text>
            </Text>
        )
    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.onTouch} underlayColor={'transparent'}>
                <View style={styles.container}>
                    <Text style={styles.priceTextStyle}>{this.props.info.title}</Text>
                    {this.renderTitleValue({ title: "Name", value: this.props.info.author.username })}
                    {this.renderTitleValue({ title: "Score", value: this.props.info.score })}
                    {this.renderTitleValue({ title: "url", value: this.props.info.url })}
                    {this.renderTitleValue({ title: "Number of comments", value: this.props.info.numComments })}
                </View>
            </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    priceTextStyle: {
        fontSize: AppFont.titleLargeBold.size,
        fontFamily: AppFont.titleLargeBold.name,
        fontWeight: AppFont.titleLargeBold.weight,
        color: Color.themeDark
    },
    detailsTitleTextStyle:{
        fontSize: AppFont.titleBold.size,
        fontFamily: AppFont.titleBold.name,
        fontWeight: AppFont.titleBold.weight,
        color: Color.lightText
    },
    detailsTextStyle: {
        fontSize: AppFont.titleMedium.size,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight,
        color: Color.darkText
    },
    radioView: {
        width: 30,
        justifyContent: "center"
    }
});
