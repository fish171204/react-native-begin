import { useState, useReducer } from "react";
import { Button, View, Text, } from "react-native";

const initialTodos = [
    {
        id: 1,
        title: "To do 1",
        complete: false,
    },
    {
        id: 2,
        title: "To do 2",
        complete: false,
    },
    {
        id: 3,
        title: "To do 3",
        complete: false,
    }
]

// todos = state, action = payload(input params from function)
const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((t) => {
                if (action.id === t.id) {
                    return { ...t, complete: !t.complete }
                } else {
                    return t;
                }
            })
        default:
            return state
    }
}

export const UseReducerExample = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id }); // update state
    }
    return (
        <>
            {
                todos.map((todo) => (
                    <View key={todo.id}
                        style={{ backgroundColor: todo.complete ? 'green' : 'white', flexDirection: 'row' }}>
                        <Button title={todo.complete ? "Uncomplete" : "complete"}
                            onPress={() => handleComplete(todo)} />
                        <Text>{todo.title}</Text>
                    </View>
                ))
            }
        </>
    );
}