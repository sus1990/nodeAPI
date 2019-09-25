const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport'); // 验证token
const app = express();


// 测试连接是否成功
app.get('/',(req,res)=>{
    res.send('Hello')
})


// 1. 连接到数据库
const db = require('./config/keys').mongoURI;
mongoose
    .connect(
        db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// 2. 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3. 引入并使用，使用API中间件
const admin = require('./routes/api/admin');
app.use('/api/admin',admin);

// 4. passport 初始化
app.use(passport.initialize());
require('./common/passport')(passport); // 要放在mongoose后面，因为他使用了admin表

// 5. 启动服务
// const port = process.env.PORT || 3000;
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
