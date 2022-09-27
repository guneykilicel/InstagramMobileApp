import { ScrollView, View, Text, Image, StyleSheet } from "react-native"
import stories from "../../../data/stories"
import { LinearGradient } from 'expo-linear-gradient';

function Stories() {
    return (
        <View style={styles.stories}>
            <ScrollView 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            >
            {stories.map(story => (
                <View style={styles.story} key={story.id}>
                    <LinearGradient
                        colors={['#DE0046', '#F7A34B']}
                        style={styles.cover}
                    >
                        <Image
                            style={styles.avatar}
                            source={{
                                uri: story.user.avatar
                            }}
                        />
                    </LinearGradient>
                    <Text style={styles.username} numberOfLines={1}>{story.user.name}</Text>
                </View>
            ))}
        </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    stories: {
        paddingVertical: 10,
    },
    story: {
        width: 80,
        marginHorizontal: 3.5
    },
    cover: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    avatar: {
        width: 70,
        height: 70,
        borderWidth: 2.3,
        borderColor: '#fff',
        borderRadius: 60
    },
    username: {
        fontSize: 12
    }
})