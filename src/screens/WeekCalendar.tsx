import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

type CalendarDay = {
    year: number;
    month: number;
    day: number;
    events: string[];
};

function WeekCalendar({ navigation }: any): JSX.Element {
    // assuming you have a function that generates the days and events for the current week
    const daysOfWeek: CalendarDay[] = [
        { year: 2021, month: 10, day: 10, events: ["event1", "event2"] },
        { year: 2021, month: 10, day: 11, events: ["event3", "event4"] },
        { year: 2021, month: 10, day: 12, events: ["event5", "event6"] },
        { year: 2021, month: 10, day: 13, events: ["event7", "event8"] },
        { year: 2021, month: 10, day: 14, events: ["event9", "event10"] },
        { year: 2021, month: 10, day: 15, events: ["event11", "event12"] },
        { year: 2021, month: 10, day: 16, events: ["event13", "event14"] },
    ];

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