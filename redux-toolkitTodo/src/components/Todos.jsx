import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/Todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const startEdit = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.text);
    };

    const handleEditSave = (id) => {
        if (editText.trim()) {
            dispatch(updateTodo({ id, text: editText }));
        }
        setEditingId(null);
        setEditText('');
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Todos</h2>
            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded"
                    >
                        {editingId === todo.id ? (
                            <input
                                value={editText}
                                onChange={e => setEditText(e.target.value)}
                                className="flex-1 mr-2 px-2 py-1 border rounded"
                            />
                        ) : (
                            <span className="text-gray-700">{todo.text}</span>
                        )}
                        <div className="flex space-x-2">
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                            >
                                X
                            </button>
                            {editingId === todo.id ? (
                                <button
                                    onClick={() => handleEditSave(todo.id)}
                                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => startEdit(todo)}
                                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                >
                                    Edit
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos