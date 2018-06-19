const express = require('express');
const router = express.Router();

const Task = require('../models/tasks')

router.get('/', 
    async (req, res) => {
     const tasklist = await Task.find()
     res.json(tasklist);   
})

router.get('/:id', async (req, res)=>{
    let id = req.params.id;

    let task = await Task.findById(id);

    res.json(task);

})

router.post('/', async (req, res)=>{
    let {title, description} = req.body;
    let task = new Task({title,description})
    await task.save()
    res.json({message:'Saved'})
})

router.put('/:id', async (req, res)=>{
    let {title, description} = req.body,
    id = req.params.id,
    newTask = {title, description}
    await Task.findByIdAndUpdate(id, newTask);
    res.json({message:'Updated'})
    
})

router.delete('/:id', async (req, res)=>{
    let id = req.params.id;
    await Task.findByIdAndRemove(id);
    res.json({message:'Removed'})
})


module.exports = router;