---
layout: post
title: "Feature Selection"
date: 2017-04-12
image: nearestNeighbor.jpg
---
<link href="/css/posts.css" type="text/css" rel="stylesheet">
Feature Selection with nearest neighbor is a machine learning classifying algorithm.
Feature selection requires a training database and based off this training dataset Feature selection
can decide the class of any new instance. The class of the new instance is determined by
comparing the distance from its features and its nearest neighbor’s features, the neighbor with
the smallest total distance determines the new instance’s class.
Feature Selection with nearest neighbor inherits nearest neighbor’s weaknesses. One such
weakness is that nearest neighbor is sensitive to outliers, which can be resolved by choosing the
average of the kth nearest neighbors, but this is out of scope for this assignment. Another
weakness is nearest neighbor is sensitive to units of measurement, this weakness is addressed in
this assignment by normalizing the data. Finally, nearest neighbor is sensitive to irrelevant
features which is also addressed in this assignment with a feature search. The feature searches
implemented are Forward Selection, Backward Selection and Carlos Selection.
<div class="media">
<img src="/assets/postImage/nearestNeighbor.jpg" class="img-responsive" alt="Nearest Neighbor">
</div>
<a href="https://github.com/carlossantillana/Bluetooth_Lock">Github Link</a>
