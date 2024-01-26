# React tutorial
Tutorial on React  
[Link](https://www.youtube.com/watch?v=U2Wltnv-doo&list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&ab_channel=PedroTech)

# Prerequisites
You need to install these before beginning
- Code editor, such as [VS Code](https://code.visualstudio.com/download)
- [Node.js](https://code.visualstudio.com/download)  

To check if everything is installed, type these commands in terminal inside VS Code:
- `npm -v`
- `node -v`  

# Creating a project
- Open folder in VS Code
- Open terminal
- Type command: `npx create-react-app .`
- > If you want to create it inside new folder, type the name of the folder instead of *period (.)*., for example: `npx create-react-app my-website`  

After creating app, you will see some options:
- npm start
- npm run build
- npm test
- npm run eject

## Delete files
Some files are not necessary right now. In folder *src*, keep only these files:
- App.css
    - *Keep it as it is*
- App.js
``` JSX
import "./App.css";

function App() {
    return (
        <div className="App">
            
        </div>
    );
}

export default App;
```
- index.js
``` JSX
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

# How does it work
In *index.js* we can see `root.render()`  
Basically it renders everything inside this function in element with id *root* (`document.getElementById("root")`)  
Inside this render function, we can see `<App/ >`, which is App function inside *App.js*  

You can create Hello World app by modifying *App.js* like this:
``` JSX
function App() {
    return (
        <div className="App">
            Hello World
        </div>
    );
}
```

# Variables
``` JSX
function App() {
    const name = "Peter";
    return (
        <div> 
            <p>{name}</p>
        </div>
    );
}
```
```JSX
function App() {
    const name = <h1>Peter</h1>;
    return (
        <div> 
            {name}
            {name}
            {name}
        </div>
    );
}
```
``` JSX
function App() {
    const name = <h1>Peter</h1>;
    const age = <h2>20</h2>
    const email = <h3>peter@gmail.com</h3>
    const user = (
        <div>
            {name}
            {age}
            {email}
        </div>
    )

    return (
        <div>
            {user}
            {user}
            {user}
        </div>
    );
}
```  
Better way to do this is by using components

# Components
``` JSX 
const GetName = () => {
    return "Peter"
}

const GetNameComponent = () => {
    return <h1>Peter</h1>
}
```
Difference between component and ____ is that the component returns a HTML element *(h1, p, div)*  
**Component name has to start with capital letter**

``` JSX
function App() {
    return (
        <div>
            <User />
            <User />
            <User />
        </div>
    );
}

const User = () => {
    return (
        <div>
            <h1>Peter</h1>
            <h2>20</h2>
            <h3>peter@gmail.com</h3>
        </div>
    )
}
```

## Props
Function (component) properties  
``` JSX
function App() {
    return (
        <div>
            <User name="Peter" age={20} email="peter@gmail.com"/>
            <User name="Andrej" age={21} email="andrej@gmail.com"/>
            <User name="Gusto" age={22} email="gusto@gmail.com"/>
        </div>
    );
}

const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <h3>{props.email}</h3>
        </div>
    )
}
```  
Another example  
``` JSX
function App() {
    return (
        <div>
            <Job salary={90000} position="Senior SDE" company="Amazon"/>
            <Job salary={12000} position="Junior SDE" company="Google"/>
            <Job salary={10000} position="Project Manager" company="Netflix"/>
        </div>
    );
}

const Job = (props) => {
    return (
        <div>
            <p>{props.salary}</p>
            <p>{props.position}</p>
            <p>{props.company}</p>
        </div>
    )
}
```

Each component should be in separate file, as shown [later](#components-1)

# CSS
`import "./App.css"`  

Works just like normal css, but with little difference in giving class names:
``` JSX
<div className="App">
    <h1 className="fruit">Apple</h1>
</div>
```
## Inline styling
We have to treat css like an object:  
``` JSX
<div style={{color:"red", backgroundColor:"black"}}></div>
```
Notice that we put value of *color* in parenthesis and used camel case instead of hyphen in *backgroundColor*

## CSS modules
You can change name of css file to *App.module.css* an treat it like an object  
``` JSX
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.App}>
            <h1 className={styles.name}>Apple</h1>
        </div>
    );
}
```

# Conditional rendering
## Ternary operators
Using ternary operator which is basically if else statement  
*condition* ***?*** *true* ***:*** *false*  
**?** is basically **if**  
**:** is basically **else**  

`age >= 18 ? console.log("Good") : console.log("Not good")`  
This line basically goes like this: if the age is greater than or equals 18, print "Good", else print "Not good"  

```JSX
function App() {
    const age = 18
    return (
        <>
            {age >= 18 ? <h1>Over age</h1> : <h1>Under age</h1>}
        </>
    );
}
```

## &&
This symbol works like if statement *(not if-else like in previous example)*  
``` JSX
const showButton = true
return (
    <>
        {showButton && <button>This is a button</button>}
    </>
);
```
Button will be shown only if variable showButton is true. If it was set to false, it will not be shown

# Lists
Using map method on array
``` JSX
function App() {
    const names = ["Peter", "Jake", "Jessica", "Mike", "Dustin"]
    return (
        <>
            {names.map((name, key) => {
                return <h1 key={key}>{name}</h1>
            })}
        </>
    );
}
```

More complex example - objects inside of list
```JSX
function App() {
    const users = [
        {name: "Peter", age: 21},
        {name: "Jake", age: 25},
        {name: "Jessica", age: 45},
        {name: "Mike", age: 13},
        {name: "Dustin", age: 32},
    ]

    return (
        <>
            {users.map((user, key) => {
                return <div key={key}>
                    <h1>{user.name}</h1>
                    <h2>{user.age}</h2>
                </div>
            })}
        </>
    );
}
```

## Components
We can do this using component  
Each component should be in separate file, to make our code look cleaner  

*User.js*
```JSX
export const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
        </div>
    )
}
```


*App.js*
```JSX
import { User } from "./User.js"

