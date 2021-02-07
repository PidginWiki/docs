---
layout: page
title: Bandolo
permalink: /bandolo/
parent: Architecture
---

# Bandolo

Bandolo is an interactive data collection tool. Primarily used to collect data from humans by "chatting" with them. The bot collects data by asking questions determined by a `schema` which is used to cohorently shape data from different sources and permit Bandolo to be used any kind of data collection.

### Example Question Schema

```js
Question {
     source: [__words__, __setences__, __paragraghs__],
     source_fields: ['meaning', 'example', 'alternative'],
}
```

The above Schema describes the kinds of questions that would be generated from data passed as a collection from any data source via the `source` key and the data/information that we seek to collect via the `source_fields` key which accepts an array.

For the example schema shown above we could have a pratical scenario such as;

```python

question_generator = {
    source: ['wahala', 'paddiman', 'hafa', 'where you deh?'],
    source_fields: ['meaning', 'use', 'example', 'alternative']
}

```

The question generator above would generate question such as :

1. What is the meaning of paddiman?
2. Can you make a statement *using* `hafa`?
3. What is alternative way of saying `where you deh?`
4. What is a synonym for `paddiman`?

  - In the first case the meaning source field is using to generate the question for a noun `paddiman` could equally have been for `wahala`. 

  - In the second case a question is generated using the `use` source field which could be used to generateda question asking for an example or they "use"/application of something. For example `what is the use of ...`. This bring to mind the notion of keywords which we could introduce into the source fields. 

  - In the third and fourth case questions are generated using alternative which could mean alternative phrasing for a setence (case 3) or synonym for a word (case 4).


Difficulties rising from manually using the schema to generate quetions hint that it would be neccesary to language-annotate data passed in to the `source`. Such language annotation could designate each member of the source collection as a noun,verb, sentence, question or any other type that may be developed.

Another hint is that, it may be neccesary to to use _keywords_ in the source fields, for example `use` and `using` don't really sound like exact data people want to capture they sound more like keywords that can generate questions for `uses` and `examples` like above.