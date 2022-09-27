import { ScrollView, StyleSheet, Text, View } from "react-native"
import Header from "./components/Header"
import Stories from "./components/Stories"
import posts from "../../data/posts"
import Post from "../../components/shared/Post"

function Home() {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <Stories />
            {posts.map(post => <Post post={post} />)}
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})