function App() {
    const users = [
        {name: "Peter", age: 21},
        {name: "Jake", age: 25},
        {name: "Jessica", age: 45},
        {name: "Mike", age: 13},
        {name: "Dustin", age: 32},
    ]

    return (
        <>
            {users.map((user, key) => {
                return <User name={user.name} age={user.age} key={key}/>
            })}
        </>
    );
}
```
Another example  
*Planets.js*
```JSX
export const Planets = (props) => {
    return (
        <div>
            {props.isGasPlanet && <h1>{props.name}</h1>}
        </div>
    )
}
```
*App.js*
```JSX
import { Planets } from "./Planets.js"

function App() {
    const planets = [
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Neptune", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: true},
    ]

    return (
        <>
            {planets.map((planet, key) => {
                return <Planets name={planet.name} isGasPlanet={planet.isGasPlanet} key={key}/>
            })}
        </>
    );
}
```

For more about components, look [above](#components)

# UseState
UseState is one of hooks in React  
Think of state as a variable  

Right now, if we click the button, nothing happens
``` JSX
function App() {
    let age = 0
    const increaseAge = () => {
        age += 1
    }

    return (
        <div>
            <h2>{age}</h2>
            <button onClick={increaseAge}>Increase age</button>
        </div>
    );
}
```
We have to use **useState**
```JSX
import { useState } from "react";

function App() {
    const [age, setAge] = useState(0) 
    /* const [variable, function] = useState(defaultValue) */

    const increaseAge = () => {
        setAge(age + 1)
        /* changing value of variable here by calling function*/
    }

    return (
        <div>
            <h2>{age}</h2>
            <button onClick={increaseAge}>Increase age</button>
        </div>
    );
}
```

When we type something into input box, it shows bellow
```JSX
import { useState } from "react";

function App() {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange}/>
            <h2>{inputValue}</h2>
        </div>
    );
}
```

Show/Hide text on button click
```JSX
function App() {
    const [showText, setShowText] = useState(true)

    return (
        <div>
            <button onClick={() => {setShowText(!showText)}}>Show/Hide</button>
            {showText && <h1>Hi, my name is Peter</h1>}
        </div>
    );
}
```

Change text color on click
```JSX
function App() {
    const [textColor, setTextColor] = useState(true)

    return (
        <div>
            <button onClick={() => {setTextColor(!textColor)}}>Change color</button>
            <button onClick={() => {setTextColor(!textColor)}}>Change color to {textColor ? "red" : "black"}</button>
            <h1 style={textColor ? {color:"black"} : {color:"red"}}>Hi, my name is Peter</h1>
        </div>
    );
}
```

Counter app: three buttons, one increases the value, one decreases the value, one sets the value to zero
```JSX
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => {setCount(count + 1)}}>Increase</button>
            <button onClick={() => {setCount(count - 1)}}>Decrease</button>
            <button onClick={() => {setCount(0)}}>Set to Zero</button>
            <h1>{count}</h1>
        </>
    );
}
```

# TODO list
*Task.js*

```JSX
export const Task = (props) => {
    return (
        <div>
            <h2 style={{color: props.completed ? "green" : "black"}}>{props.taskName}</h2>
            <button onClick={() => props.completeTask(props.id)}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}
```

*App.js*

```JSX
function App() {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false
        }
        setTodoList([...todoList, task])
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id))
        /*
        const newTodoList = todoList.filter((task) => {
            if (task === taskName){
                return false
            } else {
                return true
            }
        })
        setTodoList(newTodoList) 
        */
    }

    const completeTask = (id) => {
        setTodoList(todoList.map((task) => {
            return task.id === id ? {...task, completed: true} : task
        }))
    }

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add task</button>
            </div>
            <hr/>
            <div className="list">
                {todoList.map((task) => {
                    return (
                        <Task 
                            taskName={task.taskName} 
                            id={task.id} 
                            completed={task.completed} 
                            deleteTask={deleteTask} 
                            completeTask={completeTask}
                        />
                    )
                })}
            </div>
        </div>
    );
}
```

## My version
```JSX
import { useState } from "react";

