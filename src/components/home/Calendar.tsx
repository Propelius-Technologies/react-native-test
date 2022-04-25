import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Calendar as RNCalendar} from 'react-native-calendars';
import {Button, makeStyles, Text} from 'react-native-elements';
import moment from 'moment'
import {theme} from "../../theme";

interface CalendarProps {
}

const getMarkedDates = (weekNumber: number) => {
    const obj: Record<string, any> = {
        [moment('2022').add(weekNumber, 'weeks').startOf('week').format('YYYY-MM-DD')]: {selected: true, color: theme.colors?.primary, startingDay: true},
    };

    for(let i = 1; i <= 5; i++){
        obj[moment('2022').add(weekNumber, 'weeks').startOf('week').add(i, 'days').format('YYYY-MM-DD')] = {selected: true,color: theme.colors?.primary};
    }

    obj[moment('2022').add(weekNumber, 'weeks').startOf('week').add(6, 'days').format('YYYY-MM-DD')] = {selected: true, color: theme.colors?.primary, endingDay: true};

    return obj
}

const Calendar: React.FC<CalendarProps> = () => {
    const styles = useStyles();

    const [selectedWeek, setSelectedWeek] = React.useState(+moment().format('w'));
    const [selected, setSelected] = React.useState<{

    }>(() => {
        return getMarkedDates(+moment().format('w'));
    });



    return <View style={styles.container}>
        <RNCalendar
            markingType={'period'}
            markedDates={selected}
        />


        <View style={{flexDirection: 'row', width: '100%', marginVertical: 15}}>
            <TouchableOpacity onPress={() => {
                setSelected(getMarkedDates(selectedWeek - 1));
                setSelectedWeek(selectedWeek - 1);
            }} style={styles.btnContainer}>
                <Text style={styles.btnText}>Previous week</Text>
            </TouchableOpacity>
            <View style={{width: 10, height: 1}}/>
            <TouchableOpacity onPress={() => {
                setSelected(getMarkedDates(selectedWeek + 1));
                setSelectedWeek(selectedWeek + 1);
            }} style={styles.btnContainer}>
                <Text style={styles.btnText}>Next week</Text>
            </TouchableOpacity>
        </View>
    </View>;
};

const useStyles = makeStyles(theme => ({
    container: {},
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
}));

export default Calendar;
