---
title: Bandolo
description: The interactive data collection tool that builds the Pidgin corpus.
sidebar:
  order: 2
---

Bandolo is an interactive data collection tool, primarily used to collect data from humans
by "chatting" with them. The bot collects data by asking questions determined by a
`schema`, which shapes data from different sources coherently and lets Bandolo be reused
for any kind of data collection.

## Example question schema

```js
Question {
  source: [words, sentences, paragraphs],
  source_fields: ['meaning', 'example', 'alternative'],
}
```

The schema describes the kinds of questions generated from data passed via the `source`
key, and the information we want to collect via the `source_fields` key (an array).

A practical instance:

```python
question_generator = {
    "source": ["wahala", "paddiman", "hafa", "where you deh?"],
    "source_fields": ["meaning", "use", "example", "alternative"],
}
```

The generator above would produce questions such as:

1. What is the meaning of *paddiman*?
2. Can you make a statement *using* `hafa`?
3. What is an alternative way of saying `where you deh?`
4. What is a synonym for *paddiman*?

- In the first case the **meaning** source field generates the question for a noun such as
  *paddiman* (it could equally be *wahala*).
- In the second case the **use** source field generates a question asking for an example
  or application of something, for example *what is the use of ...*. This brings to mind
  keywords, which we could introduce into the source fields.
- In the third and fourth cases, **alternative** generates either an alternative phrasing
  for a sentence (case 3) or a synonym for a word (case 4).

Difficulties in manually using the schema to generate questions suggest it is necessary to
language-annotate the data passed into `source`. Such annotation could designate each
member of the source collection as a noun, verb, sentence, question, or any other type we
develop.
