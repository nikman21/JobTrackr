const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 4000;

app.get('/test', (req,res) => {
    try{
        res.status(200).json({message: 'api is working'})
    }catch(error){
        res.status(500).json({ message: error.message})
    }
})

app.post('/signup', async (req,res) => {
    const { name, email, title } = req.body 
    try{
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                title: title,
            }
        });
        res.status(201).json(user);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/getUser', async (req,res) => {
    const { email } = req.body
    try{
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        res.status(200).json(user);
    
    }catch(error){
        res.status(500).json({message: error.message})
    }
})


app.post('/newJob', async (req,res) => {
    const { title, company, status } = req.body 
    try{
        const job = await prisma.jobs.create({
            data: {
                title: title,
                company: company,
                status: status  
            }
        });
        res.status(201).json(job);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));