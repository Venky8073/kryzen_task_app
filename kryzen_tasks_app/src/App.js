import { useEffect, useState } from 'react';
import './App.css';
import { DONE, INPROGRESS, REWORK, TODO } from './components/actions';

function App() {
  const [value ,setValue]=useState('')
  const [tasks,setTasks]=useState([])
  const [dragTask,setDragtask]=useState(null)
  const [change,setChange]=useState(false)

  // adding the tasks
  function handleChange(e){
    let {value}=e.target
    setValue(value)
  }


  // adding the tasks               
  async function handleAdd(){
    if(value){
      let obj={
        name:value,
        status:TODO,
        date:`${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`
      }
      await addData(obj)
      setValue('')
    }
  }

  // dragging the tasks
  function handleDrag(e,task){
    setDragtask(task)
  }
  // console.log(dragTask)

  // drop functions
  async function handleDrop(e){
    const status=e.target.getAttribute('data-status')
    console.log(status)
    console.log(dragTask)
    let obj={
      status:status
    }
    console.log(obj,dragTask._id)
    await editData(obj,dragTask._id)
    setChange(!change)
  }

  function handleDragOver(e){
    e.preventDefault()
  }

  // fetching data 

  async function fetchData(){
    try{
      let api=await fetch('https://kryzen-backend-1.onrender.com/')
      let data=await api.json()
      console.log(data)
      setTasks(data.data)
    }catch(err){
      console.log(err)
    }
  }

  // adding the data

  async function addData(new_data){
    await fetch(`http://localhost:4500/add`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(new_data)
        })
        .then((res)=>{console.log(res.msg)})
        .catch((err)=>{console.log(err)})
  }

  // editing the status
  async function editData(new_data,id){
    await fetch(`https://kryzen-backend-1.onrender.com/edit/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(new_data)
        })
        .then((res)=>{console.log(res.msg)})
        .catch((err)=>{console.log(err)})
  }

  // deleting the task
  async function deleteData(id){
    await fetch(`https://kryzen-backend-1.onrender.com/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{console.log(res.msg)})
        .catch((err)=>{console.log(err)})
        setChange(!change)
  }

  useEffect(()=>{
    fetchData()
  },[value,change])

  return (
    <div className="App">
      <h1 className='header'>Task Manager</h1>
      <input type='text' placeholder='Add tasks' value={value} onChange={handleChange}
      className='input'/>
      <button onClick={handleAdd} className='add-btn'>Add Task</button>

      <div className='board'>


        {/* tasks */}
        <div className='todo'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        data-status={TODO}>
          <h2 className='todo-col'>Tasks</h2>
          <div className='scroll-item'>
              {tasks.length?tasks.map((el)=>
                el.status===TODO?<div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                data-status={TODO} 
                className='tasks-item' 
                draggable 
                onDrag={(e)=>handleDrag(e,el)}
                key={el.id}>
                <p className='task-name'>{el.name}</p>
                <button className='btn' onClick={(e)=>{deleteData(el._id)}}>Delete</button>
            </div>:''):''}
          </div>
        </div>


        {/* inprogress */}
        <div className='inprogress'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        data-status={INPROGRESS}>
          <h2 className='inprogress-col'>In-progress</h2>
          {tasks.length?tasks.map((el)=>
          el.status===INPROGRESS?<div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          data-status={TODO} 
          className='tasks-item' 
          draggable 
          onDrag={(e)=>handleDrag(e,el)}
          key={el.id}>
            <p className='task-name'>{el.name}</p>
            <button className='btn' onClick={(e)=>{deleteData(el._id)}}>Delete</button>
          </div>:''):''}
        </div>


        {/* done */}
        <div className='done'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        data-status={DONE}>
          <h2 className='done-col'>Done</h2>
          {tasks.length?tasks.map((el)=>
          el.status===DONE?<div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          data-status={TODO} 
          className='tasks-item' 
          draggable 
          onDrag={(e)=>handleDrag(e,el)}
          key={el.id}>
            <p className='task-name'>{el.name}</p>
            <button className='btn' onClick={(e)=>{deleteData(el._id)}}>Delete</button>
          </div>:''):''}
        </div>

        {/* rework */}
        <div className='rework'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        data-status={REWORK}>
          <h2 className='done-col'>Re-work</h2>
          {tasks.length?tasks.map((el)=>
          el.status===REWORK?<div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          data-status={TODO} 
          className='tasks-item' 
          draggable 
          onDrag={(e)=>handleDrag(e,el)}
          key={el.id}>
            <p className='task-name'>{el.name}</p>
            <button className='btn' onClick={(e)=>{deleteData(el._id)}}>Delete</button>
          </div>:''):''}
        </div>
      </div>

  
    </div>
  );
}

export default App;
