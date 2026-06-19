const fs = require('fs-extra');
const path = require('path');
const DATA_FILE = path.join(__dirname, 'data.json');

function ensureData() {
  if (!fs.existsSync(DATA_FILE) || fs.readFileSync(DATA_FILE, 'utf8').trim() === '{}' || fs.readFileSync(DATA_FILE, 'utf8').trim() === '') {
    const now = new Date().toISOString();
    const initial = {
      users: [
        {
          id: 1,
          username: 'priya_sharma',
          name: 'Priya Sharma',
          password: '$2a$10$fakehashdontuse',
          avatar: '/avatars/alice.svg',
          bio: '3rd year Computer Science. Passionate about web development and AI.',
          department: 'Computer Science',
          semester: '5',
          joined: now,
          followers: [],
          following: []
        },
        {
          id: 2,
          username: 'arjun_patel',
          name: 'Arjun Patel',
          password: '$2a$10$fakehash2',
          avatar: '/avatars/ben.svg',
          bio: 'Mathematics and Physics enthusiast. Active in campus activities.',
          department: 'Physics',
          semester: '4',
          joined: now,
          followers: [],
          following: []
        }
      ],
      posts: [
        {
          id: 1,
          authorId: 1,
          title: 'Linear Algebra notes - Chapter 3',
          body: 'Shared my typed notes for chapter 3 focusing on eigenvalues and diagonalization. Uploaded PDF in resources.',
          category: 'Notes',
          likes: [2],
          comments: [1],
          createdAt: now
        },
        {
          id: 2,
          authorId: 2,
          title: 'Study group for CS201 assignment',
          body: 'Forming a study group for assignment 2, planning to meet in library 4pm Friday.',
          category: 'Assignments',
          likes: [],
          comments: [],
          resources: [],
          createdAt: now
        }
      ],
      comments: [
        { id: 1, postId: 1, authorId: 2, text: 'Thanks! This helped a lot.', createdAt: now }
      ],
      sessions: []
    };
    fs.writeJSONSync(DATA_FILE, initial, { spaces: 2 });
  }
}

function readData() {
  ensureData();
  return fs.readJSONSync(DATA_FILE);
}

function writeData(data) {
  fs.writeJSONSync(DATA_FILE, data, { spaces: 2 });
}

function getNextId(items) {
  if (!items || items.length === 0) return 1;
  return Math.max(...items.map(i => i.id)) + 1;
}

module.exports = { ensureData, readData, writeData, getNextId, DATA_FILE };
