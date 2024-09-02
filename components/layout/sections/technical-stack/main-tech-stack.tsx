import React from 'react';
import { cn } from '@/utils/cn';
import TechnologiesWeUse from './techinologies-we-use';
import DynamicCard from './dynamic-cards';
import AnimatedGridPattern from '@/components/ui/AnimatedGridPattern';

const dataAnalyticsIconDetails = [
    { name: "R", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg", size: "scale-150 bg-white rounded-full" },
    { name: "Matplotlib", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", spanText: "Matplotlib", size: "size-12 bg-white rounded-lg" },
    { name: "PowerBI", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg", spanText: "Power BI", size: "size-12 bg-white rounded-lg" },
    { name: "bigquery", imageUrl: "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg", spanText: "BigQuery", size: "size-12 bg-white rounded-lg" },
    { name: "python", imageUrl: "https://www.svgrepo.com/show/376344/python.svg", spanText: "Python", size: "flex-shrink-0 size-16 bg-white rounded-full " },
    { name: "Pandas", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg", size: "bg-white rounded-lg scale-120 flex-shrink-0" },
    { name: "Numpy", imageUrl: "https://www.svgrepo.com/show/354127/numpy.svg", spanText: "Numpy", size: "size-12" },
    { name: "Seaborn", imageUrl: "https://cdn.worldvectorlogo.com/logos/seaborn-1.svg", spanText: "Seaborn", size: "size-12 " },
    { name: "SK", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", spanText: "Scikit-learn", size: "py-2 size-12 text-nowrap mt-4 bg-white rounded-lg w-12 gap-4" },
];
const deepLearningIconDetails = [
    { name: "PyTorch", imageUrl: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", spanText: "PyTorch", size: "size-12 bg-white rounded-lg" },
    { name: "TensorFlow", imageUrl: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", spanText: "TensorFlow", size: "size-12" },
    { name: "Keras", imageUrl: "https://icon.icepanel.io/Technology/svg/Keras.svg", spanText: "Keras", size: "size-12" },
    { name: "Apache MXNet", imageUrl: "https://avatars.githubusercontent.com/u/47359?s=48&v=4", spanText: "Apache MXNet", size: "size-12 bg-white rounded-xl" },
    { name: "FastAI", imageUrl: "https://avatars.githubusercontent.com/u/20547620?s=200&v=4", spanText: "FastAI", size: "size-12 bg-white rounded-sm flex-shrink-0 py-1" },
    { name: "Hugging Face Transformers", imageUrl: "https://www.svgrepo.com/show/396671/hugging-face.svg", spanText: "Hugging Face", size: "size-12" },
    { name: "ONNX", imageUrl: "https://www.vectorlogo.zone/logos/onnxai/onnxai-icon.svg", spanText: "ONNX", size: "size-12" },
    { name: "NLP.js", imageUrl: "https://raw.githubusercontent.com/axa-group/nlp.js-app/master/screenshots/nlplogo.gif", size: "flex-shrink-0 w-28 rounded-lg bg-white" },
    { name: "Gensim", imageUrl: "https://numfocus.org/wp-content/uploads/2018/01/gensim-circle-768x791.png", spanText: "Gensim", size: "size-12" },
    { name: "NLTK", imageUrl: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*YM2HXc7f4v02pZBEO8h-qw.png", spanText: "NLTK" },
    { name: "spaCy", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg", size: "scale-150"},
    { name: "OpenCV", imageUrl: "https://opencv.org/wp-content/uploads/2022/05/logo.png", size: "size-12 scale-150 " },
];
const generativeAIIconDetails = [
    { name: "Langchain", imageUrl: "https://images.seeklogo.com/logo-png/52/1/langchain-logo-png_seeklogo-528369.png", spanText: "Langchain", size: "size-12 py-4 bg-white rounded-lg" },
    { name: "LlamaIndex", imageUrl: "https://cdn.prod.website-files.com/625447c67b621ab49bb7e3e5/65429c5f8c4d4e6dcdfe0f7f_oqVQ04b5KiGt5WOWJmYt8%5B1%5D.png", spanText: "LlamaIndex", size: "flex-shrink-0 size-16" },
    { name: "Jarvis", imageUrl: "https://jarvis.cx/assets/svg/logo-text.svg", size: "scale-120 p-2 flex-shrink-0 bg-white rounded-lg" },
    { name: "Amazon Bedrock", imageUrl: "/techstack/AmazonBedrock.jpg", spanText: "Amazon Bedrock", size: "size-12 bg-[#272d51] rounded-lg p-1.5 scale-110" },
    { name: "MeshTensorflow", imageUrl: "https://avatars.githubusercontent.com/u/15658638?s=48&v=4", spanText: "Mesh Tensorflow", size: "size-12" },
    { name: "MeshTensorflo", imageUrl: "https://avatars.githubusercontent.com/u/15658638?s=48&v=4", spanText: "Mesh Tensorflow", size: "opacity-0" },
];
const chatBotIconDetails = [
    { name: "Rasa", imageUrl: "https://info.rasa.com/hubfs/rasa_logo_horizontal_purple-3.png", size: "flex-shrink-0 w-20 bg-white rounded-lg p-1" },
    { name: "DialogFlow", imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c7/Dialogflow_logo.svg", size: "rounded-full flex-shrink-0 w-20 bg-white scale-150 p-1" },
    { name: "IBM Watson", imageUrl: "https://cdn.worldvectorlogo.com/logos/ibm-watson.svg", spanText: "IBM Watson", size: "size-12 bg-white rounded-lg" },
];
const aiModelOptimizationIconDetails = [
    { name: "ONNX", imageUrl: "https://www.vectorlogo.zone/logos/onnxai/onnxai-icon.svg", spanText: "ONNX", size: "size-12" },
    { name: "Pytorch Quantization", imageUrl: "https://opencv.org/wp-content/uploads/2024/01/tensorflow-vs-pytorch-2024.png", spanText: "Pytorch Quantization", size: "size-12 bg-white w-24 rounded-lg" },
    { name: "Tensor RT", imageUrl: "https://developer.nvidia.com/blog/wp-content/uploads/2018/11/NV_TensorRT_Visual_2C_RGB-625x625-1.png", spanText: "Tensor RT", size: "size-12 rounded-lg bg-white w-20 flex-shrink-0" },
    { name: "cTranslate2", imageUrl: "https://avatars.githubusercontent.com/u/23035727?v=4", spanText: "cTranslate2", size: "size-12" },
    { name: "Microsoft DeepSpeed", imageUrl: "https://www.microsoft.com/en-us/research/uploads/prodnew/2022/10/DeepSpeed_light.png", size: "flex-shrink-0 w-28 scale-100 bg-white rounded-lg mt-6" },
    { name: "Knowledge Distillation", imageUrl: "https://i.pinimg.com/originals/0d/2e/4a/0d2e4a40a1fe0adb7ad9b32fe844d2d0.jpg", spanText: "Knowledge Distillation", size: "size-12 flex-shrink-0 w-16" },
];
const cloudAIPlatformsIconDetails = [
    { name: "Google Cloud AI Platform", imageUrl: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg", spanText: "Google Cloud AI Platform", size: "text-pretty size-12" },
    { name: "Amazon SageMaker", imageUrl: "https://icon.icepanel.io/AWS/svg/Machine-Learning/SageMaker.svg", spanText: "Amazon SageMaker", size: "size-12" },
    { name: "IBM Watson", imageUrl: "https://cdn.worldvectorlogo.com/logos/ibm-watson.svg", spanText: "IBM Watson", size: "size-12 bg-white rounded-lg" },
    { name: "Microsoft Azure ", imageUrl: "https://logowik.com/content/uploads/images/azure-machine-learning-service1395.jpg", size: "opacity-0" },
    { name: "Microsoft Azure ML", imageUrl: "https://logowik.com/content/uploads/images/azure-machine-learning-service1395.jpg", spanText: "Microsoft Azure ML", size: "py-2 size-12 text-nowrap mt-4 bg-white rounded-lg w-12" },
    { name: "Microsoft Azure M", imageUrl: "https://logowik.com/content/uploads/images/azure-machine-learning-service1395.jpg", size: "opacity-0" },
];
const devOpsMLOpsIconDetails = [
    { name: "Docker", imageUrl: "https://www.svgrepo.com/show/349342/docker.svg", spanText: "Docker", size: "size-12" },
    { name: "Kubernetes", imageUrl: "https://www.svgrepo.com/show/376331/kubernetes.svg", spanText: "Kubernetes", size: "size-12" },
    { name: "MLFlow", imageUrl: "https://mlflow.org/img/mlflow-black.svg", spanText: "MLFlow", size: "size-20 py-8 flex-shrink-0" },
    { name: "kubeFlow", imageUrl: "https://seeklogo.com/images/K/kubeflow-logo-0CC766E8B7-seeklogo.com.png", size: "scale-150 py-2 size-12 flex-shrink-0" },
];
const backEndIconDetails = [
    { name: "Express.js", imageUrl: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg", spanText: "Express.js", size: "size-12 flex-shrink-0 bg-white rounded-xl" },
    { name: ".Net", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg", size: "size-12 flex-shrink-0" },
    { name: "Php", imageUrl: "https://www.svgrepo.com/show/452088/php.svg", size: "size-16 flex-shrink-0" },
    { name: "Django", imageUrl: "https://www.svgrepo.com/show/353657/django-icon.svg", spanText: "Django", size: "size-12" },
    { name: "Laravel", imageUrl: "https://www.svgrepo.com/show/353985/laravel.svg", spanText: "Laravel", size: "size-12 flex-shrink-0 bg-white rounded-xl" },
    { name: "Node.js", imageUrl: "https://www.svgrepo.com/show/376337/node-js.svg", spanText: "Node.js", size: "size-12 flex-shrink-0 bg-white rounded-xl" },
];
const frontEndIconDetails = [
    { name: "Next.js", imageUrl: "https://www.svgrepo.com/show/342062/next-js.svg", spanText: "Next.js", size: "size-12 bg-white rounded-2xl flex-shrink-0" },
    { name: "Svelte", imageUrl: "https://www.svgrepo.com/show/438993/svelte.svg", spanText: "Svelte", size: "size-12" },
    { name: "Vue.js", imageUrl: "https://www.svgrepo.com/show/354528/vue.svg", spanText: "Vue.js", size: "size-12" },
    { name: "Angular", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg", spanText: "Angular", size: "size-12" },
];
const appIconDetails = [
    { name: "Flutter", imageUrl: "https://www.svgrepo.com/show/373604/flutter.svg", spanText: "Flutter", size: "size-16 flex-shrink-0" },
    { name: "Swift", imageUrl: "https://www.svgrepo.com/show/354421/swift.svg", spanText: "Swift", size: "size-16 flex-shrink-0" },
    { name: "Swif", imageUrl: "https://www.svgrepo.com/show/354421/swift.svg", spanText: "Swift", size: "opacity-0" },
];
const beams0 = [
    { from: 0, to: 1, reverse: true },
];

const beams1 = [
    { from: 0, to: 4, curvature: -75, endYOffset: -10, reverse: true },
    { from: 1, to: 4, reverse: true },
    { from: 2, to: 4, curvature: -75, endYOffset: -10 },
    { from: 3, to: 4, reverse: true },
    { from: 5, to: 4 },
    { from: 6, to: 4, curvature: 75, endYOffset: 10, reverse: true },
    { from: 7, to: 4, reverse: true },
    { from: 8, to: 4, curvature: 75, endYOffset: 10 },
];
const beams2 = [
    { from: 0, to: 1, curvature: -75, endYOffset: -10, reverse: true },
    { from: 0, to: 4, curvature: 85, endYOffset: -10 },
    { from: 1, to: 2, curvature: 65, endYOffset: 10, reverse: true },
    { from: 3, to: 7, curvature: 85, endYOffset: -10 },
    { from: 3, to: 4, curvature: -75, endYOffset: -10, reverse: true},
    { from: 6, to: 10, curvature: 85, endYOffset: -10 },
    { from: 4, to: 5, curvature: 65, endYOffset: -10, reverse: true },
    { from: 6, to: 7, curvature: -75, endYOffset: -10, reverse: true},
    { from: 7, to: 8, curvature: 65, endYOffset: -10, reverse: true},
    { from: 10, to: 11, curvature: 65, endYOffset: -10, reverse: true},
    { from: 9, to: 10, curvature: -75, endYOffset: -10, reverse: true},
];

const beams3 = [
    { from: 0, to: 4, curvature: -75, endYOffset: -10, reverse: true },
    { from: 1, to: 4, reverse: true },
    { from: 2, to: 4, curvature: -75, endYOffset: -10 },
    { from: 1, to: 2, curvature: 55, endYOffset: -10, reverse: true },
    { from: 0, to: 1, curvature: 55, endYOffset: -10, reverse: true },
    { from: 3, to: 1, curvature: 95, endYOffset: -10, reverse: true },
    { from: 3, to: 4, curvature: -55, endYOffset: -10, reverse: true },
];

const beams4 = [
    { from: 0, to: 1, reverse: true },
    { from: 1, to: 2, reverse: true },
];

const beams5 = [
    { from: 0, to: 4, curvature: -75, endYOffset: -10, reverse: true },
    { from: 1, to: 4, reverse: true },
    { from: 2, to: 4, curvature: -75, endYOffset: -10 },
    { from: 1, to: 2, curvature: 55, endYOffset: -10, reverse: true },
    { from: 0, to: 1, curvature: 55, endYOffset: -10, reverse: true },
    { from: 5, to: 1, curvature: 95, endYOffset: -10, reverse: true },
    { from: 5, to: 4, curvature: -55, endYOffset: -10, reverse: true },
    { from: 3, to: 1, curvature: 95, endYOffset: -10, reverse: true },
    { from: 3, to: 4, curvature: -55, endYOffset: -10, reverse: true },
];

const beams6 = [
    { from: 0, to: 4, curvature: -75, endYOffset: -10, reverse: true },
    { from: 1, to: 4, reverse: true },
    { from: 2, to: 4, curvature: -75, endYOffset: -10 },
    { from: 1, to: 2, curvature: 55, endYOffset: -10, reverse: true },
    { from: 0, to: 1, curvature: 55, endYOffset: -10, reverse: true },
];
const MainTechStack = () => {

    return (
        <div className='pt-6 pb-32'>
            <div className="relative h-full">
                <div className="absolute inset-80 top-96 right-80 -translate-x-full h-screen w-screen bg-gradient-to-r from-red-500 to-violet-600 transform-gpu scale-[0.55] rounded-full blur-[450px]" />
                
                <BackgroundOverlay />
                <div className="relative shadow-xl bg-black/[0.96] lg:px-6 lg:py-4 h-full overflow-hidden rounded-2xl z-50 border-z border-x-transparent border-t">
                    <Title />
                    <div className="flex flex-col lg:flex-row lg:items-center lg:px-0 lg:py-0 px-2">
                        <TechnologiesWeUse />
                    </div>
                    <div className="relative grid min:grid-cols-2 md:grid-cols-2 gap-5 py-6 justify-center">
                        <DynamicCard title="Data Analytics & Data Science" iconDetails={dataAnalyticsIconDetails} beams={beams1} />
                        <DynamicCard title="Deep Learning" iconDetails={deepLearningIconDetails} beams={beams2} />
                        <DynamicCard title="Generative AI" iconDetails={generativeAIIconDetails} beams={beams3} />
                        <DynamicCard title="ChatBot" iconDetails={chatBotIconDetails} beams={beams4} />
                        <DynamicCard title="AI Model Optimization" iconDetails={aiModelOptimizationIconDetails} beams={beams5} />
                        <DynamicCard title="Cloud AI Platforms" iconDetails={cloudAIPlatformsIconDetails} beams={beams6} />
                        <DynamicCard title="DevOps & MLOps" iconDetails={devOpsMLOpsIconDetails} beams={beams3} />
                        <DynamicCard title="BackEnd" iconDetails={backEndIconDetails} beams={beams5} />
                        <DynamicCard title="FrontEnd" iconDetails={frontEndIconDetails} beams={beams3} />
                        <DynamicCard title="App Dev" iconDetails={appIconDetails} beams={beams0} />
                    </div>
                    <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                            "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12",
                        )}
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black-100 to-transparent z-50" />
            </div>
        </div>
    );
};

const BackgroundOverlay = () => (
    
    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-violet-600/100 to-indigo-600  rounded-full blur-2xl scale-[0.9]" />

);

const Title = () => (
    <h1 className="font-bold font-sans text-xs text-white lg:mb-4 relative z-50 lg:py-0 py-4 lg:px-0 px-4">
        ● Technologies We Use
    </h1>
);



export default MainTechStack;