function App() {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")
    
    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            name: newTask,
            done: false
        }
        setTodoList([...todoList, task])
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => {return id === task.id ? false : true}))
    }

    const doneTask = (id) => {
        setTodoList(todoList.map((task) => {return task.id === id ? {...task, done: true} : task}))
    }


    return (
        <>
            <div>
                <input onChange={(event) => {setNewTask(event.target.value)}}></input>
                <button onClick={() => {addTask()}}>Add task</button>
            </div>
            <div>
                {todoList.map((task) => {
                    return (<>
                        <h3 style={{color: task.done ? "green" : "black"}}>{task.name}</h3>
                        <button onClick={() => doneTask(task.id)}>Done</button>
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </>)
                })}
            </div>
        </>
    )
}
```

# Component lifecycle
What happens to component from "birth" to "death"  

3 stages:  
1. **Mounting stage** - component appearing  
2. **Updating stage**  
3. **Unmounting stage** - component disappearing  

Simple app - we click on button, text box appears, you can type inside of it, typed text appears on screen as you type  
*App.js*
```JSX
function App() {
    const [showText, setShowText] = useState(false)

    return (
        <>
            <button onClick={() => setShowText(!showText)}>Show text</button>
            {showText && <Text />}
        </>
    )
}
```
*Text.js*
```JSX
export const Text = () => {
    const [text, setText] = useState("")

    return (<div>
        <input onChange={(event) => {setText(event.target.value)}}></input>
        <h1>{text}</h1>
    </div>)
}
```
On this example we can see all 3 "stages of life" of div:  
1. component mounts when we click on button  
2. component updated in real time as we type into the input box  
3. component unmounts when we click on button again  

Understanding this is important in UseEffect hook

# UseEffect
*Text.js*
```JSX
useEffect(() => {
    console.log("Component mounted")
})
```
The console logs "component mounted" every time we either mount or update this component  
Basically its called every time the component is used

## Controlling specific elements/state changes 
We can add array after the function  
In the array we can specify what props or state changes we want to trigger the use effect

### Mounting component
Empty array 
```JSX
useEffect(() => {
    console.log("Component mounted")
}, [])
```


### Mounting and updating component
Array with what we want to update
```JSX
useEffect(() => {
    console.log("Component mounted")
}, [text])
```

### Unmounting component
Return function inside useEffect
```JSX
useEffect(() => {
    console.log("Component mounted")
    return () => {
        console.log("Component unmounted")
    }
}, [])
```

# React StrictMode
StrictMode is a way of React to kind of help us write better code  
When a component is mounted, it unmounts it and mounts back to check for any memory leaks

# Fetch data from API
*"API is some sort of code that was written and that you're using in your project but it's not part of your project"*  
*"Fetching data means that we want to make a request to website to get whatever information this url returns"*  

## Using fetch function
```JSX
fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
})
```
This function takes data from the url  
Then it converts to JavaScript object  
Then it logs to console  

## Using Axios 
`npm install axios`  
```jsx
Axios.get("https://catfact.ninja/fact")
.then((response) => {console.log(response.data)})
```
If we wanted to show it like this, it keeps on refreshing forever...  
To stop it, we can use useEffect hook, as we learnt before
```jsx
const [catFact, setCatFact] = useState()

    useEffect(() => {
        Axios.get("https://catfact.ninja/fact").then((response) => {
            setCatFact(response.data.fact)
        })
    }, [])

    return (
        <>
            <p>{catFact}</p>
        </>
    )
```
We also want to generate a new fact on button click, we can do it like this
```jsx
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
    const [catFact, setCatFact] = useState()

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact").then((response) => {
            setCatFact(response.data.fact)
        })
    }
    useEffect(() => {
        fetchCatFact()
    }, [])

    return (
        <>
            <button onClick={fetchCatFact}>Generate Cat Fact</button>
            <p>{catFact}</p>
        </>
    )
}
```

## Predicting age

```jsx
function App() {
    const [name, setName] = useState("")
    const [predicted, setPredicted] = useState(null)

    const fetchData = () => {
        Axios.get("https://api.agify.io/?name=" + name).then((response) => {
            setPredicted(response.data)
        })
    }

    return (
        <>
            <input placeholder="Enter your name:" onChange={(event) => {setName(event.target.value)}}></input>
            <button onClick={fetchData}>Predict your age</button>
            <h3>Name: {predicted?.name}</h3>
            <h1>Predicted age: {predicted?.age}</h1>
            <p>Count: {predicted?.count}</p>
            {/*By putting ? there, we make it show the value only if it exists*/}
            
        </>
    )
}
```

There are two way to input url with variable:
```jsx
"https://api.agify.io/?name=" + inputName
`https://api.agify.io/?name=${inputName}`
```
## Generate an excuse
```jsx
function App() {
    const categories = [
        "family", "office", "children", 
        "college", "party", "funny", 
        "unbelievable", "developers", "gaming"
    ]
    const [excuse, setExcuse] = useState("")
    
    const fetchData = (item) => {
        axios.get("https://excuser-three.vercel.app/v1/excuse" + item).then((res) => {
            setExcuse(res.data[0])
        })
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <>
            <h1>Generate an excuse</h1>
            <button onClick={() => fetchData("")}>Random</button>
            {categories.map((item) => {
                return <button onClick={() => {fetchData("/" + item)}}>{capitalizeFirstLetter(item)}</button>
            })}
            <h3>Excuse: {excuse.excuse}</h3>
            <p>Category: {excuse.category}</p>
            <p>ID: {excuse.id}</p>
        </>
    )
}
```
# React Router DOM
A way for our app to have "multiple pages"  
`npm install react-router-dom`

*App.js*
```jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";


