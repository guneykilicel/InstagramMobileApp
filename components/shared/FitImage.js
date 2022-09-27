import { Image, Text, View, Dimensions } from "react-native"

function FitImage({src}) {

    const screenWidth = Dimensions.get('window').width
    const ratio = 2108/screenWidth
    const height = 2000/ratio

    return(
        <View>
            <Image
                style={{
                    width: screenWidth,
                    height: height
                }}
                source={{
                    uri: src
                }}  
            />
        </View>
    )
}

export default FitImage