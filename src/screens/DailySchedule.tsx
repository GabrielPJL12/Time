import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Task = {
    id: number;
    name: string;
    completionTime: string;
    completed: boolean;
}

function DailySchedule({ navigation }: any): JSX.Element {
    const [tasks, setTasks] = React.useState<Task[]>([
        { id: 1, name: "Task 1", completionTime: "11:00am", completed: false },
        { id: 2, name: "Task 2", completionTime: "12:15pm", completed: false },
        { id: 3, name: "Task 3", completionTime: "1:30pm", completed: false },
        { id: 4, name: "Task 4", completionTime: "2:45pm", completed: false },
        { id: 5, name: "Task 5", completionTime: "4:00pm", completed: false },
        { id: 6, name: "Task 6", completionTime: "5:15pm", completed: false },
        { id: 7, name: "Task 7", completionTime: "6:30pm", completed: false },
        { id: 8, name: "Task 8", completionTime: "7:45pm", completed: false },
        { id: 9, name: "Task 9", completionTime: "9:00pm", completed: false },
        { id: 10, name: "Task 10", completionTime: "10:15pm", completed: false }
    ]);

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