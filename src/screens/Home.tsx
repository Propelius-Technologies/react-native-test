import React, {useState} from 'react';
import {Image, ScrollView, SectionList, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Calendar from "../components/home/Calendar";
import {Input, makeStyles, Text, useTheme} from "react-native-elements";


const temp = {
    title: 'Bananas',
    desc: 'Grocery Ape',
    wight: '2'
}

const DATA = [
    {
        title: "Food",
        data: [
            {
                title: 'Bananas',
                desc: 'Grocery Ape',
                wight: '2',
                unit: 'kg'
            },
            {
                title: 'Sugar',
                desc: 'Candy shop',
                wight: '1.5',
                unit: 'kg'
            },
            {
                title: 'Tuna',
                desc: 'Temple of the catch',
                wight: '155',
                unit: 'kg'
            }]
    },
    {
        title: "Technology",
        data: [
            {
                title: 'Polystation',
                desc: 'Stairsmart',
                wight: '300',
                unit: 'Qt'
            },
        ]
    },
];

const ItemView = (props: any) => {

    const {theme} = useTheme();
    const styles = useStyles(theme);
    const {title, desc, borderHide, wight = '', unit = ''} = props

    return (<View
        style={[styles.itemContainer, borderHide && {borderWidth: 0}]}>
        <View style={styles.imageView}/>
        <View style={styles.descTextContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.countText}>{desc}</Text>
        </View>
        {wight.length > 0 &&
        <Text style={styles.titleText}>{wight}<Text style={styles.countText}>{` ${unit}`}</Text></Text>}
    </View>)
}


const ClickView = () => {

    const {theme} = useTheme();
    const styles = useStyles(theme);

    const [count, setCount] = useState<number>(1);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (<View style={styles.searchContainer}>
        <Text style={styles.titleTextContainer}>Click Text</Text>
        <TouchableOpacity onPress={updateCount} style={styles.btnContainer}>
            <Text style={styles.btnText}>Click Me</Text>
        </TouchableOpacity>
        <ItemView title={'Number of button clicks'} desc={count}/>
    </View>)
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


const Item = ({title}: { title: string }) => {
    const {theme} = useTheme();
    const styles = useStyles(theme);

    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const ListTextView = () => {
    const {theme} = useTheme();
    const styles = useStyles(theme);

    return (
        <View style={styles.searchContainer}>
            <Text style={styles.titleTextContainer}>List Test</Text>
            <View style={styles.itemContainer}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index.toString()}
                    renderItem={({item}) => <ItemView title={item.title} desc={item.desc} borderHide={true}
                                                      wight={item.wight} unit={item.unit}/>}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
        </View>)

}

const MessageView = () => {
    const {theme} = useTheme();
    const styles = useStyles(theme);


    return (<View style={styles.searchContainer}>
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

const DividerView = () => {
    const {theme} = useTheme();
    const styles = useStyles(theme);

    return <View style={styles.dividerContainer}/>
}


const Home: React.FC = props => {
    const {theme} = useTheme();
    const styles = useStyles(theme);
    return (
        <View style={styles.primaryContainer}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.scrollPrimaryView}>
                    <ClickView/>
                    <SearchText/>
                    <MessageView/>

                    <View>
                        <Calendar />
                    </View>

                    <ListTextView/>
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
        paddingHorizontal: 15,
    },
    titleTextContainer: {
        paddingVertical: 10,
        fontWeight: '700',
    },
    descTextContainer: {
        fontWeight: '700',
        marginLeft: 10,
        flex: 1,
    },
    imageView: {width: 40, height: 40, backgroundColor: '#E8E8E8', borderRadius: 10},
    descContainer: {flex: 1},
    titleText: {
        color: '#4A4A4A',
        fontWeight: '700'
    },
    countText: {
        color: '#C2C2C2',
        fontWeight: '500'
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginTop: 5,
        marginBottom: 15,
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
     notNowButtonContainer: {padding: 10, backgroundColor: 'transparent', borderRadius: 5},
     btnContainer: {
         height: 55,
         flex: 1,
         backgroundColor: '#FFA978',
         borderRadius: 5,
         justifyContent: 'center',
         alignItems: 'center',
         marginTop: 5,
         marginBottom: 15,
     },
     btnText: {
         color: 'white',
         fontWeight: '600',

     },
     searchContainer: {
         marginTop: 30,
     },
     dividerContainer: {
         height: 2,
         width: '100%',
         backgroundColor: '#E8E8E8',
         marginVertical: 10,
     },

     item: {
         backgroundColor: "#f9c2ff",
         padding: 20,
         marginVertical: 8
     },
     header: {
         fontSize: 13,
         color: "#808080",
         fontWeight: '600'
     },
     title: {
         fontSize: 24
     }
}));

export default Home;
