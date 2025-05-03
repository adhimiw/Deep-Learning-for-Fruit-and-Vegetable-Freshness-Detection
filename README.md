# Project Report: Fruit and Vegetable Freshness Detection using Deep Features

## Introduction

This report details a project focused on developing an automated system for classifying the freshness of fruits and vegetables based on image analysis. The primary goal was to leverage deep learning features extracted from pre-trained Convolutional Neural Networks (CNNs) to accurately distinguish between fresh and rotten produce. This capability is crucial for applications in quality control, retail inventory management, and reducing food waste. The project utilized a dataset comprising 12,000 images of various fruits and vegetables, sourced from Kaggle.

## Methodology

The core approach involved several key steps:

1.  **Data Preparation:** Images from the dataset were loaded and preprocessed. Each image was resized to 224x224 pixels to match the input requirements of the pre-trained models and converted into a tensor format suitable for processing with PyTorch.
2.  **Deep Feature Extraction:** Three powerful, pre-trained CNN models were employed for feature extraction: GoogLeNet, DenseNet-201, and ResNeXt-101. These models, trained on the large ImageNet dataset, possess the ability to capture complex hierarchical features from images. Each image in the training set was passed through these models (in evaluation mode, without fine-tuning) to obtain high-level feature representations.
3.  **Feature Fusion:** To combine the discriminative power of the different architectures, the feature vectors obtained from GoogLeNet, DenseNet-201, and ResNeXt-101 for each image were concatenated. This resulted in a single, richer, but higher-dimensional feature vector per image.
4.  **Dimensionality Reduction:** The fused feature vectors were high-dimensional. To reduce computational complexity and potentially mitigate the risk of overfitting, Principal Component Analysis (PCA) was applied. PCA identifies the principal components (directions of maximum variance) in the data and projects the data onto a lower-dimensional subspace. In this project, the dimensionality was reduced to 50 components.
5.  **Classification:** The reduced PCA features derived from the training data were used to train three different classification models:
    *   **Linear Discriminant Analysis (LDA):** A classic linear classifier that finds a feature subspace that optimizes class separability.
    *   **Support Vector Classifier (SVC):** A powerful classifier that finds an optimal hyperplane to separate classes. A polynomial kernel (degree 3) was used.
    *   **Bagging Classifier:** An ensemble method using multiple Decision Trees (100 estimators) trained on different bootstrap samples of the data, with predictions aggregated (typically by voting) to improve robustness and accuracy.
6.  **Evaluation:** The trained classifiers were evaluated on a separate test set (20% of the original data). The performance was measured using standard classification metrics: Accuracy, Precision, Recall, F1-score, and Matthews Correlation Coefficient (MCC).

## Results

The performance of the three classifiers on the test set, using the fused and PCA-reduced deep features, is summarized below. The metrics provide a comprehensive view of each model's ability to correctly classify the freshness of the fruits and vegetables.

**Linear Discriminant Analysis (LDA) Performance:**

*   Accuracy: 0.8105
*   Precision: 0.8254
*   Recall: 0.8093
*   F1-score: 0.8136
*   MCC: 0.7901

The LDA model achieved a respectable accuracy of approximately 81%. The precision and recall values are balanced, indicating it performs reasonably well in identifying both fresh and rotten classes without a strong bias towards one. The MCC, a robust metric for binary classification, is also fairly high at 0.79.

**Support Vector Classifier (SVC) Performance:**

*   Accuracy: 0.9576
*   Precision: 0.9582
*   Recall: 0.9571
*   F1-score: 0.9574
*   MCC: 0.9529

The SVC model with a polynomial kernel demonstrated outstanding performance, achieving an accuracy of nearly 96%. All metrics (Precision, Recall, F1-score, MCC) are consistently high, suggesting that the SVC was highly effective at separating the classes based on the provided features. The MCC value close to 1 indicates a near-perfect classification on the test set.

**Bagging Classifier Performance:**

*   Accuracy: 0.9076
*   Precision: 0.9097
*   Recall: 0.9064
*   F1-score: 0.9074
*   MCC: 0.8974

The Bagging classifier, utilizing an ensemble of decision trees, also performed very well, achieving an accuracy of approximately 91%. While not reaching the level of the SVC, its performance is significantly better than LDA. The high and balanced precision and recall indicate strong predictive capabilities. The MCC of nearly 0.90 further supports its effectiveness.

## Conclusion

This project successfully demonstrated the effectiveness of using fused deep features from multiple pre-trained CNNs (GoogLeNet, DenseNet-201, ResNeXt-101) combined with PCA for dimensionality reduction to classify fruit and vegetable freshness. Among the classifiers tested, the Support Vector Classifier (SVC) with a polynomial kernel yielded the best results, achieving an impressive accuracy of over 95% and a high Matthews Correlation Coefficient. The Bagging classifier also showed strong performance, surpassing 90% accuracy. The Linear Discriminant Analysis provided a baseline performance around 81%. These results highlight the power of leveraging pre-trained deep learning models for feature extraction in image classification tasks, even when followed by traditional machine learning classifiers. The high accuracy achieved, particularly by the SVC, suggests that this approach holds significant promise for practical applications in automated food quality assessment.