function App() {
    return (
        <>
            <Router>
                <Navbar/ >
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/menu" element={<Menu />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<><h1>404 error</h1><p>Page not found</p></>} />
                </Routes>
                <footer>Footer</footer>
            </Router>
        </>
    )
}

export default App;

```
*Navbar.js*
```jsx
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (<>
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Contact">Contact</Link>
    </>)
}
```

*pages/Home.js*
```jsx
export const Home = () => {
    return <h1>Home page</h1>
}
```
*pages/Menu.js*
```jsx
export const Menu = () => {
    return <h1>Menu</h1>
}
```
*pages/Home.js*
```jsx
export const Contact = () => {
    return <h1>Contact</h1>
}
```

# State management
Imagine having username, which you want to share between pages  
You also want to be able to change username in one of the pages  

You can do something like this...  

1. Create username state inside *App.js*  
2. Pass *setUsername* to *Profile.js* using props  
3. Pass *setUsername* to *ChangeProfile.js* using props  
4. Edit username in *ChangeProfile.js*  

...but it gets pretty messy and we are passing it without using it (step 2)

## UseContext
Using Context hook we can determine which components will be able to use specific variable/function/state  
*App.js*
```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { createContext, useState } from "react";

export const AppContext = createContext()
/* Creating Context called AppContext */

function App() {
    const [username, setUsername] = useState("Cypo")

    return (
        <AppContext.Provider value={{username, setUsername}}>
        {/* Making it able to reach all pages by putting it there; given variables will be usable */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Profile" element={<Profile />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<><h1>404 error</h1><p>Page not found</p></>} />
                </Routes>
                <footer>Footer</footer>
            </Router>
        </AppContext.Provider>
    )
}
```

*pages/Home.js*
```jsx
import { useContext } from "react"
import { AppContext } from "../App"

export const Home = () => {
    const {username} = useContext(AppContext)
    /* importing variable */
    return (
        <>
            <h1>Home page</h1>
            <p>Hello {username}</p>
        </>
    )
}

```

*pages/Profile.js*
```jsx
import { useContext } from "react"
import { AppContext } from "../App"
import { ChangeProfile } from "../components/ChangeProfile"

export const Profile = () => {
    const {username} = useContext(AppContext)

    return (
        <>
            <h1>{username}'s Profile</h1>
            <ChangeProfile />
        </>
    )
}

```

*components/ChangeProfile.js*
```jsx
import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"

export const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState("")
    const {setUsername} = useContext(AppContext)

    return (
        <>
            <input placeholder="New username" onChange={(event) => {setNewUsername(event.target.value)}} />
            <button onClick={() => {setUsername(newUsername)}}>Change username</button>
        </>
    )
}

```
# React Query
Different (better) way to handle fetched data  
`npm install @tanstack/react-query`  

*App.js*
```jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
    const client = new QueryClient()

    return (
        <QueryClientProvider client={client}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Profile" element={<Profile />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<><h1>404 error</h1><p>Page not found</p></>} />
                </Routes>
                <footer>Footer</footer>
            </Router>
        </QueryClientProvider>
    )
}

export default App;
```
To stop refetching data on every window focus, we can configure it like this:
```jsx
const client = new QueryClient({
        defaultOptions: {
            /* queries - something with making data - request
            mutations - something with editing data - update, delete*/
            queries: {
                refetchOnWindowFocus: false
            }
        }
    })
```

*Home.js*
```jsx
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const Home = () => {
    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })

    if (isLoading){
        return <h2>Loading...</h2>
    } else if (isError){
        return <h2>Oh no, error error</h2>
    }

