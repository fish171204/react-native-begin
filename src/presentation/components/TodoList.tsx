import { memo } from "react"
import { Text, Button, StyleSheet, View } from "react-native"

type TodoProps = {
    todos: string[],
    addTodo: any
}
const Todos = (todoProps: TodoProps) => {
    console.log("Todos was re-rendered")
    return (
        <View style={styles.ali}>
            <Text>My todos</Text>
            {
                todoProps.todos.map((todo, index) => {
                    return <Text key={index}>{todo}</Text>
                })
            }

            <Button title="Add todo" onPress={() => todoProps.addTodo()} />
        </View>
    )
}

const styles = StyleSheet.create({
    ali: { paddingTop: 100 }
})

// Bọc memo() khi dùng useCallback
export default memo(Todos)