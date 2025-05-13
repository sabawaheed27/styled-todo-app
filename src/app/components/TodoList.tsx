"use client"

import {useState, useEffect} from "react"
import styled from "styled-components"

type Todo = {
    text: string;
    completed: boolean;
}

export default function TodoList(){
    const [todos, setTodos]= useState<Todo[]>([]);
    const [editText, setEditText]= useState("")
    const [editIndex, setEditIndex] = useState<number | null>(null)
    const [newTodoText, setNerToDoText] =useState("")
    const [showCompleted, setShowCompleted]= useState(false)
}