{
/* The first arguments:
data: variable, so you don't have to create a state
    we can add ": catData" to the end if we want to give it a different name in case of having multiple datas for example
isLoading: creates a boolean variable which is set to true while it's loading
isError: same as before, but with error
refetch: a function which refetches the data when called
*/
}

    return (
        <>
            <h1>Home page</h1>
            <p>{catData?.fact}</p>
            <button onClick={refetch}>Reload</button>
        </>
    )
    
}
```

# React forms
`npm install react-hook-form`  
Functionality to forms  

`npm install yup`  
Validation of given information  

`npm install @hookform/resolvers`  
Integration between previous libraries  

```jsx
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export const Form = () => {
    /* specify the format(schema) of form */
    const schema = yup.object().shape({
        fullName: yup.string().required("Full Name is Required"),
        /* you are specifying that name has to be a string and it's required */
        /* inside function parameters, you can type error message */
        email: yup.string().email("Invalid email").required("Email is Required"),
        age: yup.number().positive("Age must be a positive number").integer("Age must be a whole number").typeError("Age must be a number").required("Age is Required"),
        /* you can add .min(18) for minimal age */
        password: yup
            .string()
            .min(4, "Password must be at least 4 characters long")
            .max(20, "Password can't be longer than 20 characters")
            .test('has-uppercase', 'Password must have at least one uppercase letter', (value) => /[A-Z]/.test(value))
            .test("has-lowercase", "Password must have at least one lowercase letter", (value) => /[a-z]/.test(value))
            .test("has-number", "Password must have at least one number", (value) => /\d/.test(value))
            .required("Password is Required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required("Confirm Password is required")
        /* 
        we want confirmPassword to be the same as password 
        so we put a oneOf function there
        it checks if confirmPassword is the same as something from given array
        in the array, we put a reference of password, and null, to tell it it's everything
        */
    })

    /* making the integration between form and yup */
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
        /* here you can do whatever you want with the data you just got */
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name" {...register("fullName")}/>
            {errors.fullName && <p>{errors.fullName?.message}</p>}
            {/* If the error message is present, you want to show it */}
            <input type="text" placeholder="Email" {...register("email")}/>
            {errors.email && <p>{errors.email?.message}</p>}
            <input type="number" placeholder="Age" {...register("age")}/>
            {errors.age && <p>{errors.age?.message}</p>}
            <input type="password" placeholder="Password" {...register("password")}/>
            {errors.password && <p>{errors.password?.message}</p>}
            <input type="password" placeholder="Confirm password" {...register("confirmPassword")}/>
            {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
            <input type="submit"></input>
        </form>
    )
}

```

# Custom hooks
Hook is a function that allows you to abstract a lot of logic in React  
It's recommended to use a hook when you have a lot of logic, or if you want to use it multiple times  

There are 3 rules:
1. It has to start with *use*
2. It has to be *'called?'* inside of component
3. It has to be at the highest level of component

*App.js*
```jsx
import "./App.css";
import { useToggle } from "./useToggle";

function App() {
    const [isVisible, toggle] = useToggle()
    const [isVisible2, toggle2] = useToggle()

    return (
        <>
            <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <h1>Hidden text</h1>}
            <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
            {isVisible2 && <h1>Hidden text</h1>}
        </>
    )
}

export default App;
```

*useToggle.js*
```jsx
import { useState } from "react"

export const useToggle = (initialValue = false) => {
    const [state, setState] = useState(initialValue)
    const toggle = () => {
        setState(!state)
    }

    return [state, toggle]
    /* 
    you can also return as object, but renaming returned variables/functions works like this:
    state: isVisible
    */
}
```

## Fetching data using custom hooks

*Cat.js*
```jsx
import { useGetCat } from "./useGetCat"

export const Cat = () => {
    const {data, isCatLoading, refetchData} = useGetCat()

    if (isCatLoading){return <h1>Loading...</h1>}

    return (
        <>
            <button onClick={refetchData}>Refresh</button>
            <h1>{data?.fact}</h1>
        </>
    )
}
```

*useGetCat.js*
```jsx
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetCat = () => {
    const { data, refetch, isLoading: isCatLoading, error } = useQuery(["cat"], async () => {
        return axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })

    const refetchData = () => {
        alert("data refetch")
        refetch()
    }

    return { data, refetchData, isCatLoading }
}
```

## Counter using custom hooks
*Counter.js*
```jsx
import { useCounter } from "./useCounter"

export const Counter = () => {
    const {value, increase, decrease, reset} = useCounter()

    return (
        <>
            <h1>{value}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}
```

*useCounter.js*
```jsx
import { useState } from "react"

export const useCounter = (initValue = 0) => {
    const [value, setValue] = useState(initValue)

    const increase = () => {setValue(value + 1)}
    const decrease = () => {setValue(value - 1)}
    const reset = () => {setValue(0)}

    return {value, increase, decrease, reset}
}
```

# Types in React with PropTypes
`npm install prop-types`
```jsx
import propTypes from "prop-types"

export const Person = (props) => {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <h2>Email: {props.email}</h2>
            <h2>Age: {props.age}</h2>
            <h2>This person {props.isMarried ? "is" : "is not"} married</h2>
            <h2>Friends: </h2>
            {props.friends.map((friend) => {return <h3>{friend}</h3>})}
        </>
    )
}

Person.propTypes = {
    name: propTypes.string,
    email: propTypes.string,
    email: propTypes.number,
    isMarried: propTypes.bool,
    friends: propTypes.arrayOf(propTypes.string)
}
```
If we gave it a prop with wrong type, we will get an error in console  
If you don't want to use typescript, you can use proptypes, but typescript is better

# Types in React with Typescript
First, you need to create new Typescript React app  
Delete all current files or start in new folder  
`npx create-react-app . --template typescript`  

After the install finishes, you can keep only following files inside *./src* folder:
- App.css
- App.tsx
- index.tsx *remove unused stuff like imports here*
- react-app-env.d.ts

With Typescript, if we have a variable with wrong type, it will **break the app** to enforce you to fix the mistake  

## Giving type to variable 
`const name: string = "Peter"`  

## Giving type to props using interface
```tsx
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    /* friends: Props[]; */
    country?: string; /* optional */
}
/* "interface is a way to describe the shape of an object" */

export const Person = (props: Props) => {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <h2>Email: {props.email}</h2>
            <h2>Age: {props.age}</h2>
            <h2>This person {props.isMarried ? "is" : "is not"} married</h2>
            <h2>Friends: </h2>
            {props.friends.map((friend: string) => {return <h3>{friend}</h3>})}
            <h2>Country: {props.country} </h1>
        </>
    )
}
```
## Giving type to state
`const [name, setName] = useState<string>("Peter")`

## Giving type to function
`const getAge = (name: string): number => {return 99}`  
Function which takes string as input and returns number

## Enum
*"Enum is a way to create some sort of type that can only be few options"*  
For example, if we wanted to pass a country, which can only be Brazil, Canada or France

*App.tsx*
```tsx
import React from "react";
import { Person, Country } from "./components/Person";

