# Use Effect tutorial

Lets say we have a simple app  
When we click one button, count is getting smaller  
When we click the other button, count is getting bigger  
Looks like this:  
```javascript
import React, {useState} from 'react';

const UseEffectTutorial = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={"projekt"}>
            <h3>Count: {count}</h3>
            <button onClick={(e) => {setCount(count - 1)}}>Make less</button>
            <button onClick={(e) => {setCount(count + 1)}}>Make more</button>
        </div>
    );
};
```


## Empty useEffect
```javascript
useEffect(() => {}, [])
```


## Structure 
```javascript
useEffect(() => {
    // 1. code to run

    // 2. optional return function
}, [/* 3. dependency array */])
```
- 1st part - Code to run
  - Body of the useEffect  
  - This part contains code that is run when the component mounts (when page is loaded (see example 1))
  - It gets run at least once, no matter what  
- 2nd part - Optional return function
  - Gets run, when something from dependency list *(3rd part)* gets updated
- 3rd part - Dependency array 
  - cleanup
  - Code inside body *(1st part)* is run every time some variable from dependency list changes (see example 1)
  - Warning! this part is run before the component is updated (see example 2)


## Example 1
In our application, if we added following useEffect:  
```javascript
useEffect(() => {
    console.log("count changed to: ", count)
}, []);
```  
We can see that the text is logged when the page loads  
When we click one of the buttons, nothing changed - 
because we didn't provide any variable/state to the dependency list *(3rd part)*  

To fix this, we can provide *count* to the dependency list:  
```javascript
useEffect(() => {
    console.log("count changed to: ", count)
}, [count]);
```  
Now we can see that everytime *count* changes, the code inside useEffect body is run


## Example 2
Example on 2nd part of useEffect - optional return statement  
Lets continue on 1st example
```javascript
useEffect(() => {
    console.log("count changed to: ", count)
}, [count]);
```  
If we only clicked **Make more**, console log will look like this:
```text
count changed to: 0
count changed to: 1
count changed to: 2
count changed to: 3
```

If we added optional return statement:
```javascript
useEffect(() => {
  console.log("count changed to: ", count)

  return () => {
    console.log("cleanup")
  };
}, [count]);
```

We can see console log like this:
```text
count changed to: 0
cleanup
count changed to: 1
cleanup
count changed to: 2
cleanup
count changed to: 3
```
Notice the order after every button click, and how every "cleanup" is there **before** count:
1. count changed to: 0
2. cleanup  
   count changed to: 1
3. cleanup  
   count changed to: 2
4. cleanup  
   count changed to: 3

It basically works like this:
1. gets mounted - runs code inside body
2. something from dependency list updates/changes (for example on button change)
   1. useEffect "destroys itself" - runs code inside return function
   2. it mounts itself - runs code inside body
