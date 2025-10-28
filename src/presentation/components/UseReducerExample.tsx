import React, { useReducer } from "react";
import { Button, View, Text } from "react-native";
import { Todo } from "../../model/typeTodo";

// Union Type (kiểu hợp).
type Action =
    | { type: "COMPLETE"; id: number }
    | { type: "UNCOMPLETE"; id: number }
    | { type: "ADD"; title: string }
    | { type: "DELETE"; id: number };


const initialTodos: Todo[] = [
    { id: 1, title: "To do 1", complete: false },
    { id: 2, title: "To do 2", complete: false },
    { id: 3, title: "To do 5", complete: false },
];

const reducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((t) =>
                action.id === t.id ? { ...t, complete: !t.complete } : t
            );
        default:
            return state;
    }
};

// onPress -> handleComplete -> dispatch(x,y,z...) -> reducer -> update state
export const UseReducerExample = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo: Todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo) => (
                <View
                    key={todo.id}
                    style={{
                        backgroundColor: todo.complete ? "green" : "white",
                        flexDirection: "row",
                        margin: 4,
                    }}
                >
                    <Button
                        title={todo.complete ? "Uncomplete" : "Complete"}
                        onPress={() => handleComplete(todo)}
                    />
                    <Text style={{ marginLeft: 8 }}>{todo.title}</Text>
                </View>
            ))}
        </>
    );
};
