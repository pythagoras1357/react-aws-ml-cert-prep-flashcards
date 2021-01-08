export var questions = []

const subsetSize = 7
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

let awsServices = [
    {"name" : "S3", "purpose": "Amazon S3 allows people to store objects (files) in 'buckets' (directories). Buckets must have a globally unique name. Objects (files) have a Key. The key is the full path"},
    {"name" : "Kinesis", "purpose": "Kinesis is a managed alternative to Apache Kafka. Great for application logs, metrics, IoT, clickstreams. Great for “real-time” big data"},
    {"name" : "Glue ETL", "purpose": "Transform data, Clean Data, Enrich Data (before doing analysis).  Target can be S3, JDBC (RDS, Redshift), or in Glue Data Catalog. Jobs are run on a serverless Spark platform"},
    {"name" : "Glue Data Catalogue",  "purpose": "Metadata repository for all your tables. Automated Schema Inference. Schemas are versioned"},
    {"name" : "DynamoDB",  "purpose": "Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key-value and document data structures"},
    {"name" : "AWS Data Pipeline",  "purpose": "Process and move data between different AWS compute and storage services such as Amazon S3, Amazon RDS, Amazon DynamoDB, and Amazon EMR."},
    {"name" : "AWS Batch",  "purpose": "Run batch jobs as Docker images. Dynamic provisioning of the instances (EC2 & Spot Instances)"},
    {"name" : "AWS DMS",  "purpose": "Database Migration Service helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database."},
    {"name" : "Step Functions",  "purpose": "Serverless function orchestrator that makes it easy to sequence AWS Lambda functions and multiple AWS services into business-critical applications."},
    {"name" : "Polly",  "purpose": "converts text into spoken audio. It allows developers to create speech-enabled applications and products."},
    {"name" : "Rekognition",  "purpose": "Fast and accurate face search, allowing you to identify a person in a photo or video"},
    {"name" : "Transcribe",  "purpose": "Speech-to-text. Automatic speech recognition (ASR)"},
    {"name" : "Lex",  "purpose": "Chatbot"},
    {"name" : "Comprehend",  "purpose": "Natural language processing (NLP) service that uses machine learning to find insights and relationships in text."}
]

let generalAnswers = [
    "Standard deviation (represented by the symbol sigma, σ ) shows how much variation or dispersion exists from the average (mean), or expected value. More precisely, it is a measure of the average distance between the values of the data in the set and the mean.",
    "Delete records with missing values, Mean imputation, KNN: Find K “nearest” (most similar) rows and average their values, Deep Learning: Build a machine learning model to impute data for your machine learning model, Regression: Find linear or non-linear relationships between the missing feature and other features, Just Get More Data",
    "Oversampling - duplicate samples from the minority class, Undersampling - instead of creating more positive samples, remove negative ones, Throwing data away is usually not the right answer, SMOTE (Synthetic Minority Over-sampling TEchnique) - Artificially generate new samples of the minority class using nearest neighbors, Adjusting thresholds",
    "Stands for Term Frequency and Inverse Document Frequency. Term Frequency measures how often a word occurs in a document. Document Frequency is how often a word occurs in an entire set of documents, i.e., all of Wikipedia or every web page. TF-IDF measures the relevancy of a word in a document",
    "Regularization techniques are intended to prevent overfitting. Some techniques are Dropout (removing neurons from some layers) and Early Stopping -  Early stopping rules provide guidance as to how many iterations can be run before the learner begins to over-fit",
    "R-squared is a statistical measure of how close the data are to the fitted regression line. It is also known as the coefficient of determination, or the coefficient of multiple determination for multiple regression.",
    "L1 and L2 are two loss functions in machine learning which are used to minimize the error. L1 Loss function stands for Least Absolute Deviations. Also known as LAD. L2 Loss function stands for Least Square Errors. Also known as LS.",
    "(True Positives / True Positives + False Negatives) AKA Sensitivity, True Positive rate, Completeness. Percent of positives rightly predicted, good choice of metric when you care a lot about false negatives",
    "(True Positives / True Positives + False Positives) AKA Correct Positives. Percent of relevant results, Good choice of metric when you care a lot about false positives"
]

let generalQuestions = [
    {"question":"What is standard deviation?", "answer":generalAnswers[0]},
    {"question":"What are some common methods to deal with missing values in a dataset", "answer":generalAnswers[1]},
    {"question":"How can you deal with unbalanced data - large discrepancy between 'positive' and 'negative' cases : as in fraud detection", "answer":generalAnswers[2]},
    {"question":"What is TF-IDF", "answer":generalAnswers[3]},
    {"question":" What is regularization? And what are some techniques?", "answer":generalAnswers[4]},
    {"question":"what is R2 in machine learning?", "answer":generalAnswers[5]},
    {"question":"what are L1 and L2 in machine learning?", "answer":generalAnswers[6]},   
    {"question":"what is Recall?", "answer":generalAnswers[7]},
    {"question":"what is Precision?", "answer":generalAnswers[8]} 
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

function getServiceQuestion(str){
    return "What is the purpose of " + str + "?"
}


function getSubsetArrayExcludeOne(array,notThis,subset){

    var randomSample = function(array,subset){ return array.map(a => [a,Math.random()]).sort((a,b) => {return a[1] < b[1] ? -1 : 1;}).slice(0,subset).map(a => a[0]); }
    let arr = randomSample(array,subset)
    return arr.filter(e => e !== notThis);
}


export function createQuestions(){
questions = []
sagemakerAlgorithms = shuffle(sagemakerAlgorithms) 
generalQuestions = shuffle(generalQuestions)
awsServices = shuffle(awsServices)
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
generalQuestions.forEach((element) => {
    questions.push(
        {
            "categoryId": 4,
            "question" : element.question,
            "hide":true,
            "correct_answer": element.answer,
            incorrect_answers: getSubsetArrayExcludeOne(generalAnswers,element.answer,subsetSize)
        }
    )
})
awsServices.forEach((element) => {
    questions.push(
        {
            "categoryId": 3,
            "question" : getServiceQuestion(element.name),
            "hide":true,
            "correct_answer": element.purpose,
            incorrect_answers: []
        }
    )
})
}