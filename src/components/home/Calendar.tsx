import React from 'react';
import {View} from 'react-native';
import {Calendar as RNCalendar} from 'react-native-calendars';
import {Button, makeStyles, useTheme} from 'react-native-elements';
import moment from 'moment'

interface CalendarProps {
}

const Calendar: React.FC<CalendarProps> = () => {
    const {theme} = useTheme()
    const styles = useStyles();

    const [selected, setSelected] = React.useState<{

    }>(() => {
        const obj: Record<any, any> = {
            [moment().startOf('week').format('YYYY-MM-DD')]: {selected: true, color: theme.colors?.primary, startingDay: true},
        };

        for(let i = 1; i <= 5; i++){
            obj[moment().startOf('week').add(i, 'days').format('YYYY-MM-DD')] = {selected: true,color: theme.colors?.primary};
        }

        obj[moment().startOf('week').add(6, 'days').format('YYYY-MM-DD')] = {selected: true, color: theme.colors?.primary, endingDay: true};

        return obj
    });

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
