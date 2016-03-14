'use strict';

module.exports = function QuizModel() {
    return {
        'quizName': 'Dust Assessment Form',
        'quizId': 'dustAssessment',
        'submitTo': 'results',
        'intro': 'Please answer the following questions about Dust.',
        'questions': [
            {
                'id': 'dustIs',
                'questionText': 'Dust is:',
                'answerType': 'single',
                'answers': [
                    {
                        'id': 'templating',
                        'answerText': 'A templating engine.'
                    },
                    {
                        'id': 'inEye',
                        'answerText': 'Something in the corner of your eye.'
                    },
                    {
                        'id': 'desktop',
                        'answerText': 'Something collecting on your desktop.'
                    },
                    {
                        'id': 'sneeze',
                        'answerText': 'The root cause of a sneeze.'
                    }
                ]
            },
            {
                'id': 'whyDust',
                'questionText': 'Why should you use Dust?',
                'answerType': 'multi',
                'answers': [
                    {
                        'id': 'compiled',
                        'answerText': 'Compiled into JavaScript.'
                    },
                    {
                        'id': 'runEither',
                        'answerText': 'Can run on server or client.'
                    },
                    {
                        'id': 'cacheable',
                        'answerText': 'Templates can be cached.'
                    },
                    {
                        'id': 'cdn',
                        'answerText': 'Templates can be located on a content delivery network (CDN).'
                    },
                    {
                        'id': 'noDevServer',
                        'answerText': 'Eliminates the need for a server during UI development'
                    }
                ]
            },
            {
                'id': 'whatIlike',
                'questionText': 'What do you like the most about Dust?',
                'answerType': 'input'
            }
        ]
    };
};
