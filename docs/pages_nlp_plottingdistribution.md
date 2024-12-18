# Understanding and plotting probability distributions in NLP

## Definition of probability distribution

According to the Geeks for Geeks article [Statistics in natural langauge processing](https://www.geeksforgeeks.org/statistics-in-natural-language-processing/), a variety of statistical concepts and methods are used in NLP. One aspect so-called *Descriptive Statistics*, which include frequency counts (e.g. represented in word clouds), measures of Central Tendency (mean, median, mode), and measures of dispersion (e.g. for analysing "variability in word or sentence lengths"). Another important statistical concept often used in NLP are the so-called *Probability Distributions*. 

:hammer_and_wrench: Under construction

Recommended lecture on [Probability Models for NLP](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://courses.grainger.illinois.edu/cs447/fa2020/Slides/Lecture03.pdf&ved=2ahUKEwibh46n28yJAxXx9bsIHauuDNkQFnoECBMQAQ&usg=AOvVaw2q5YGp2ei5kG-8cN3PGHY5)

To make texts consisting in many different words easier to visualise, *dimensionality reduction* is applied. This technique reduces high-dimensional data (data with a lot of information) to representative core features so that we can understand it more easily.

In NLP, you often find dimensionality reduction using the Principal Component Analysis (PCA) method, which finds the most important features or directions in the data. It keeps as much of the original information as possible. In NLP, PCA takes high-dimensional word representations (embeddings) and shows them in 2D or 3D plots so we can see patterns and relationships more clearly. t-SNE (t-Distributed Stochastic Neighbor Embedding) is another technique of dimension reduction, but it functions differently and creates semantic distributions. It focuses on keeping similar items close together and. It’s used for showing clusters of words or groups of documents in 2D or 3D, making it easier to spot patterns or groupings.

In *distributed representations*, also known as *embeddings*, the idea is that the "meaning" or "semantic content" of a data point is distributed across multiple dimensions. Expressing it more simply, distributed representations or embeddings are a way of representing words as numbers. These numbers, or vectors, are like coordinates in a space where each word is a point. Words that have similar meanings are placed near each other in this space. For example, the words "cat" and "dog" might be close together because they are both animals, while "cat" and "car" might be farther apart, since they're not related in meaning. There are special techniques, like Word2Vec, GloVe, and FastText, that learn how to place words in this space by looking at lots of text. The space can be a two-dimensional graph with an x- and a y-axes, with the different dots arranged between these axes. A plot like this is called a scatter plot.

## Reading scatter plots

In a scatter plot, the x-axis (horizontal) and y-axis (vertical) each represent a variable. Each dot drawn in a scatter plot corresponds to a unique observation in both dimensions. These dimensions can be absolute numbers, e.g. a person's age and income, or relative values, e.g. when we are considering word distrubitions in a text or a collection of texts.

When points group together in a scatter plot, it suggests a concentration of data in that range. If the points generally point upward (from bottom left to top right), it shows a positive correlation, meaning as one variable increases, the other tends increase, too. 

:chart_with_upwards_trend: add sample graph for correlation between study time and grade

A downward slope shows a negative correlation. 


If the points are scattered randomly with no clear slope or pattern, this indicates no relationship between the variables.

:chart_with_upwards_trend: add sample graph for number of pets and student grades

Some points may sit far away from the cluster, which could be outliers — unusual observations that differ significantly from the trend. These might signal unique cases or errors in data.

:clipboard: find non-NLP example

Understanding scatter plots is not just about observing the dominant trend but about interpreting what the relationships of all points (or lack thereof) means. Ask questions like: “What could a strong positive correlation tell us about these two variables?”

In NLP, scatter plots are commonly used to show relationships or similarities between words, sentences, or entire documents. Each point represents a word, sentence, or document based on its embedding or similarity score. In contrast to a scatter plot in which values such as age, income, height, weight, or length are measured, an NLP scatter plot can have negative values on both the x and y axes because we deal with probability measures. Negative values represent dissimilarity where positive values express similarity.

:clipboard: find non-NLP example based on data used for teaching

Depending on the context and the algorithms used, NLP scatter plots do not always represent the exact same values but can entail very different properties, like two different sentiment scores (e.g., positive and negative) or dimensions of similarity. So be carefuly to check what exactly is being shown before you begin your analysis!

In NLP scatter plots, clustering often indicates semantic similarity rather than direct co-occurrence in the text or corpus itself. The distance between points can then signal semantic similarity (closer points mean more similar meaning or sentiment). For example, "doctor" and "nurse" or "master" and "slave" might cluster together due to shared contexts in training data, but they don’t necessarily appear together in the text. 

:clipboard: add example using Voyant

This is why NLP scatter plots are similar to mind maps or conceptual maps rather than a structured representation of the text. Some algorithms may also result in point / words clusters in which words behave similarly in statistical terms while there is no content-based relationship between them. 

:clipboard: add example chart

Moreover, scatter plots in NLP sometimes reveal linear trends if there’s a direct relationship between two similarity measures, but more often display nonlinear clusters if embeddings capture complex, multidimensional meanings. Points far from clusters may represent unusual or ambiguous words, phrases, or sentences that do not fit into clear similarity groups. For example, highly context-dependent words or polysemous words (words with multiple meanings) might appear as outliers, indicating that they don’t neatly belong to a single cluster.

Special techniques, like Word2Vec, GloVe, and FastText, place words in the plot placed on word meanings and identify similar words, classify entire texts, or even translating languages. Some types of embeddings, like contextual embeddings (from models like BERT or GPT), do take the specific context into account, meaning each word has a unique embedding in each context. However, even in these cases, clustering will reflect shared meaning across contexts rather than specific occurrences within a particular text passage.

## Understanding the scatter plot tool in Voyant

Unfortunately, the Voyant documentation for the scatter plot tool is quite abstract and short, not providing a lot of insight for beginners:

> Principal Component Analysis (PCA) is a technique which takes data in a multidimensional space and optimizes it, reducing the dimensions to a manageable subset. It is a way of transforming the data with respect to its own structure, so that associations between data points become more readily apparent. For example, consider a table of word frequencies for a corpus of ten documents. Each document can be thought of as a dimension, and each word frequency as a data point. Since we cannot visualize a ten dimensional space, we can apply PCA to reduce the number of dimensions to something feasible, like two or three. This is accomplished by transforming the data into a new space wherein the first few dimensions (or components) represent the largest amount of variability in the data. By discarding all but the first two or three dimensions, we will be left with a new data set which ideally contains most of the information in the original, but which is easy to visualize. In the resulting visualization, words that are grouped together are associated, i.e. they follow a similar usage in the corpus.

> Correspondence Analysis is also conceptually similar to PCA, but handles the data in such a way that both the rows and columns are analyzed. This means that given a table of word frequencies, both the words themselves and the document segments will be plotted in the resulting visualization. Document Similarity is essentially the same as Correspondence Analysis, but terms aren't shown in the graph. The scatterplot is presented in the main display in the tool with a legend in the top left hand corner. Hovering over a word in the graph will display more information about the frequency of occurrence of that word.

Above the main display is the primary toolbar and to the right of the display is sub-panel providing a list of words that appear in the corpus as well as their frequencies.

The tool allows you to change several parameters, but the documentation is not very detailed:

### Options

The toolbar mainly comprises options for tweaking and exploring the plotting of the graph.

    Analysis allows the user to switch between plotting Document Similarity, Principal Component Analysis and Correspondence Analysis
    Clusters allows the user to control the number of groups to cluster the words into. These clusters are determined automatically by the criteria of the analysis and words in a cluster would indicate a measure of similarity between words. Clusters of terms will appear as a single colour.
    Dimensions allows the user to switch between two or three dimensions.
    Labels allows the user to cycle through the label settings for the graph.

### Terms

The Terms panel shows you which terms are displayed in the Scatterplot and it also allows you to control which terms are shown.

The terms grid functions like other grids and you can sort terms alphabetically or by frequency. The Terms panel also provides the following functionality:

    Terms Count: determine how many terms to display at once in the graph (the terms present will influence the layout of the terms, so it's well worth experimenting with this option)
    Nearby: you can select a term of interest from the grid and ask to zoom in on "nearby" terms (terms that cluster in proximity)
    Remove: you can remove one term at a time by selecting it in the grid and hitting the Remove button
    Add Term: you can search for and add new terms

:hammer_and_wrench: Under construction