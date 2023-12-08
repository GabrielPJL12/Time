import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import database from '../database/database.json'

type Task = {
    id: number;
    name: string;
    completionTime: string;
    completed: boolean;
}

let weekDictionary: {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

let monthDictionary: {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
}


function DailySchedule({ navigation }: any): JSX.Element {
    const [tasks, setTasks] = useState<Task[]>(database.tasks);
    const [weekday, setWeekday] = useState("Sunday");
    const [month, setMonth] = useState("October");
    const [day, setDay] = useState(10);

    const toggleTaskCompletion = (id: number) => {
        setTasks(tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task
        )
    )}

    const handlePress = (weekday: number) => {
        if (weekday === 0) {
            setWeekday("Sunday");
            setDay(10);
        }
        else if (weekday === 1) {
            setWeekday("Monday");
            setDay(11);
        }
        else if (weekday === 2) {
            setWeekday("Tuesday");
            setDay(12);
        }
        else if (weekday === 3) {
            setWeekday("Wednesday");
            setDay(13);
        }
        else if (weekday === 4) {
            setWeekday("Thursday");
            setDay(14);
        }
        else if (weekday === 5) {
            setWeekday("Friday");
            setDay(15);
        }
        else if (weekday === 6) {
            setWeekday("Saturday");
            setDay(16);
        }
    }

    return (
        <View style={styles.body}>
            <View>
                <Text style={styles.title}>{weekday}, {month} {day}</Text>
                <View style={styles.weekdayButtonRow}>
                    <Pressable style={styles.weekdayButton} onPress={() => handlePress(0)}>
                        <Text>Sun</Text>
                    </Pressable>
                    <Pressable style={styles.weekdayButton} onPress={() => handlePress(1)}>
                        <Text>Mon</Text>
                    </Pressable>
                    <Pressable style={styles.weekdayButton} onPress={() => handlePress(2)}>
                        <Text>Tue</Text>
                    </Pressable>
                    <Pressable style={styles.weekdayButton} onPress={() => handlePress(3)}>
                        <Text>Wed</Text>
                    </Pressable>
                    <Pressable style={styles.weekdayButton} onPress={() => handlePress(4)}>
                        <Text>Thu</Text>
                    </Pressable>
                    <Pressable style={styles.weekdayButton} onPress={() => handlePress(5)}>
                        <Text>Fri</Text>
                    </Pressable>
                    <Pressable style={styles.weekdayButton} onPress={() => handlePress(6)}>
                        <Text>Sat</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <Text style={styles.title}>My Schedule</Text>
                {tasks.map(task => (
                    <View style={styles.taskContainer} key={task.id}>
                        <View>
                            <Text>{task.name}</Text>
                            <Text>{task.completionTime}</Text>
                        </View>
                        <Pressable style={styles.taskPressable} onPress={() => toggleTaskCompletion(task.id)}>
                            <Text>{task.completed ? '✓' : '○'}</Text>
                        </Pressable>
                    </View>
                ))}
            </View>
            <View style={styles.navButtonRow}>
                <Pressable style={styles.navButton} onPress={() => navigation.navigate("SignUp")}>
                    <Text>SignUp</Text>
                </Pressable>
                <Pressable style={styles.navButton} onPress={() => navigation.navigate("WeekCalendar")}>
                    <Text>WeekCalendar</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    weekdayButtonRow: {
        flexDirection: "row",
    },
    weekdayButton: {
        margin: 5,
        padding: 5,
        borderRadius: 5,
        backgroundColor: "lightgrey",
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
        padding: 5,
        borderRadius: 5,
        backgroundColor: "lightgrey",
        width: 300,
    },
    taskPressable: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 5,
        borderRadius: 5,
        width: 30,
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
});

export default DailySchedule;