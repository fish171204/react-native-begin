import { useCallback, useMemo, useState } from "react"
import Todos from "./TodoList"
import { Text, Button } from "react-native"

const initTodo: string[] = []

export const UseMemoExample = () => {
    const [todos, setTodos] = useState(initTodo)
    const [count, setCount] = useState(0)

    let startTime = Date.now()
    const result = useMemo(() => expensiveCalculation(count), [count])
    let endTime = Date.now()
    console.log("calculation time: ", endTime - startTime)

    const increment = () => {
        setCount((c) => c + 1)
    }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New todo" + count])
    }, [todos])

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <>
                <Text>Count: {count} </Text>
                <Text>Result: {result} </Text>
                <Button title="+" onPress={() => increment()} />
            </>
        </>
    )
}

const expensiveCalculation = (num: number) => {
    console.log("Calculating...")
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
}

/*
    useMemo:
    - Là hook giúp "ghi nhớ" (memoize) kết quả của một phép tính tốn kém (expensive computation).
    - Cú pháp: useMemo(callback, [dependencies])
        + callback: hàm cần tính toán.
        + dependencies: mảng giá trị phụ thuộc, chỉ khi giá trị trong mảng thay đổi thì callback mới chạy lại.
    - Trả về: giá trị đã được memoized (kết quả tính toán được lưu lại).
    - Dùng khi:
        + Có phép tính nặng hoặc phức tạp mà không muốn chạy lại mỗi lần render.
        + Cần tối ưu hiệu suất component.
    - Trong ví dụ này:
        + expensiveCalculation(count) chỉ được gọi lại khi count thay đổi.
        + Nhờ đó tránh việc tính toán lại vô ích khi state khác (như todos) thay đổi.
*/ 