const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    iconUrl: String,
    description: String,
    tags: [{
        type: String
    }],
    questions: [{
        description: String,
        likes: Number,
        dislikes: Number,
        answersCount: Number,
        answers: [{
            text: String,
            likes: Number,
            dislikes: Number
        }]
    }]
});

const CrudData = module.exports = mongoose.model('crudData',
    CategorySchema);

module.exports.getAllData = (callback) => {
    CrudData.find(callback);
};

module.exports.getAllCategories = (callback) => {
    CrudData.find({}, {questions: 0, _id: 0}, callback);
};

module.exports.getAllCategoriesTitles = (callback) => {
  CrudData.find({}, {_id: 0, title: 1}, callback);
};
module.exports.getAllCategoryQuestionsById = (title, callback) => {
    CrudData.findOne({title: title}, {  _id: 0,
                                        "questions._id": 1,
                                        "questions.description": 1,
                                        "questions.likes": 1,
                                        "questions.dislikes": 1,
                                        "questions.answersCount": 1
                                        }, callback);
};
module.exports.deleteCategory = (title, callback) => {
  CrudData.remove({title: title}, callback);
};
module.exports.getQuestionFieldsById = (title, questionId, callback) => {
    CrudData.findOne({$and: [
        {title: title},
        {"questions._id": questionId}
    ]}, {_id: 0, "questions.$": 1}, callback);
};

module.exports.getAnswer = (title, questionId, answerId, callback) => {
  CrudData.findOne({
      $and: [
          {title: title},
          {'questions._id': questionId},
          {'questions.answers._id': answerId}
      ]},
      {_id: 0, 'questions.answers.text': 1}, callback
  );
};


module.exports.deleteQuestion = (title, questionId, callback) => {
    CrudData.findOneAndUpdate(
        {title: title},
        {
            $pull: {
                questions: { _id: questionId}
            }
        },
        callback
    );
};

module.exports.incQuestionLikes = (title, questionId, callback) => {
    const query = {
        $and: [
            {title: title},
            {'questions._id': questionId}
        ]
    };

    CrudData.findOneAndUpdate(query, {
        $inc: {
            'questions.$.likes': 1
        }
    }, callback);
};

module.exports.incQuestionDislikes = (title, questionId, callback) => {
    const query = {
        $and: [
            {title: title},
            {'questions._id': questionId}
        ]
    };

    CrudData.findOneAndUpdate(query, {
        $inc: {
            'questions.$.dislikes': 1
        }
    }, callback);
};

module.exports.addCategory = (category, callback) => {
    category.save(callback);
};

module.exports.addQuestion = (title, question, callback) => {
    CrudData.findOneAndUpdate(
        {title: title},
        {
            $push: {
                questions: question
            }
        },
        callback
    );
};

module.exports.addAnswer = (title, questionId, answer, callback) => {
    CrudData.findOneAndUpdate(
        { $and: [
                {title: title},
                {'questions._id': questionId }
            ]
        },
        {
            $push: {
                'questions.$.answers': answer
            },
            $inc: {
                'questions.$.answersCount': 1
            }
        },
        callback
    );
};

module.exports.editAnswer = (title, questionId, answerId, editText, callback) => {

    CrudData.findOne({title: title}, (err, data) => {
        if (err) console.log(err);
        else {
            data.questions.id(questionId).answers.id(answerId).text = editText;
            data.save(callback);
        }
    })
};

module.exports.incAnswerLikes = (title, questionId, answerId, callback) => {

    CrudData.findOne({title: title}, (err, data) => {
        if (err) console.log(err);
        else {
            data.questions.id(questionId).answers.id(answerId).likes += 1;
            data.save(callback);
        }
    })
};

module.exports.incAnswerDislikes = (title, questionId, answerId, callback) => {

    CrudData.findOne({title: title}, (err, data) => {
        if (err) console.log(err);
        else {
            data.questions.id(questionId).answers.id(answerId).dislikes += 1;
            data.save(callback);
        }
    })
};

module.exports.deleteAnswer = (title, questionId, answerId, callback) => {
    CrudData.findOneAndUpdate(
        { $and: [
            {title: title},
            {'questions._id': questionId }
        ]
        },
        {
            $pull: {
                'questions.$.answers': {
                        _id: answerId
                    }
            },
            $inc: {
                'questions.$.answersCount': -1
            }
        },
        callback
    );
};