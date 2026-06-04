---
title: Architecture overview
description: How the parts of Pidgin Wiki fit together to build a translation model.
sidebar:
  order: 1
---

With the goal of building a model in mind, the architecture of Pidgin.Wiki is designed to
provide services that facilitate, or are directly applicable to, building the model we
envisage. To build a model we need a corpus, and there is little or no corpus available
for Pidgin English. So the first step is to build one:

- Build a multilingual corpus (English and Pidgin).

## Building a multilingual corpus (English and Pidgin)

To build a multilingual corpus around Pidgin we need a large collection of texts in Pidgin
paired with at least one other language, preferably English. This implies some form of
data searching and data collection.

### A. Data searching (web scraping / data mining)

There is definitely some Pidgin English text on the internet. But which sources have the
most Pidgin English, and, more importantly, *what is Pidgin English?* If you search for
text in Pidgin on the internet, how can you tell that the text you find is actually Pidgin?
This leads to a cyclic problem: we would need the model to find the text we need to build
the model. That is not the way to go. Moreover, there is not a lot of Pidgin text on the
net.

### B. Data collection

Since we cannot data-mine, we are left with the obvious option: collecting the data
ourselves. In clear terms, we rely on people who speak and write Pidgin English to provide
the data we need to build the Pidgin.Wiki model. To automate that collection and help
clean the data, we use a bot: [Bandolo](/architecture/bandolo/) is designated for this.

Apart from Bandolo's chat interface, data can also be provided directly on the curating
dashboard that manages data coming in from Bandolo and other sources.

## The model

With the corpus obtained from data collection using Bandolo, we apply
[natural language processing](https://en.wikipedia.org/wiki/Natural_language_processing)
with a combination of statistical and neural methods to produce translation results.

## Pidgin.Wiki

The combined result of every part of the architecture (Bandolo, the model, and other
tools) is presented on [Pidgin.Wiki](/architecture/pidgin-wiki/): a translator and
dictionary for Pidgin English.
