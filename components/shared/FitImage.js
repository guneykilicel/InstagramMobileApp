import { useState } from "react"
import { Image, Text, View, Dimensions } from "react-native"

function FitImage({ media }) {

    // böyle yapılır ama telefonu biraz yorar

    // const [height, setHeight] = useState(0)
    // const screenWidth = Dimensions.get('window').width
    // Image.getSize(src, (width, height) => {
    //     const ratio = width / screenWidth
    //     setHeight(height/ratio)
    // })

    const width = Dimensions.get('window').width
    const ratio = media.width / width
    const height = media.height / ratio

    return (
        <View>
            <Image
                style={{
                    width,
                    height
                }}
                source={{
                    uri: media.src
                }}
            />
        </View>
    )
}

export default FitImage