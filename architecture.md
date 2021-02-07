---
layout: page
title: Architecture
permalink: /architecture/
nav_order: 2
has_children: true
---

# Pidgin Wiki Architecture 

With the goal (building a model) in mind, the architecture of Pidgin.Wiki is designed to provide services that facilitate or are directly applicable to the building of the model we envisage. To build a Model we need a corpus, as we can't just build a model from space funny enough there is little or no corpus available for Pidgin English. So to facilitate the goal of building a model we need to;

- Build multilingual corpus [English and Pidgin]


## Building Multilingual Corpus [English and Pidgin]

To build a multilingaul corpora around Pidgin we need a large dictionary/database of texts in pidgin and at least one other language (preferably English). This imply some form of data searching and data collection is required.

### A) Data Searching (Web Scrapping/Data Minining)

There's definitly some amount of Pidgin English text on the internet. But, what sources have the most Pidgin English and most importantly *what is pidgin English?* in other words if searching for text in Pidgin English on the internet how can one tell that the text found is in Pidgin English or not? This leads to a cyclic problem, so we would need the model to search for text that we need to build the model! 😀 That's definitely not the way to go. Moroever there's not a lot of text in Pidgin on the net.


### B) Data Collection 

Since we can't data-mine, we are left with one of the few obvious options which is collecting/building the data we need ourselves. In clear terms, we would rely on people who speak and write Pidgin English to provide us with the data we need to build the Pidgin.Wiki model. So how are we going about that?  We need a piece of software to automate the collection of such data and assist with its cleaning. One of the best ways to do this is to make such a software a bot, [Bandolo](/bandolo) is designated for this. 

_Apart from Bandolo's chat interface, data could also be provided directly on the curating dashboard that manages data coming in from Bandolo and perhaps other sources._


## The Model

With the corpos obtained from the data collection face using `Bandolo` we then apply [Natual Language Proccessing](https://en.wikipedia.org/wiki/Natural_language_processing) with a combination of statistical and nueral methodologies geared towards arrival of results. 

## Pidgin.Wiki

The result of all parts of the architecture (Bandolo, Model and other tools) combined is presented on Pidgin.Wiki and a translator and dictionary for Pidgin English.