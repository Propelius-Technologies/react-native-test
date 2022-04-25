import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Calendar from "../components/home/Calendar";
import {Input, makeStyles, Text, useTheme} from "react-native-elements";


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
            inputContainerStyle={{borderBottomWidth: 0}}
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
        <Text style={styles.titleTextContainer}>Click Text</Text>

        <Text style={styles.titleTextContainer}>Message test</Text>
        <View style={styles.messageContainer}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Text style={styles.messageTitle}>
                        {`This is an empty state, to be used\nfor messages and/or blog articles`}
                    </Text>
                    <Text style={{paddingVertical: 10}}>
                        {`Four lines to describe the message/article to be highlighted. The text is accompanied by an illustration in the top right-hand corner.`}
                    </Text>
                </View>
                <View>
                    <Image source={require('../assets/images/message_contain.png')} style={{width: 100, height: 100}}/>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.notNowButtonContainer}>
                    <Text style={{color: '#B4EDA0', fontWeight: '700'}}>
                        Not now
                    </Text>
                </View>
                <View style={{padding: 10, backgroundColor: '#B4EDA0', borderRadius: 5}}>
                    <Text style={{color: '#FFFFFF', fontWeight: '700'}}>
                        Send Message
                    </Text>
                </View>
            </View>
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
    },

messageContainer: {
    backgroundColor: '#EAFFC9',
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,

},
messageTitle: {
    fontWeight: '700',
},
buttonContainer: {flexDirection: 'row', alignSelf: 'flex-end', paddingTop: 10},
notNowButtonContainer: {padding: 10, backgroundColor: 'transparent', borderRadius: 5}
}));

export default Home;
