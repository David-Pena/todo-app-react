import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import TaskList from "../components/TaskList";
import WelcomeMessage from "../components/WelcomeMessage";
import Search from "../components/Search";
import AddTask from "../components/AddTask";
import { getUser } from "../store";

const Home = () => {
    const navigate = useNavigate();

    let [username, setUsername] = useState('Unknown');
    let [tasks, setTasks] = useState([]);
    let [query, setQuery] = useState("");
    let [sortBy, setSortBy] = useState("assigned");
    let [orderBy, setOrderBy] = useState("asc");

    function goBack() {
        navigate("/");
    }

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

    const getUserData = useCallback(() => {
        const user = getUser();
        setUsername(user.username);
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    useEffect(() => {
        getUserData()
    }, [getUserData])

    const handleDeleteTask = (taskId) => {
        console.log(taskId)
        const idx = tasks.findIndex(task => task.id === taskId)
        tasks.splice(idx, 1)
        setTasks([...tasks])
    }

    return (
        <div className="h-screen w-full bg-slate-700">
            <div className="rounded-md px-16 py-5 backdrop-blur-md max-sm:px-8">
                <BiArrowBack
                    className="text-white mb-3 cursor-pointer text-xl"
                    onClick={goBack}
                />
                <WelcomeMessage username={username} />
                <AddTask 
                    lastId={tasks.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
                    onAddAppointment={myTask => setTasks([...tasks, myTask])}
                />
                <Search
                    query={query}
                    onQueryChange={(myQuery) => setQuery(myQuery)}
                    orderBy={orderBy}
                    onOrderByChange={(myOrder) => setOrderBy(myOrder)}
                    sortBy={sortBy}
                    onSortByChange={(mySort) => setSortBy(mySort)}
                />
                <TaskList tasks={filteredTasks} ontDeleteTask={taskId => handleDeleteTask(taskId)} />
            </div>
        </div>
    );
};

export default Home;
