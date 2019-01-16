import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";
import { Color } from "../Common/Colors";
import { AppFont } from "../Common/Fonts";

export default class CommentView extends PureComponent {
    static propTypes = {
        info: PropTypes.object.isRequired
    };

    renderTitleValue({ title, value }) {
        return (
            <Text style={styles.detailsTitleTextStyle}>{title + ": "}
                <Text style={styles.detailsTextStyle} numberOfLines={0}>{value}</Text>
            </Text>
        )
    }

    render() {
        return (
            <View style={styles.commentView}>
                {this.renderTitleValue({ title: "author", value: this.props.info.author.username })}
                {this.renderTitleValue({ title: "comment", value: this.props.info.body })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commentView: {
        padding: 10,
    },
    detailsTitleTextStyle: {
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
});
