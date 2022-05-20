import { useState } from "react"
import React from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import Table from "../components/Table"

const Home = () => {
    const [check, setCheck] = useState(false);
    const [state, setState] = useState({
        todo: "",
        description: "",
        date: ""
    });
    const [data, setData] = useState([]);

    const handleonChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const handleonChangeInput = (e) => {
        setCheck(e.target.checked)
        React.createRef()
    }
    const handleOnClick = () => {
        if (state.todo.trim() && state.description.trim()) {
            const items = [...data];
            items.push(state);
            setData(items);
            setState({
                todo: "",
                description: "",
                date: ""
            });
        }
    }
    const handleOnClickInput = () => {
        if (check === false) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }

    const deleteTodoTask = (index) => {
        if (check === true) {
            data.splice(index, 1)
            setData([...data])
        }
    }
    return (
        <>
            <h1 align="center">
                Manage Work With Todo App
            </h1>
            <Input type="text" style={{ marginLeft: "500px", width: "30%" }}
                name="todo" onChange={handleonChange}
                placeholder="Write your todo" value={state.todo}
            />
            <br />

            <Input type="text" style={{ marginLeft: "500px", width: "30%" }}
                name="description" onChange={handleonChange}
                placeholder="Description of your todo"
                value={state.description} />
            <br />

            <Input type="date"
                name="date" style={{ marginLeft: "500px", width: "30%" }}
                onChange={handleonChange}
                value={state.date} />
            <br />

            <Button onClick={handleOnClick}
                style={{ marginLeft: "500px", width: "30%" }}
                name=" Add todo's" />

            <Table data={data}
                checkBox={<Input type="checkbox" value={check} checked={check} onChange={handleonChangeInput} onClick={handleOnClickInput} />}
                del={deleteTodoTask} check={check}
            />
        </>
    )
}
export default Home;