const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let posts = []; // 임시로 데이터를 메모리에 저장

// 글 목록 조회
app.get('/posts', (req, res) => {
    res.json(posts);
});

// 글 저장
app.post('/posts', (req, res) => {
    const { title, content, author, date, likes } = req.body;
    posts.push({ title, content, author, date, likes: likes || 0 });
    res.status(201).send('Post added');
});

// 서버 실행
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});