function App() {
    return (
        <>
            <Person 
                name="Peter"
                email="peter@gmail.com"
                age={20}
                isMarried={true}
                friends={["Jake", "Jessica", "Jerry"]}
                country={Country.Brazil}
            />

        </>
    );
}

export default App;
```

*Person.tsx*
```tsx
import { useState } from "react";

interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Country;
}
/* "interface is a way to describe the shape of an object" */

export enum Country {
    Brazil = "Brazil",
    Canada = "Canada",
    France = "France"
}

export const Person = (props: Props) => {
    const [name, setName] = useState<string>("")
    return (
        <>
            <h2>Name: {props.name}</h2>
            <h2>Email: {props.email}</h2>
            <h2>Age: {props.age}</h2>
            <h2>This person {props.isMarried ? "is" : "is not"} married</h2>
            <h2>Friends: </h2>
            {props.friends.map((friend: string) => {return <h3>{friend}</h3>})}
            <h2>Country: {props.country}</h2>
        </>
    )
}

```
# Redux Toolkit
`npm install @reduxjs/toolkit`  
`npm install react-redux`  

**Redux** is used to manage states (so we can use it on more routes)  
**Redux toolkit** is an easier way to use Redux  
**Store** is a place where you're gonna group all of your different global states inside of your application. We create a file for it. It takes a reducer to configure a store  
**Reducer** is a function that takes in an action and previous state of the application. Then it will return a new state. Basically a function that will describe how our states interact with each other. *You can create them in different files.* Reducer will come from slice  
**Slice** is a way for Redux toolkit to automatically generate all the different parts of our reducers  
**Provider** specifies which components will have access to states  

*App.tsx*
```tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/contact">Contact</Link>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/contact" element={<Contact />}/>
                    </Routes>
                </Router>
            </Provider>
        </>
    );
}

export default App;
```

*Login.tsx*
```tsx
import { useState } from "react"
import { login, logout } from "../store"
import { useDispatch, useSelector } from "react-redux"
/* modifying states, getting states */

export const Login = () => {
    const [newUsername, setNewUsername] = useState<string>("")

    const dispatch = useDispatch()
    const username = useSelector((state: any) => state.user.value.username)

    return (
        <>
            <h1>Login</h1>
            <input placeholder="Username" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setNewUsername(event.target.value)}}></input>
            <button onClick={() => dispatch(login({username: newUsername}))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
            <h1>{username}</h1>
        </>
    )
}
```

*store.ts*
```tsx
import { configureStore, createSlice } from "@reduxjs/toolkit"

interface UserStateValue {username: string}
interface UserState {value: UserStateValue}

const initialState = {value: {username: ""}} as UserState

const userSlice = createSlice({
    /* name of a state */
    name: "user",
    initialState: initialState,
    /* functions, that are gonna take in previous state of this application and action, and its gonna return the new value of a state */
    reducers: {
        /* state is gonna be initialState (variable at top) */
        /* action is something like a prop we want to pass in */
        /* payload is basically the data we want to pass in */
        login: (state: UserState, action) => {
            state.value = action.payload
        },
        logout: (state: UserState) => {
            state.value = initialState.value
        }
    }
})

/* actions are reducers in userSlice */
export const {login, logout} = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})
```

# Fullstack project
Simple project, where you can create account, login, post stuff,...  

Start with empty project  
`npx create-react-app . --template typescript`

After the install finishes, you can keep only following files inside *./src* folder:
- App.css
- App.tsx *remove unused stuff like imports here*
- index.tsx *remove unused stuff like imports here*
- react-app-env.d.ts

`npm install react-router-dom`

## Firebase
Firebase is a service created by Google, which facilitates a lot of stuff (backend)  

Go to [Firebase webpage](https://www.firebase.google.com)  
Login with your Google account  
Go to console -> Create new project  
Give it a name, agree with stuff you have to agree  
You can turn off Google analytics and hit Create  
Click Continue when it's ready  

Register new web app by clicking the *</>* symbol *(says web)*  
Give it a name, don't set up hosting for now (will be added later), and hit Register app  

Follow given instructions:  
`npm install firebase`  
Paste following text to *./src/config/firebase.ts*  
```ts
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAfvxlsyVS-VTr5dt-T-DxJw7Iz6pNzZE",
    authDomain: "react-course-e3e2f.firebaseapp.com",
    projectId: "react-course-e3e2f",
    storageBucket: "react-course-e3e2f.appspot.com",
    messagingSenderId: "416779274905",
    appId: "1:416779274905:web:697e1ed25868b155834608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

Next we want to set up authentication - click on authentication in firebase website  
Hit Get started  
Hit Google  
Hit Enable  
Choose support email  
Hit save  
Add following to *./src/config/firebase.ts*  
`import { getAuth, GoogleAuthProvider } from "firebase/auth"`  
`export const auth = getAuth(app)`  
`export const provider = new GoogleAuthProvider()`  

