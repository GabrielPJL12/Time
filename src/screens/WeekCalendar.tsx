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
        <View style={styles.body}>
            <View style={styles.headerRow}>
                <Pressable style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>☰</Text>
                </Pressable>
                <Text style={styles.headerText}>October 10th-16th</Text>
                <Pressable style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>+</Text>
                </Pressable>
            </View>
            <View style={styles.viewRow}>
                <Pressable style={styles.viewButton}>
                    <Text>Schedule</Text>
                </Pressable>
                <Pressable style={styles.viewButton}>
                    <Text>Calendar</Text>
                </Pressable>
                <Pressable style={styles.viewButton}>
                    <Text>Profile</Text>
                </Pressable>
            </View>
            <View style={styles.daysOfWeekContainer}>
                {daysOfWeek.map((day) => (
                    <View style={styles.dayOfWeek} key={String(day.year) + "." + String(day.month) + "." + String(day.day)}>
                        <Text>{day.year}/{day.month}/{day.day}</Text>
                        {day.events.map((event) => (
                            <Text key={event}>{event}</Text>
                        ))}
                    </View>
                ))}
            </View>
            <View style={styles.navButtonRow}>
                <Pressable style={styles.navButton} onPress={() => navigation.navigate("SignUp")}>
                    <Text>SignUp</Text>
                </Pressable>
                <Pressable style={styles.navButton} onPress={() => navigation.navigate("DailySchedule")}>
                    <Text>DailySchedule</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    headerRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    headerButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
        padding: 5,
        borderRadius: 5,
        width: 50,
        height: 50,
    },
    headerButtonText: {
        fontSize: 25,
    },
    headerText: {
        fontSize: 30,
    },
    navButtonRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 300,
        backgroundColor: "lightgrey",
        borderRadius: 15,
        padding: 10,
        margin: 20
    },
    navButton: {
        backgroundColor: "white",
        margin: 5,
        padding: 5,
        borderRadius: 5,
        width: 110,
    },
    viewRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    viewButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
        height: "80%",
        width: "30%",
        borderRadius: 40,
    },
    daysOfWeekContainer: {
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        flexWrap: "wrap",
    },
    dayOfWeek: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "40%",
        margin: 5,
        padding: 5,
        borderRadius: 5,
        backgroundColor: "lightgrey",
    },
});

export default WeekCalendar;