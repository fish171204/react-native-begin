import { useCallback, useState } from "react"
import { Text, Button } from "react-native"
import Todos from "./TodoList"

const initTodos: string[] = []

export const UseCallbackExample = () => {
    const [todos, setTodos] = useState(initTodos)
    const [count, setCount] = useState(0)

    console.log("UseCallbackExample was re-rendered")
    const increment = () => {
        setCount((c) => c + 1)
    }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New todo" + count])
    }, [todos])

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <Text>Count: {count} </Text>
            <Button title="+" onPress={() => increment()} />
        </>
    )
}


/*
    useCallback:
    - Là hook giúp "ghi nhớ" (memoize) một hàm giữa các lần re-render.
    - Cú pháp: useCallback(callback, [dependencies])
        + callback: hàm cần ghi nhớ.
        + dependencies: mảng giá trị phụ thuộc, chỉ khi giá trị trong mảng thay đổi thì callback mới được tạo lại.
    - Tác dụng:
        + Giữ nguyên tham chiếu của hàm giữa các lần render → tránh việc component con bị re-render không cần thiết.
        + Thường dùng kết hợp với React.memo() để tối ưu performance.
    - Trong ví dụ này:
        + useCallback giúp tránh tạo lại hàm addTodo mỗi lần UseCallbackExample re-render.
        + Chỉ khi dependency (todos) thay đổi thì addTodo mới được tái tạo.
        + Khi nhấn nút "+" → chỉ UseCallbackExample re-render (Todos không bị render lại).
*/