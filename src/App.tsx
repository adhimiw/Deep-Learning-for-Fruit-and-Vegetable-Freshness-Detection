import './App.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function App() {
  const kaggleDatasetUrl = "https://www.kaggle.com/datasets/muhriddinmuxiddinov/fruits-and-vegetables-dataset/";

  const title = "Deep Learning for Fruit and Vegetable Freshness Detection";
  const shortDescription = "Developed an automated system leveraging deep learning features from GoogLeNet, DenseNet-201, and ResNet-101 to accurately classify the freshness of various fruits and vegetables, distinguishing between fresh and rotten produce.";
  const longDescription = `This project addresses the critical challenge of automatically assessing the freshness of fruits and vegetables, a task vital for reducing food waste and ensuring consumer quality. Utilizing a comprehensive dataset of 12,000 images sourced from Kaggle's Fruits & Vegetables Dataset, this system employs advanced deep learning techniques to distinguish between fresh and rotten produce. The core methodology involves extracting rich feature representations from the images using three powerful pre-trained convolutional neural networks: GoogLeNet, DenseNet-201, and ResNeXt-101 (as implemented in the analysis, differing slightly from the initial description's ResNet-101). These models, renowned for their ability to capture intricate visual patterns, provide a robust foundation for analysis. \n\nTo leverage the complementary strengths of each model, the extracted deep features were fused into a single, high-dimensional feature vector. Recognizing the potential for redundancy and computational complexity in such high-dimensional data, Principal Component Analysis (PCA) was applied to reduce the dimensionality to 50 principal components while preserving the most significant variance in the data. This dimensionality reduction step enhances efficiency without substantial loss of discriminative information. \n\nFinally, the reduced feature set was used to train and evaluate three distinct classification algorithms: Linear Discriminant Analysis (LDA), a Support Vector Classifier (SVC) with a polynomial kernel, and a Bagging ensemble classifier based on Decision Trees. By comparing these diverse classifiers, the project aimed to identify the most effective approach for accurately predicting produce freshness based on the learned deep features. The system demonstrates a practical application of deep feature extraction and machine learning for automated quality control in the food industry.`;
  const technologies = "Python, PyTorch, Scikit-learn, NumPy, Pillow (PIL), GoogLeNet, DenseNet-201, ResNeXt-101, PCA, LDA, SVC, Bagging Classifier, Deep Feature Fusion, Jupyter Notebook, Kaggle Datasets";
  const aiImprovisedMethod = `Building upon the robust deep feature extraction pipeline (GoogLeNet, DenseNet-201, ResNeXt-101 fusion followed by PCA reduction), this 'AI Improvised' approach explores the application of eXtreme Gradient Boosting (XGBoost) for the final classification step. XGBoost is a highly efficient and effective implementation of the gradient boosting framework, known for its exceptional performance in many machine learning competitions and real-world applications.\n\nInstead of using traditional classifiers like LDA or SVC, this method leverages XGBoost's ensemble of decision trees, which are built sequentially, with each new tree correcting the errors made by the previous ones. This iterative refinement process, combined with regularization techniques to prevent overfitting, often leads to superior predictive accuracy and robustness, particularly on complex, high-dimensional datasets like the fused image features. By applying XGBoost to the 50 principal components derived from the deep features, we aim to potentially achieve even higher classification accuracy in distinguishing between fresh and rotten produce compared to the originally tested classifiers.`;
  const reportIntro = `This report details a project focused on developing an automated system for classifying the freshness of fruits and vegetables based on image analysis. The primary goal was to leverage deep learning features extracted from pre-trained Convolutional Neural Networks (CNNs) to accurately distinguish between fresh and rotten produce. This capability is crucial for applications in quality control, retail inventory management, and reducing food waste. The project utilized a dataset comprising 12,000 images of various fruits and vegetables, sourced from Kaggle.`;
  const reportMethodology = `The core approach involved several key steps:\n\n1.  **Data Preparation:** Images from the dataset were loaded and preprocessed. Each image was resized to 224x224 pixels to match the input requirements of the pre-trained models and converted into a tensor format suitable for processing with PyTorch.\n2.  **Deep Feature Extraction:** Three powerful, pre-trained CNN models were employed for feature extraction: GoogLeNet, DenseNet-201, and ResNeXt-101. These models, trained on the large ImageNet dataset, possess the ability to capture complex hierarchical features from images. Each image in the training set was passed through these models (in evaluation mode, without fine-tuning) to obtain high-level feature representations.\n3.  **Feature Fusion:** To combine the discriminative power of the different architectures, the feature vectors obtained from GoogLeNet, DenseNet-201, and ResNeXt-101 for each image were concatenated. This resulted in a single, richer, but higher-dimensional feature vector per image.\n4.  **Dimensionality Reduction:** The fused feature vectors were high-dimensional. To reduce computational complexity and potentially mitigate the risk of overfitting, Principal Component Analysis (PCA) was applied. PCA identifies the principal components (directions of maximum variance) in the data and projects the data onto a lower-dimensional subspace. In this project, the dimensionality was reduced to 50 components.\n5.  **Classification:** The reduced PCA features derived from the training data were used to train three different classification models: Linear Discriminant Analysis (LDA), a Support Vector Classifier (SVC) with a polynomial kernel, and a Bagging ensemble classifier based on Decision Trees.\n6.  **Evaluation:** The trained classifiers were evaluated on a separate test set (20% of the original data). The performance was measured using standard classification metrics: Accuracy, Precision, Recall, F1-score, and Matthews Correlation Coefficient (MCC).`;
  const reportResults = `The performance of the three classifiers on the test set, using the fused and PCA-reduced deep features, is summarized below. The metrics provide a comprehensive view of each model's ability to correctly classify the freshness of the fruits and vegetables.\n\n**Linear Discriminant Analysis (LDA) Performance:**\n*   Accuracy: 0.8105\n*   Precision: 0.8254\n*   Recall: 0.8093\n*   F1-score: 0.8136\n*   MCC: 0.7901\n\nThe LDA model achieved a respectable accuracy of approximately 81%. The precision and recall values are balanced, indicating it performs reasonably well in identifying both fresh and rotten classes without a strong bias towards one. The MCC, a robust metric for binary classification, is also fairly high at 0.79.\n\n**Support Vector Classifier (SVC) Performance:**\n*   Accuracy: 0.9576\n*   Precision: 0.9582\n*   Recall: 0.9571\n*   F1-score: 0.9574\n*   MCC: 0.9529\n\nThe SVC model with a polynomial kernel demonstrated outstanding performance, achieving an accuracy of nearly 96%. All metrics (Precision, Recall, F1-score, MCC) are consistently high, suggesting that the SVC was highly effective at separating the classes based on the provided features. The MCC value close to 1 indicates a near-perfect classification on the test set.\n\n**Bagging Classifier Performance:**\n*   Accuracy: 0.9076\n*   Precision: 0.9097\n*   Recall: 0.9064\n*   F1-score: 0.9074\n*   MCC: 0.8974\n\nThe Bagging classifier, utilizing an ensemble of decision trees, also performed very well, achieving an accuracy of approximately 91%. While not reaching the level of the SVC, its performance is significantly better than LDA. The high and balanced precision and recall indicate strong predictive capabilities. The MCC of nearly 0.90 further supports its effectiveness.`;
  const reportConclusion = `This project successfully demonstrated the effectiveness of using fused deep features from multiple pre-trained CNNs (GoogLeNet, DenseNet-201, ResNeXt-101) combined with PCA for dimensionality reduction to classify fruit and vegetable freshness. Among the classifiers tested, the Support Vector Classifier (SVC) with a polynomial kernel yielded the best results, achieving an impressive accuracy of over 95% and a high Matthews Correlation Coefficient. The Bagging classifier also showed strong performance, surpassing 90% accuracy. The Linear Discriminant Analysis provided a baseline performance around 81%. These results highlight the power of leveraging pre-trained deep learning models for feature extraction in image classification tasks, even when followed by traditional machine learning classifiers. The high accuracy achieved, particularly by the SVC, suggests that this approach holds significant promise for practical applications in automated food quality assessment.`;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">{title}</CardTitle>
          <CardDescription className="text-center text-lg text-muted-foreground pt-2">
            {shortDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p style={{ whiteSpace: 'pre-line' }}>{longDescription}</p>
          <div className="mt-6 text-center">
            <Button asChild>
              <a href={kaggleDatasetUrl} target="_blank" rel="noopener noreferrer">
                Download Dataset from Kaggle
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="report" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="report">Project Report</TabsTrigger>
          <TabsTrigger value="tech">Technologies</TabsTrigger>
          <TabsTrigger value="improvised">AI Improvised Method</TabsTrigger>
        </TabsList>

        <TabsContent value="report">
          <Card>
            <CardHeader>
              <CardTitle>Project Report</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h3 className="font-semibold text-xl mt-4">Introduction</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{reportIntro}</p>
              <h3 className="font-semibold text-xl mt-4">Methodology</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{reportMethodology}</p>
              <h3 className="font-semibold text-xl mt-4">Results</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{reportResults}</p>
              <h3 className="font-semibold text-xl mt-4">Conclusion</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{reportConclusion}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tech">
          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                {technologies.split(', ').map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="improvised">
          <Card>
            <CardHeader>
              <CardTitle>AI Improvised Method: XGBoost Classification</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p style={{ whiteSpace: 'pre-line' }}>{aiImprovisedMethod}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;

