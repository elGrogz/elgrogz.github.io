+++
title = "Some Thoughts on 'Agile Testing Condensed'"
description = ""
tags = [
"Agile",
"Testing"
]
date = 2021-03-20
author = "Gregor Gilchrist"
+++

Traditional testers are in a precarious position in the tech industry. No longer is it enough for testers to be at the last stage in the process of 'plan - design - code - test' and act as the final arbitrers of quality. Development cycles are getting shorter, customers have higher expectations for what they expect from websites and apps, and developers have an ever increasing array of tools to help them test their own code. '[Agile Testing Condensed](https://www.amazon.co.uk/Agile-Testing-Condensed-Brief-Introduction/dp/199922051X)' (a shortened version of 'Agile Testing' by Janet Gregory and Lisa Crispin) aims to be a quick reference guide that informs testers how to deliver value to teams in modern technology workplaces.

While extremely short (you can read it in an afternoon if you're determined) it gives a good explanation of some of the main concepts surrounding Agile and how testers fit into teams practicing it. Here are some of my main takeaways from it.

## *Uncertainty and feedback loops*

At its core, Agile is a product development approach that aims to guide us when there is *uncertainty* around a project. This is usually focussed around what customers find valuable and hence we have little knowledge of what we should build as a product or feature. However it could also be applied to projects where we are using new technologies or are working with an external 3rd party.

With this key concept of *uncertainty* in mind, the best way to discover value and reduce risk in uncertain situations is to shorten feedback loops as much as possible. We want to develop things quickly in small chunks and get fast feedback from actual users. This in turn informs us about the next thing we develop and gives us confidence that we are on the right track.

How, as testers, can we add value in this situation? We can:

- Highlight risks to the rest of the engineering team from the start of development.
- Ask questions to expose misunderstandings or unforeseen issues.
- Getting concrete examples of feature behaviour so everyone is on the same page about what the feature is doing.
- Help automate tests that will give developers quick feedback on code correctness and if they have broken anything.
- Coach coders on test techniques and methods so they can better test their own code.
- Take a bigger picture view of team health and how product features fit together.

## *Concrete Examples*

According to *Agile Testing Condensed* this is one of the key activities that a team can do to level up its planning, development and testing. Often teams make unseen assumptions about how a system should behave, and this lack of communication can result in missed requirements and issues further down the line.

To combat this, coders, testers and business stakeholders should meet to discuss the behaviour of a feature under development and turn these into concrete examples of both desired and undesired behaviour. For example, if developing an invoicing system the following concrete examples could be created:

- A user can create an invoice with a recipient address and a monetary amount.
- A user cannot create an invoice with a recipient address and no monetary amount.
- A user cannot create an invoice with a monetary amount and no recipient address.

While this example is simple, it shows how teams can easily document the key behaviours that a feature must implement. This then gives coders something to code and test to, while giving business stakeholders the confidence that their product is being developed to satisfy the correct user problems.

In addition, if using a consistent format to structure these examples (for example the Given-When-Then Gherkin syntax), the team can turn these into automated tests during coding to give confidence that future code has not broken existing functionality.

## *Agile testers play numerous roles*

Coders have an ever-increasing range of tools to help them test, so the obvious role of testers is reduced. However testers can help by taking on roles to 'fill in the gaps' that the team needs. These can be:

- Coaches - Testers have expertise in test techniques and methodologies, and can coach the team to test better.
- Doctors for team morale - Testers by their nature are on the lookout for for issues in the code, and this makes them good for monitoring team morale and raising any issues.
- Problem Solvers - Echoing the above, testers are well positioned to spot problems in the development pipeline and ways to speed things up.
- Question askers - Testers are always on the lookout for risks and problems, and as such ask excellent questions.
- Testers (obviously!)

## *The customer ultimately judges quality*

Amongst all the methodologies and technologies in modern teams, the most important thing is to deliver value to the customer. Improving team processes and testing should not be done for its own sake, instead it should be with the aim of speeding up development, shipping quality features, and reducing risk.

With this in mind, it is important to define metrics on what constitutes user satisfaction, to monitor customer usage in production, and top reach out to customers to see what is working for them and what isn't. Testers should be working with business experts, including product owners and support staff, as well as customers when appropriate, to get a real idea of what matters to users. This ultimately helps define what quality is for a development team.
