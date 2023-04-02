const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const {PrismaClient} = require('@prisma/client')
const app = express()

const prisma = new PrismaClient()

dotenv.config()

app.use(express.json({limit:"50mb"}))
app.use(cookieParser())

async function main(){
    await prisma.$connect()

    await prisma.user.create({
        data:{
            name:"Abu zubaer",
            "email":"example@gmail.com",
            "password":"abujubaer"
            
        }
    })
}
main().then(async ()=>{
    await prisma.$disconnect()
}).catch(async(e)=>{
    console.log(e);
    await prisma.$disconnect()
    process.exit(1)
})
const port = process.env.PORT
app.listen(port,()=>console.log(`server running in localhost/${port}`))