We also want to install following  
`npm install react-firebase-hooks`  

## Part 1
We have simple app with homepage and login page  
We can sign in using google and we can sign out  
Navbar will show username and profile picture if user is logged in  

*App.tsx*
```tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import { Navbar } from "./navbar";
import { Main } from "./pages/main";
import { Login } from "./pages/login";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
```

*Navbar.tsx*
```tsx
import { Link } from "react-router-dom"
import { auth } from "./config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

export const Navbar = () => {
    /* automatically update user information */
    const [user] = useAuthState(auth)

    const signUserOut = async () => {
        await signOut(auth)
    }

    return (
        <nav className="navbar">
            <div className="navbarLinks">
                <Link to="/">Home</Link>
                {user ? 
                    <Link to="/createpost">Create Post</Link> :
                    <Link to="/login">Login</Link>
                }
            </div>
            <div className="navbarUser">
                {user && (
                        <>
                            <p>{auth.currentUser?.displayName}</p>
                            <img src={auth.currentUser?.photoURL || ""}/>
                            <button onClick={signUserOut}>Log Out</button>
                        </>
                    )
                }
            </div>
        </nav>
    )
}
```

*Login.tsx*
```tsx
import { auth, provider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        /* redirect home */
        navigate("/")
    }

    return (
        <>
            <h1>Login</h1>
            <p>Sign in with Google to continue</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )
}
```

*main.tsx*
```tsx
export const Main = () => {
    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}
```

## Part 2
`npm install react-hook-form`
`npm install yup`
`npm install @hookform/resolvers`
### Firestore Database
On Firebase website, go to Build -> Firestore database  
Hit Create database  
- Production mode  
    - If the app is meant to production
    - Use this, if you want to deploy your app, so people can use it
    - You have to specify, who can read and write to the database
        - Go to Rules tab
        - Change `...allow read, write: if false` to following:  
        `allow write, delete, update: if request.auth != null && request.auth.uid == request.resource.data.userId;`  
        `allow read: if request.auth != null`  
        - Hit Publish
- Test mode 
    - Quicker to set up
    - You have to convert it to production after 30 days, otherwise you'll lose access to it  
We're gonna use production mode  

