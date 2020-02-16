# Hack The Valley 4 

## Inspiration

Nowadays, as the amount of repairman scam is growing, it is extremely hard to find some quality and honest technicians that are reasonably priced. Whether people are looking for a car mechanic or a home repair handyman, many people have experienced overpriced and low-quality services. We see that different decentralized platforms made people’s lives convenient so we believe that this would be a good idea to approach. We want people to not stress about getting scam when finding technicians so we decided to build a platform about it.

## What it does

Our website facilitates searching for all kinds of technicians in a reliable way. It is basically Uber for technicians, users don't have to wait for days to make an appointment and weeks to get things done. Just a few clicks on the app and a few minutes, their roof is done renovating. We allow both searchers and technicians to review each others after every job so that users and technicians can see what to expect in the job and decide whether to continue with the job. We also verify technicians with official licenses so that people can safely use the services. The website calculates the average ratings for each service provider as well as the average rating of everyone to provide a correct rating scale.

## How we built it

We had a Mongo Atlas database where we store all of the non relative data, such as user records, comments, reviews, service providers, service postings, etc. Using express.js framework, we created a microservice architecture that allows us to create REST API endpoints. We deployed our micro services onto Google app engine. Furthermore, we developed our frontend solution using react and bootstrap where we made the application user friendly.

## Challenges we ran into
React was particularly challenging for us as our knowledge in React was very brief, hence lots of problems arise and it took us a very long time to debug them. Initially we were thinking of using Firebase Functions, but it did not work after several hours of trying and decided to shift to alternative tech stacks instead. We also ran into some issue of CORS which blocked our access from the browser so we could not do any POST request. We had to change them to GET request and put the data in the query section.

## Accomplishments that we're proud of
We are happy that we are able to get everything done for the hackathon. We are proud of ourselves that we learned those in a very short period of time so that we can apply them in the project. For some of us, we haven’t used some if them before so we learned them through online tutorials during the hackathon. We are proud that we built a fully functional web app that consists of database infrastructure.

## What we learned
We are proud to state that we learned so much from our application. For instance, most of us were unfamiliar with using backend technologies such as Express.js and Google Map API as well as frontend technologies such as React. We also learned how everything can be pieced together - tying the frontend and backend together. We learned to work together technically and effectively through collaboration on this project. Also, we learned that it is very important to write clean code that is easy to read by teammates and others.

## What's next for WorkBounce
We hope to improve the UI for the application since we did not have enough resources for that. Furthermore, we would add more features to the web app so that it would be easier to use and allow people to get more from WorkBounce. Specifically, we want to allow users and technicians to be able to chat safely and technically before the job. Connecting them through text message and phone calls might not be safe so adding a chat box that guides them to a solution in the web app might be a good idea. Due to the time limitation, there was so much we could do, but we are proud to have finished the product, connecting our frontend to the backend.
