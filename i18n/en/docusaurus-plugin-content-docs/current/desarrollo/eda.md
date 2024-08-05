---
sidebar_label: 'Exploratory Data Analysis'
sidebar_position: 2
---

# Exploratory Data Analysis

One of the primary responsibilities of the services outlined in the previous section is the development of Exploratory Data Analysis (EDA). This process was divided into several key stages:

## Defining Scope and Choosing Techniques

Our EDA process began by defining the scope and objectives of the analysis. We identified the critical questions we aimed to answer and selected the most suitable EDA techniques to address these objectives. This involved deciding on the types of visualizations to use for presenting the data effectively. We opted for interactive visualizations with Plotly and conducted the analysis in Jupyter Notebook to ensure thorough documentation and effective sharing of our findings.

## Data Acquisition

For data acquisition, we developed a specialized service that interfaces with the Coingecko API, a reliable source of cryptocurrency market information. This API offers both historical and real-time data, including prices, trading volume, and market capitalization.

## Data Transformation and Cleaning

The data obtained from the API required thorough transformation and cleaning to ensure its usability.

### Data Cleaning

Our data cleaning process involved:

- **Handling Missing Data:** We identified and addressed missing values in the dataset to prevent errors in our visualizations and analysis.
- **Correcting Noisy Data:** We identified and rectified errors or outliers that could distort the results, applying necessary techniques to correct or remove this data.
- **Removing Duplicates:** Duplicate records were identified and eliminated to maintain the integrity and accuracy of our dataset.

These steps were essential to ensure the quality of our data.

### Data Preparation

Following cleaning, we prepared the data through:

- **Data Transformation:** This involved rounding values, formatting dates, and normalizing data to align with the required format.
- **Data Integration:** We integrated both structured (tabular) and unstructured data (such as images or links) to consolidate all relevant information into a coherent dataset.
- **Data Reduction:** We focused on the most relevant features of the data, discarding unnecessary elements to simplify data handling and analysis.

## Table Creation

After cleaning and preparing the data, we created structured tables and datasets. These organized tables served as the foundation for our subsequent analysis and visualizations.

## Use Case Definition

We identified and defined specific use cases for our analysis, such as comparing price patterns, market capitalization, and trading volume of various cryptocurrencies over time.

## Model Development

The insights gained from our exploratory analysis guided the development of various charts and visualizations, including bar charts, pie charts, line charts, bubble charts, and heatmaps.

## Model Testing

We tested the model using historical data to verify the correct removal of outliers and to ensure the accurate handling of null values. We also checked that date and time formats were properly normalized.

## Model Refinement

As errors were identified during testing, we implemented necessary corrections and improvements. This iterative process continued until we achieved the desired results.

## Model Implementation

Once the model met our expectations, we implemented it into our system, conducting additional tests to ensure that everything functioned according to our established criteria.
