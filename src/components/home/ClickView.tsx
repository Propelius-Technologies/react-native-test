import React, {useState} from 'react';
import {
    Button as RNEButton,
    ButtonProps as RNEButtonProps,
    Icon, makeStyles, Text, useTheme,
} from 'react-native-elements';
import {View} from "react-native";



const ClickView = () => {
    const { theme } = useTheme();
    const styles = useStyles(theme);

    const [count, setCount] = useState<number>(1);


    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <View>
        <Text>Click text</Text>
            {/*<Button onPress={updateCount}>Click me</Button>*/}
            <View>
                <View style={styles.imageView} />
<View style={styles.titleText}>
    <Text style={styles.titleText}></Text>

</View>
            </View>
        </View>
    );
};

const useStyles = makeStyles((theme) => ({
    primaryContainer: {
        borderRadius: 10,
    },
    imageView : {width : 50, height : 50, backgroundColor : 'gray'},
    descContainer : {flex :1},
    titleText : {}
}));

export default ClickView;