Hit Start collection  
Give it an ID (in out case it's gonna be "posts"), then hit next  

Creating first document  
Auto ID to give it random ID  
Create field for everything you want in your post:  
- title - string - Breaking news
- description - string - New meteor shower coming
- username - string - Peter
- id - string - eluihanjknkajen
Hit save  

In Part 2 we added a functionality to create posts, which are stored in Firestrore database  

*App.tsx*
```tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import { Navbar } from "./navbar";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Createpost } from "./pages/createpost/createpost";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/createpost" element={<Createpost />} />
                    <Route path="*" element={<>
                        <h1>404 :(</h1>
                        <p>Page not found</p>
                    </>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
```

*./src/config/firebase.ts*
```tsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAfvxlsyVS-VTr5dt-T-DxJw7Iz6pNzZE",
    authDomain: "react-course-e3e2f.firebaseapp.com",
    projectId: "react-course-e3e2f",
    storageBucket: "react-course-e3e2f.appspot.com",
    messagingSenderId: "416779274905",
    appId: "1:416779274905:web:697e1ed25868b155834608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
```

*./src/pages/createpost/createpost.tsx*
```tsx
import { CreateForm } from "./createform"

export const Createpost = () => {
    return (
        <>
            <h1>Create new post</h1>
            <CreateForm />
        </>
    )
}

```

*./src/pages/createpost/createform.tsx*
```tsx
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"

interface CreateFormData {
    title: string;
    description: string
}

export const CreateForm = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const schema = yup.object().shape({
        title: yup.string().required("Title required"),
        description: yup.string().required("Description required"),

    })

    const { register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db, "posts")

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            /*
            title: data.title,
            description: data.description,
            */
            ...data, /* use all from data, you don't have to type 2 lines of code */
            username: user?.displayName,
            userId: user?.uid
        })
        navigate("/")
    }

    return (
        <form className="createPost" onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..." {...register("title")}/>
            {errors.title?.message && <p>{errors.title.message}</p>}
            <textarea placeholder="Description..." {...register("description")}/>
            {errors.description?.message && <p>{errors.description.message}</p>}
            <input type="submit" />
        </form>
    )
}
```
## Part 3
Added ability to see posts, like/dislike them  

*main.tsx*
```tsx
import { getDocs, collection } from "firebase/firestore"
import { db } from "../../config/firebase"
import { useEffect, useState } from "react"
import { Post } from "./post"

export interface Post {
    id: string;
    userId: string;
    username: string;
    title: string;
    description: string;
}

export const Main = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null)
    const postsRef = collection(db, "posts")

    const getPosts = async () => {
        const data =  await getDocs(postsRef)
        setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[])
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <h1 className="homepage">Home Page</h1>
            {postsList?.map((post) => (<Post post={post}/>))}
        </>
    )
}
```

*post.tsx*
```tsx
import { addDoc, getDocs, collection, query, where, deleteDoc, doc } from "firebase/firestore"
import { Post as IPost } from "./main"
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect, useState } from "react"


interface Props {
    post: IPost
}

interface Like {
    likeId: string;
    userId: string
}

export const Post = (props: Props) => {
    const { post } = props
    const [user] = useAuthState(auth)
    
    const [likes, setLikes] = useState<Like[] | null>(null)

    const likesRef = collection(db, "likes")

    const likesDoc = query(likesRef, where("postId", "==", post.id))

    const getLikes = async () => {
        const data = await getDocs(likesDoc)
        setLikes(data.docs.map((doc) => ({userId: doc.data().userId, likeId: doc.id})))
    }
    const addLike = async () => {
        try {
            const newDoc = await addDoc(likesRef, {
                userId: user?.uid,
                postId: post.id
            })
            if (user){
                setLikes((prev) => 
                    prev 
                        ? [...prev, {userId: user.uid, likeId: newDoc.id}] 
                        : [{userId: user.uid, likeId: newDoc.id}]
                )
            }
        } catch (err) {
            console.log(err)
        }
    }

    const removeLike = async () => {
        try {
            const likeToDeleteQuery = query(
                likesRef,
                where("postId", "==", post.id),
                where("userId", "==", user?.uid)
            )
            const likeToDeleteData = await getDocs(likeToDeleteQuery)
            const likeId = likeToDeleteData.docs[0].id
            const likeToDelete = doc(db, "likes", likeId)
            await deleteDoc(likeToDelete)
            if (user){
                setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId))
            }
        } catch (err) {
            console.log(err)
        }
    }

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid)

    useEffect(() => {
        getLikes()
    }, [])

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>- {post.username} -</p>
            <div className="likes">
                <button onClick={hasUserLiked ? removeLike : addLike}>
                    {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
                </button>
                <p>{likes ? likes.length : 0}</p>
            </div>
        </div>
    )
}
```

*App.css*
```css
* {
    font-family: sans-serif;
    color: white;
    padding: 0;
    margin: 0;
}

.App {
    text-align: center;
    background-color: black;
    min-height: 100vh;
}

button {
    background-color: white;
    padding: 0.5em 1em;
    color: black;
    border-radius: 0.5em;
    border: 0;
}
button:hover {
    background-color: #eee;
}
button:active {
    background-color: #ddd;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: aqua;
    margin-bottom: 1em;
    padding: 1em 2em;
}

.navbar a, .navbar p {
    color: black;
    font-weight: 600;
}

.navbarLinks{
    display: flex;
    gap:1em;
}

.navbarUser {
    display: flex;
    align-items: center;
    gap: 0.5em;
    
}

.navbarUser img {
    width: 2.5em;
    border-radius: 100%;
}

.createPost {
    margin: 2em auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
    padding: 2em;
    background-color: aquamarine;
    width: 50vw;
    border-radius: 1em;
}

.createPost input, .createPost textarea {
    background-color: white;
    color: black;
    border: 0;
    padding: 0.5em 1em;
    font-size: 1em;
    border-radius: 0.5em;
    width: 25em;
}

.createPost textarea {
    height: 10em;
    max-width: 25em;
    min-width: 25em ;
}

.createPost input::placeholder, .createPost textarea::placeholder {
    color: #222;
}

.createPost p {
    font-weight: 600;
    margin: 0.5em;
    color: black;
    border-bottom: 2px solid black;
}

.createPost P::after {
    content: "!";
}

.post {
    background-color: aquamarine;
    margin: 1em auto;
    width: 75vw;
    border-radius: 1em;
}

.post * {
    color: black;
}

.post h2, .post p {
    padding: 0.5em;
}

.post button {
    margin-bottom: 0.5em;
    padding: 0.25em;
    font-size: 2em;
    background-color: transparent;
}
.post button:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
.post button:active {
    background-color: rgba(0, 0, 0, 0.2);
}

.likes {
    display: flex;
    justify-content: center;
    align-items: center;
}

.likes p {
    font-size: 1.25em;
}
```
# Deploying
Deploying a Firebase React app  

Firebase website -> Firebase console -> Build -> Hosting -> Get started  
Do not check the box  
Click Next  
`npm install -g firebase-tools`  

`firebase login`  
Hit `y` for yes  
*Opens google window* - Login here with the account you logged in to your firebase project  
Allow  

`npm run build`  

`firebase init`  
Select only *Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys* by pressing *\<space\>* here, press *\<enter\>*  
Select *Use existing project*, press *\<enter\>*  
Select your project  
*"What do you want to use as your public directory?"* - enter build  
*"Configure as a single-page app"* - press *\<n\>* for no  
*"Set up automatic builds and deploys with GitHub?"* - press press *\<y\>* for yes
*"File public/index.html already exists. Overwrite?"* - press *\<n\>* for no  
Login to GitHub account after window opens  
*"For which GitHub repository would you like to set up a GitHub workflow?"* - paste repository in format user/repository  
*"Set up the workflow to run a build script before every deploy?"* - press *\<n\>* for no  
*"Set up automatic deployment to your site's live channel when a PR is merged?"* - press *\<y\>* for yes  
*"What is the name of the GitHub branch associated with your site's live channel?"* - enter branch name  

`firebase deploy`  

