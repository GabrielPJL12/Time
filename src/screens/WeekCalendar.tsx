import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import database from '../database/database.json'

type CalendarDay = {
    year: number;
    month: number;
    day: number;
    events: string[];
};

function WeekCalendar({ navigation }: any): JSX.Element {
    // assuming you have a function that generates the days and events for the current week
    const daysOfWeek: CalendarDay[] = database.days_of_week;

    return (
        <View>
            <View>
                <Pressable>
                    <Text>☰</Text>
                </Pressable>
                <Text>October 10th-16th</Text>
                <Pressable>
                    <Text>+</Text>
                </Pressable>
            </View>
            <View>
                <Pressable>
                    <Text>Schedule</Text>
                </Pressable>
                <Pressable>
                    <Text>Calendar</Text>
                </Pressable>
                <Pressable>
                    <Text>Profile</Text>
                </Pressable>
            </View>
            <View>
                {daysOfWeek.map((day) => (
                    <View key={String(day.year) + "." + String(day.month) + "." + String(day.day)}>
                        <Text>{day.year}/{day.month}/{day.day}</Text>
                        {day.events.map((event) => (
                            <Text key={event}>{event}</Text>
                        ))}
                    </View>
                ))}
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate("SignUp")}>
                    <Text>SignUp</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("DailySchedule")}>
                    <Text>DailySchedule</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default WeekCalendar;