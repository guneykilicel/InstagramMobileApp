import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { Dots, Heart, Share, Bookmark, Comment } from "../../Icons"
import FitImage from "./FitImage"
import React from "react";
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

function Post({ post }) {
    return (
        <View style={styles.post} key={post.id}>
            <View style={styles.header}>
                <View style={styles.username}>
                    <Image
                        source={{
                            uri: post.user.avatar
                        }}
                        style={styles.avatar}
                    />
                    <Text style={styles.title}>{post.user.name}</Text>
                </View>
                <Dots size={16} fill="#262626" />
            </View>
            <FitImage src={post.image} />

            <View style={styles.content}>
                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                        <TouchableOpacity style={styles.action} activeOpacity={0.6}>
                            <Heart size={24} fill="#222" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity={0.6}>
                            <Comment size={24} fill="#222" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity={0.6}>
                            <Share size={24} fill="#222" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Bookmark size={23} fill="#222" />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 5 }}>
                    <Text style={styles.likes}>{post.likes} likes</Text>
                </View>
                <ReadMore numberOfLines={2}
                    seeMoreStyle={{
                        color: '#999',
                        fontWeight: '600'
                    }}
                    expandOnly={true}
                    // seeLessStyle={{
                    //     color: '#999',
                    //     fontWeight: '600'
                    // }}
                    seeMoreText="more"
                // seeLessText="less"
                    wrapperStyle={{
                        marginBottom: 7,
                    }}

                >
                        <Text style={styles.user}>{post.user.name}</Text>
                        {`  `}
                        {post.description}
                </ReadMore>
                {post.comments > 0 && (
                    <TouchableOpacity activeOpacity={0.6} style={{ paddingBottom: 7 }}>
                        <Text style={styles.comments}>View all {post.comments} comments</Text>
                    </TouchableOpacity>
                )}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>

                    <Text style={styles.translation}> · See Translation</Text>
                </View>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    post: {
        marginBottom: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 49,
        paddingHorizontal: 15,
    },
    username: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 9
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
    },
    content: {
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    leftActions: {
        flexDirection: 'row'
    },
    action: {
        marginRight: 12
    },
    likes: {
        fontWeight: '600'
    },
    user: {
        fontWeight: '600',
    },
    comments: {
        opacity: 0.5,
        fontWeight: '500'
    },
    date: {
        fontSize: 13,
        opacity: 0.5,
    },
    translation: {
        fontWeight: '600',
        fontSize: 13,
        // marginLeft: 10
    },
})