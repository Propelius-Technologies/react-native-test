import React from 'react';
import {View} from 'react-native';
import {Calendar as RNCalendar} from 'react-native-calendars';
import {Button, makeStyles} from 'react-native-elements';
import moment from 'moment'

interface CalendarProps {
}

const Calendar: React.FC<CalendarProps> = () => {
    const styles = useStyles();

    const [selected, setSelected] = React.useState<{

    }>({
        [moment().startOf('week').format('YYYY-MM-DD')]: {startingDay: true, color: 'green', textColor: 'white'},
        [moment().endOf('week').format('YYYY-MM-DD')]: {selected: true, endingDay: true, color: 'green', textColor: 'white'},
    });

    console.log({selected})

    return <View style={styles.container}>
        <RNCalendar
            markingType={'period'}
            markedDates={selected}
        />

        <View style={styles.buttonsContainer}>
            <Button  title='Previous' />
            <Button title='Next' />
        </View>
    </View>;
};

const useStyles = makeStyles(theme => ({
    container: {},
    buttonsContainer:{
        flexDirection: 'row',
        alignItems: 'center',

    }
}));

export default Calendar;
