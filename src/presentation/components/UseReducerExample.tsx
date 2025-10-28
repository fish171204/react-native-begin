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

/*
    useReducer:
    - Là hook giúp quản lý state phức tạp (nhiều hành động, nhiều bước cập nhật) thay cho useState.
    - Nhận vào 2 tham số: reducer (hàm xử lý state) và initialState (giá trị ban đầu).
    - Trả về [state, dispatch]:
        + state: giá trị hiện tại.
        + dispatch: hàm dùng để gửi action vào reducer.
    - Cấu trúc hoạt động vd này:
        onPress → dispatch(action) → reducer(state, action) → return state mới → component re-render.
    - Dùng khi:
        + State có nhiều loại cập nhật khác nhau (add, delete, toggle...).
        + Muốn code gọn, tách logic cập nhật state ra khỏi component.
*/