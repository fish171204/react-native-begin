import { useState } from "react"

const initTodo: string[] = []

export const UseMemoExample = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(initTodo)
}