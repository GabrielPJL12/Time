import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import database from '../database/database.json'

type Task = {
    id: number;
    name: string;
    completionTime: string;
    completed: boolean;
}


function DailySchedule({ navigation }: any): JSX.Element {

    const [tasks, setTasks] = React.useState<Task[]>(database.tasks);

    const toggleTaskCompletion = (id: number) => {
        setTasks(tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task
        )
    )}

    return (
        <View style={styles.body}>
            <View>
                <Text style={styles.today}>Today, August 2</Text>
                <View>
                    {/* Weekdays buttons */}
                    <Pressable>
                        <Text>Monday</Text>
                    </Pressable>
                    {/* ... other weekdays */}
                </View>
            </View>
            <View>
                <Text>My Schedule</Text>
                {tasks.map(task => (
                    <View key={task.id}>
                        <View>
                            <Text>{task.name}</Text>
                            <Text>{task.completionTime}</Text>
                        </View>
                        <Pressable onPress={() => toggleTaskCompletion(task.id)}>
                            <Text>{task.completed ? '✓' : '○'}</Text>
                        </Pressable>
                    </View>
                ))}
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate("SignUp")}>
                    <Text>SignUp</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("WeekCalendar")}>
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

    today: {
        fontSize: 20,
    },
});

export default DailySchedule;