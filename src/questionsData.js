export var questions = []

const subsetSize = 6
let sagemakerAlgorithms = [
    {"name" : "Linear Learner", "modelType":"linear regression" , "purpose": "regression or classification", "processor" : "cpu"},
    {"name" : "XGboost", "modelType":"decision tree(s)" , "purpose": "regression or classification", "processor" : "cpu"},
    {"name" : "Seq2Seq", "modelType":"RNNs and CNNs with attention" , "purpose": "translation, summarization, speech to text", "processor" : "gpu"},
    {"name" : "DeepAR", "modelType":"RNN" , "purpose": "forecast one dimensional time series", "processor" : "cpu or gpu"},
    {"name" : "BlazingText", "modelType":"word2vec and text classification" , "purpose": "text classification", "processor" : "cpu or gpu"},
    {"name" : "Object2Vec", "modelType":"object2vec" , "purpose": "determine how similar objects are to each other", "processor" : "cpu or gpu"},
    {"name" : "Object Detection", "modelType":"CNN" , "purpose": "identify object in image and identify bounding boxes", "processor" : "gpu"},
    {"name" : "Image Classification", "modelType":"ResNet CNN" , "purpose": "assign labels to image", "processor" : "gpu"},
    {"name" : "Semantic Segmentation", "modelType":"MXNet Gluon and Gluon CV" , "purpose": "pixel level object classification", "processor" : "gpu"},
    {"name" : "Random Cut Forest", "modelType":"decision tree(s)" , "purpose": "anomaly detection", "processor" : "cpu"},
    {"name" : "Neural Topic Model", "modelType":"neural topic model" , "purpose": "document topic classification", "processor" : "gpu"},
    {"name" : "LDA: Latent Dirichlet Allocation", "modelType":"latent dirichlet allocation" , "purpose": "document topic classification", "processor" : "gpu"},
    {"name" : "K-Nearest-Neighbors", "modelType":"KNN" , "purpose": "regression or classification", "processor" : "cpu or gpu"},
    {"name" : "K-Means Clustering", "modelType":"k-Means" , "purpose": "unsupervised clustering", "processor" : "cpu"},
    {"name" : "Principal Component Analysis (PCA)", "modelType":"principal component analysis" , "purpose": "dimensionality reduction", "processor" : "cpu"},
    {"name" : "Factorization Machines", "modelType":"factorization machines" , "purpose": "recommender systems", "processor" : "cpu or gpu"},
    {"name" : "IP insights", "modelType":"CNN" , "purpose": "finding fishy behaviour in your weblogs", "processor" : "cpu or gpu"},
    {"name" : "Reinforcement Learning", "modelType":"Q-learning" , "purpose": "learning by assigning rewards/penalties for states in the system", "processor" : "cpu or gpu"}
]

const processors = [
    "cpu",
    "gpu",
    "cpu or gpu"
]

const modelTypes = [
    "linear regression",
    "logistic regression",
    "decision tree(s)",
    "multiple regression",
    "CNN",
    "ResNet CNN",
    "RNN",
    "RNNs and CNNs with attention",
    "MXNet Gluon and Gluon CV",
    "Q-learning",
    "neural topic model",
    "latent dirichlet allocation",
    "factorization machines",
    "KNN",
    "k-Means",
    "principal component analysis",
    "word2vec and text classification",
    "object2vec",
    "none of the above"
]

const modelPurposes = [
    "regression",
    "classification",
    "regression or classification",
    "translation, summarization, speech to text",
    "forecast time series",
    "text classification",
    "determine how similar objects are to each other",
    "identify object in image and identify bounding boxes",
    "assign labels to image",
    "pixel level object classification",
    "anomaly detection",
    "document topic classification",
    "unsupervised clustering",
    "dimensionality reduction",
    "recommender systems",
    "finding fishy behaviour in your weblogs",
    "learning by assigning rewards/penalties for states in the system"
]

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getModelTypeQuestion(str){
    return "What type of model/algorithm does " + str + " implement?"
}

function getModelPurposeQuestion(str){
    return "What is the purpose of " + str + "?"
}

function getArrayExcludeOne (array,notThis){
    let arr =  array.filter(e => e !== notThis);
    return arr
}

function getSubsetArrayExcludeOne(array,notThis,subset){

    var randomSample = function(array,subset){ return array.map(a => [a,Math.random()]).sort((a,b) => {return a[1] < b[1] ? -1 : 1;}).slice(0,subset).map(a => a[0]); }
    let arr = randomSample(array,subset)
    return arr.filter(e => e !== notThis);
}


export function createQuestions(){
questions = []
sagemakerAlgorithms = shuffle(sagemakerAlgorithms) 
sagemakerAlgorithms.forEach((element) => {
    questions.push(
        {
            "categoryId": 1,
            "question" : getModelTypeQuestion(element.name),
            "correct_answer": element.modelType,
            incorrect_answers: getSubsetArrayExcludeOne(modelTypes,element.modelType,subsetSize)


        },
        {
            "categoryId": 2,
            "question" : getModelPurposeQuestion(element.name),
            "correct_answer": element.purpose,
            incorrect_answers: getSubsetArrayExcludeOne(modelPurposes,element.purpose,subsetSize)


        }
    )
})
}