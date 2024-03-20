import React, {useState} from "react";



function Todo () {

    const [input, setInput] = useState("");
    const [taskList, setTaskList] = useState([]);

    function handleInput(event) {
        setInput(event.target.value);
    }

    function handleTask(event) {
        setTaskList([...taskList, input]);
        event.preventDefault();
    }

    function createList(task) {
        return (
            <li>{task}</li>
        )
    }



    return (
        <div>
            <form>
                <input
                    onChange={handleInput}
                    type="text"
                    placeholder="Add to Todo List"
                    value={input}
                />
                <button onClick={handleTask} type="submit">Add</button>
            </form>
            <ol>
                {taskList.map(createList)}
            </ol>
        </div>
    );
}
export default Todo;