# Understanding and plotting probability distributions in NLP

## Definition of probability distribution

According to the Geeks for Geeks article [Fundamentals of statistics in natural langauge processing](https://www.geeksforgeeks.org/statistics-in-natural-language-processing/), a variety of statistical concepts and methods are used in NLP. One aspect are so-called *descriptive statistics*, which include frequency counts (e.g. represented in word clouds), measures of Central Tendency (mean, median, mode), and measures of dispersion (e.g. for analysing "variability in word or sentence lengths"). Another important statistical concept often used in NLP are so-called *probability distributions*. 

Julia Hockenmaier, lecturer at the Sibel Center, University of Illinois, has outlined the most common probability models for NLP in [a lecture for the course CS447: Natural Language Processing](https://courses.grainger.illinois.edu/cs447/fa2020/Slides/Lecture03.pdf). This lecture introduces students to how language models "define probability distributions over the strings in a language" (slide 5), explains n-gram models and outlines "some very basic probability theory".

Slides 11 and 12 explain sampling with replacement (often covered in secondary school mathematics courses as well) and applies this process to a text as a "bag of words" (slide 13).

Page 16 defines a probability distribution over omega as frequently used in NLP. Page 17 explains discrete probability (fixed, often finite, number of outcomes), Bernoulli distribution, and categorical distribution. Page 18 moves on to the importance of joint probability (of two attributes, such as shape + colour), which leads to the so-called chain rule. (Slide 19) After defining the concept of an independent variable, slide 21 explains how a probability model (in NLP) is constructed from the model definition and the estimation of the model's parameters:

<blockquote>Probability models (almost) always make
independence assumptions.
— Even though X and Y are not actually independent,
our model may treat them as independent.
— This can drastically reduce the number of parameters to estimate.
— Models without independence assumptions have (way)
too many parameters to estimate reliably from the data we have
— But since independence assumptions are often incorrect,
those models are often incorrect as well:
they assign probability mass to events that cannot occur</blockquote>

Slide 23: <blockquote>An n-gram language model assumes each word
depends only on the last n−1 words.</blockquote>

Slide 29 is important because it recounts a mathematical definition of language:

<blockquote>CS447 Natural Language Processing (J. Hockenmaier) https://courses.grainger.illinois.edu/cs447/
From n-gram probabilities to language models
Recall: a language L ⊆ V* is a (possibly infinite) set of strings
over a (finite) vocabulary V.
P(w(i) | w(i-1)) defines a distribution over the words in V:
By multiplying this distribution N times, we get
one distribution over all strings of the same length N (VN):
Prob. of one N-word string:
Prob. of all N-word strings
But instead of N separate distributions…
…we want one distribution over strings of any length
∀w ∈ V : [ ∑
w′∈V
P(w(i) = w′ ∣ w(i−1) = w)] = 1
P(w1 . . . wN) = ∏
i=1...N
P(w(i) = wi ∣ w(i−1) = wi−1)
P(VN) = ∑
w,w′∈</blockquote>

Elements that matter in language models are "end-of-sentence" (EOS) tokens. We end up with strings of varying lengths, but we want to be able to compare probabilities across all strings in a typical text, so it is important to calculate one distribution over the entire text. Vice versa, having one distribution makes it possible to "generate strings of arbitrary length with one model." (Slide 32)

A large amount of text is needed as training data to "learn" or "estimate" the parameters typical of a language model and develop reliable probabilities. One basic technique is "relative frequency estimation", also known as "Maximum Likelihood Estimation" (MLE), see slide 34. This can be fine-tuned by not only using EOS but also operating with "beginning-of-sentence" (BOS) symbols.

Language models cannot only be used to analyse language but also to (randomly) create sentences. (Slide 39) The examples given on the following slides do not necessarily make sense (yet) but show typical features of the text types chosen, e.g. frequently used vocabulary in a business journal or a Shakespeare work, combined with typical sentence structures. Differences between adjectives, verbs, adverbs and nouns are not recognized in this symbol model to a sufficient degree, but it is clear that the quadrigram output is more logical than the unigram output that just puts individual words behind each other. A quadigram output includes grammatically correct sentences like "Will you not tell me who I am?"

Slide 47 ff. describe "smoothing methods", but those are not relevant for students who merely want to work with language models analytically.

Slide 50 differentiates between intrinsic and extrinsic evaluations of language models and addresses the challenges of defining evaluation metrics more generally.


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

### Works cited and recommendations for further reading

Fundamentals of statistics in natural language processing(Nlp). (2024, July 15). GeeksforGeeks. [https://www.geeksforgeeks.org/statistics-in-natural-language-processing](https://www.geeksforgeeks.org/statistics-in-natural-language-processing)
