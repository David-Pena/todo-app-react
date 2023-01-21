import React from "react";
import { useState, useCallback, useEffect } from "react";
import { getUser } from "../store/user";
import TaskList from "../components/TaskList";
import WelcomeMessage from "../components/WelcomeMessage";
import Search from "../components/Search";
import AddTask from "../components/AddTask";
import Navbar from '../components/shared/Navbar';
import { DTOTasks, ITask } from "../interfaces/task";
import { IUser } from "../interfaces/user";

const Home = () => {
    const user: IUser = getUser();

    let [tasks, setTasks] = useState<DTOTasks>([]);
    let [query, setQuery] = useState("");
    let [sortBy, setSortBy] = useState("assigned");
    let [orderBy, setOrderBy] = useState("asc");

    const filteredTasks = tasks
        .filter((task) => {
            
            let search = query.toLowerCase();

            return (
                task.assigned.toLowerCase().includes(search) ||
                task.description.toLowerCase().includes(search)
            )
        })
        .sort((a, b) => {
            let order = orderBy === "asc" ? 1 : -1;
            return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
                ? -1 * order
                : 1 * order;
        });

    const fetchData = useCallback(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            });
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const handleAddTask = (newTask: ITask) => {
        setTasks([...tasks, newTask]);
    }

    const handleDeleteTask = (taskId: number) => {
        const idx = tasks.findIndex(task => task.id === taskId)
        tasks.splice(idx, 1)
        setTasks([...tasks])
    }

    const handleCompleteTask = (taskId: number) => {
        const idx = tasks.findIndex(task => task.id === taskId)
        tasks[idx].isDone = true;
        setTasks([...tasks])
    }

    return (
        <div className="h-screen w-full bg-slate-700">
            <div className="rounded-md px-16 py-5 backdrop-blur-md max-sm:px-8">
                <Navbar parent={'home'} />
                <WelcomeMessage username={user.username || 'Unknown'} />
                <AddTask 
                    lastId={tasks.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
                    onAddAppointment={(myTask: ITask) => handleAddTask(myTask)}
                />
                <Search
                    query={query}
                    onQueryChange={(myQuery: string) => setQuery(myQuery)}
                    orderBy={orderBy}
                    onOrderByChange={(myOrder: string) => setOrderBy(myOrder)}
                    sortBy={sortBy}
                    onSortByChange={(mySort: string) => setSortBy(mySort)}
                />
                <TaskList 
                    tasks={filteredTasks}
                    onUpdateTask={(taskId: number) => handleCompleteTask(taskId)}
                    onDelTask={(taskId: number) => handleDeleteTask(taskId)} 
                />
            </div>
        </div>
    );
};

export default Home;
