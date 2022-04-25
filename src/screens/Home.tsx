import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native'
import {Input, makeStyles, Text, useTheme,} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import Calendar from "../components/home/Calendar";


const ItemView = (props: any) => {

    const {theme} = useTheme();
    const styles = useStyles(theme);

    const {title, desc} = props


    return (<View
        style={styles.itemContainer}>
        <View style={styles.imageView}/>
        <View style={styles.descTextContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.countText}>{desc}</Text>
        </View>
    </View>)
}


const ClickView = () => {

    const {theme} = useTheme();
    const styles = useStyles(theme);

    const [count, setCount] = useState<number>(1);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (<TouchableOpacity onPress={updateCount}>
        <Text style={styles.titleTextContainer}>Click Text</Text>
        <ItemView title={'Number of button clicks'} desc={count}/>
    </TouchableOpacity>)
}

const SearchText = () => {
    const {theme} = useTheme();
    const styles = useStyles(theme);

    const [searchText, setSearchText] = useState<string>('');

    return (<View>
        <Text style={styles.titleTextContainer}>Click Text</Text>
        <Input
            placeholder='Search'
            onChangeText={setSearchText}
            leftIcon={
                <Icon
                    name='search'
                    size={24}
                    color='#E8E8E8'
                />
            }
            containerStyle={styles.textInputContainer}
        />
        <ItemView title={'Search Text'} desc={searchText}/>
    </View>)

}

const MessageView = () => {
    const {theme} = useTheme();
    const styles = useStyles(theme);


    return (<View>
        <Text style={styles.titleTextContainer}>Message test</Text>
        <View style={{backgroundColor: 'green', borderRadius: 10,}}>
            <Text>
                This is an empty state, to be used for messages and/
            </Text>
        </View>
    </View>)

}


const Home: React.FC = props => {
    const {theme} = useTheme();
    const styles = useStyles(theme);

    const [count, setCount] = useState<number>(1);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <View style={styles.primaryContainer}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.scrollPrimaryView}>
                    <ClickView/>
                    <SearchText/>
                    <MessageView/>
                </View>

                <View>
                    <Calendar />
                </View>

            </ScrollView>
        </View>
    );
};

const useStyles = makeStyles((theme) => ({
    primaryContainer: {
        paddingTop: 40,
        paddingBottom: 20,
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    scrollPrimaryView: {
        paddingHorizontal: 10,
    },
    titleTextContainer: {
        paddingVertical: 10,
        fontWeight: '700',
    },
    descTextContainer: {
        fontWeight: '700',
        marginLeft: 10,
    },
    imageView: {width: 50, height: 50, backgroundColor: '#E8E8E8', borderRadius: 10},
    descContainer: {flex: 1},
    titleText: {},
    countText: {
        color: theme.colors?.grey
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginVertical: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        padding: 10
    }
}));

export default Home;
