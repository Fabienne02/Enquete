import express from 'express';
import bodyParser from "body-parser";
import fs from 'fs';
import multer from 'multer';

const app = express()

// const fetch = require("node-fetch")


const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.set('view cache', true);
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.render('index', {
        title: 'WPA - Quotes'
    })
})

app.post('/answers', function (req, res) {
  const answers = req.body
  console.log(req.body)
  res.render('answers', {
      studentennummer: answers.studentnummer,
      naam : answers.name,
      docentwafs : answers.wafsdocent,
      weekwafs : answers.wafsweek,
      wafslesstof1 : answers.wafslesstof1,
      wafslesstof2 : answers.wafslesstof2,
      wafsbeoordeling : answers.wafsbeoordeling,
      answerwafs : answers.wafsinzichten,
      docentcss : answers.cssdocent,
      weekcss : answers.cssweek,
      csslesstof1 : answers.csslesstof1,
      csslesstof2 : answers.csslesstof2,
      cssbeoordeling : answers.cssbeoordeling,
      answercss : answers.cssinzichten,
      docentpwa : answers.wpadocent,
      weekpwa : answers.wpaweek,
      pwalesstof1 : answers.wpalesstof1,
      pwalesstof2 : answers.wpalesstof2,
      pwabeoordeling : answers.wpabeoordeling,
      answerpwa : answers.wpainzichten,
      docentbt : answers.btdocent,
      weekbt : answers.btweek,
      btlesstof1 : answers.btlesstof1,
      btlesstof2 : answers.btlesstof2,
      btbeoordeling : answers.btbeoordeling,
      answerbt : answers.btinzichten
})
})





app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
