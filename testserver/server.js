const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const testText = require('./media/paragraphs/testParagraphText')

// server config
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.listen(13000, () => {
  console.log('Server running on port 13000')
})

// routes
server.get('/posts', (req, res, next) => {
  res.send(posts).status(200)
  return next
})

// test data
const p0 = {
  index: 0,
  subheader: null,
  text: testText.p0
}
const p1 = {
  index: 1,
  subheader: 'this paragraph has a subheader',
  text: testText.p1
}
const p2 = {
  index: 2,
  subheader: null,
  text: testText.p2
}
const p3 = {
  index: 3,
  subheader: null,
  text: testText.p3
}
const p4 = {
  index: 4,
  subheader: null,
  text: testText.p4
}
const p5 = {
  index: 5,
  subheader: null,
  text: testText.p5
}
const p6 = {
  index: 6,
  subheader: 'Some Crap About The Future',
  text: testText.p6
}
const p7 = {
  index: 7,
  subheader: null,
  text: testText.p7
}
const p8 = {
  index: 8,
  subheader: 'Get High on Test Data Alone!',
  text: testText.p8
}
const p9 = {
  index: 9,
  subheader: null,
  text: testText.p9
}
const s0 = {
  index: 0,
  title: 'Some Space Talk',
  filepath: 'C:/Users/ntkri/Desktop/Software Projects/BlogMaker/testserver/media/audio/PicardsGalaxy.wav'
}
const i0 = {
  index: 0,
  title: 'Sexy Pin-Up Photo of Man with Cat',
  filepath: 'C:/Users/ntkri/Desktop/Software Projects/BlogMaker/testserver/media/images/testimage.jpg'
}
const v0 = {
  index: 0,
  title: 'Test Video - Very Short',
  filepath: 'C:/Users/ntkri/Desktop/Software Projects/BlogMaker/testserver/media/video/testvideo.mp4'
}

const paragraphs = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9]
const sounds = [s0]
const videos = [v0]
const images = [i0]

const post0 = {
  index: 0,
  date: new Date('October 13, 2020 11:13:00'),
  title: 'My First Post',
  schema: [paragraphs[0], paragraphs[1], images[0], paragraphs[2]]
}
const post1 = {
  index: 1,
  date: new Date('October 15, 2020 01:53:00'),
  title: 'My Second Post',
  schema: [paragraphs[3], sounds[0], paragraphs[4], paragraphs[5], paragraphs[6]]
}
const post2 = {
  index: 2,
  date: new Date('October 27, 2020 13:22:00'),
  title: 'My Third Post',
  schema: [paragraphs[7], paragraphs[8], paragraphs[9], videos[0]]
}

const posts = [post0, post1, post2]
