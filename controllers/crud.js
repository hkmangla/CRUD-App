const express = require('express');
const crudData = require('../models/data');

const router = express.Router();

router.get('/', (req, res) => {
    crudData.getAllData((err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to load all
            data. Error: ${err}`});
        } else {
            res.write(JSON.stringify({success: true, data: data}, null, 2));
            res.end();
        }
    });
});

router.get('/categories', (req, res) => {
    crudData.getAllCategories((err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to load all
            data. Error: ${err}`});
        } else {
            res.write(JSON.stringify({success: true, data: data}, null, 2));
            res.end();
        }
    });
});

router.get('/categories/titles', (req, res) => {
    crudData.getAllCategoriesTitles((err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to load all
            titles. Error: ${err}`});
        } else {
            res.write(JSON.stringify({success: true, data: data}, null, 2));
            res.end();
        }
    });
});

router.get('/categories/:categoryTitle/questions', (req, res) => {
    const title = req.params.categoryTitle;

    crudData.getAllCategoryQuestionsById(title, (err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to load all
            data. Error: ${err}`});
        } else {
            res.write(JSON.stringify({success: true, data: data}, null, 2));
            res.end();
        }
    });
});

router.post('/categories/:categoryTitle/questions', (req, res) => {
    const title = req.params.categoryTitle;

    const newQuestion = {
        description: req.body.description,
        likes: 0,
        dislikes: 0,
        answersCount: 0,
        answers: []
    };

    crudData.addQuestion(title, newQuestion, (err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to Add Question. Error: ${err}`});
        } else {
            res.json({success: true, message: 'Question Added successfully!'});
            res.end();
        }
    });
});

router.delete('/categories/:categoryTitle/questions/:questionId', (req, res) => {
    const title = req.params.categoryTitle;
    const id =  req.params.questionId;

    crudData.deleteQuestion(title, id, (err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to delete the question. Error: ${err}`});
        } else if(data) {
            res.json({success: true, data: data});
            res.end();
        } else {
            res.json({success: false});
        }
    });
});

router.get('/categories/:categoryTitle/questions/:questionId/:fields', (req, res) => {

    const title = req.params.categoryTitle;
    const questionId = req.params.questionId;
    const fields = req.params.fields;
    crudData.getQuestionFieldsById(title,
        questionId, (err, data) => {

            if(err) {
                res.json({success: false, message: `Fail to load all
            answers. Error: ${err}`});
            } else if (data){
                res.write(JSON.stringify({success: true,
                    data: data['questions'][0][fields]}, null, 2));
                res.end();
            } else {
                res.json({success: true, data: []})
            }
        });
});

router.put('/categories/:categoryTitle/questions/:questionId/likes', (req, res) => {

    const title = req.params.categoryTitle;
    const questionId =  req.params.questionId;

    crudData.incQuestionLikes(title,
        questionId, (err, data) => {

            if(err) {
                res.json({success: false, message: `Fail to update likes. Error: ${err}`});
            } else {
                res.write(JSON.stringify({success: true, data: data}, null, 2));
                res.end();
            }
        });
});

router.put('/categories/:categoryTitle/questions/:questionId/dislikes', (req, res) => {

    const title = req.params.categoryTitle;
    const questionId =  req.params.questionId;

    crudData.incQuestionDislikes(title,
        questionId, (err, data) => {

            if(err) {
                res.json({success: false, message: `Fail to update dislikes. Error: ${err}`});
            } else {
                res.write(JSON.stringify({success: true, data: data}, null, 2));
                res.end();
            }
        });
});

router.get('/categories/:categoryTitle/questions/:questionId/answers/:id', (req, res) => {

    const title = req.params.categoryTitle;
    const questionId =  req.params.questionId;
    const id = req.params.id;

    crudData.getAnswer(title,
        questionId, id, (err, data) => {

            if(err) {
                res.json({success: false, message: `Fail to load Answer. Error: ${err}`});
            } else {
                res.write(JSON.stringify({success: true, data: data}, null, 2));
                res.end();
            }
        });
});


router.post('/categories/:categoryTitle/questions/:questionId/answers', (req, res) => {
    const title = req.params.categoryTitle;
    const questionId =  req.params.questionId;

    const newAnswer = {
        text: req.body.text,
        likes: 0,
        dislikes: 0
    };

    crudData.addAnswer(title, questionId, newAnswer, (err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to Add Answer. Error: ${err}`});
        } else {
            res.json({success: true, message: 'Answer Added successfully!'});
            res.end();
        }
    });
});

router.put('/categories/:categoryTitle/questions/:questionId/answers/:answerId/text', (req, res) => {
    const title = req.params.categoryTitle;
    const questionId =  req.params.questionId;
    const answerId = req.params.answerId;

    crudData.editAnswer(title, questionId, answerId, req.body.text, (err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to Edit Answer. Error: ${err}`});
        } else {
            res.json({success: true, message: 'Answer Edited successfully!'});
            res.end();
        }
    });
});

router.put('/categories/:categoryTitle/questions/:questionId/answers/:answerId/likes', (req, res) => {
    const title = req.params.categoryTitle;
    const questionId =  req.params.questionId;
    const answerId = req.params.answerId;

    crudData.incAnswerLikes(title, questionId, answerId, (err, data) => {
        if(err) {
            res.json({success: false, message: `Failed to update answer likes. Error: ${err}`});
        } else {
            res.json({success: true, message: 'Likes updated successfully!'});
            res.end();
        }
    });
});

router.put('/categories/:categoryTitle/questions/:questionId/answers/:answerId/dislikes', (req, res) => {
    const title = req.params.categoryTitle;
    const questionId =  req.params.questionId;
    const answerId = req.params.answerId;

    crudData.incAnswerDislikes(title, questionId, answerId, (err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to update answer dislikes. Error: ${err}`});
        } else {
            res.json({success: true, message: 'Dislikes updated successfully!'});
            res.end();
        }
    });
});

router.delete('/categories/:categoryTitle/questions/:questionId/answers/:answerId', (req, res) => {
    const title = req.params.categoryTitle;
    const questionId =  req.params.questionId;
    const answerId = req.params.answerId;

    crudData.deleteAnswer(title, questionId, answerId, (err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to delete the Answer. Error: ${err}`});
        } else if(data) {
            res.json({success: true, data: data});
            res.end();
        } else {
            res.json({success: false});
        }
    });
});

router.post('/', (req, res) => {

    const newCategory = new crudData({
        title: req.body.title,
        iconUrl: req.body.iconUrl,
        description: req.body.description,
        tags: req.body.tags,
        questions: []
    });

    crudData.addCategory(newCategory, (err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to create
                    new List. Error: ${err}`});
        } else {
            res.json({success: true, message: 'Added successfully!'});
        }
    });

});

module.exports = router;