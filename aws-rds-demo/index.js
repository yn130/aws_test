const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const userModel = require('./models/User')
const PORT = 8000;
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect:'mysql',
        port: process.env.DB_PORT,
    }
);

const User = userModel(sequelize);


app.use(express.json());
app.get('/', (req,res) => {
    res.send('안녕')
});

app.post('/api/users', async (req, res) => {
    try {
        const {username, email} = req.body;
        const user = await User.create({ username, email});
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : '서버 에러'})
        
    }
})


sequelize.sync ({ force: false }).then(() => {
    console.log('테이블 생성 완료!');
    
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
        
    })
})

// 수정