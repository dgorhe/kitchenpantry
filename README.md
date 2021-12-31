# Kitchen Pantry 🍲
This is the repository for the app Kitchen Pantry. This may not be public in the future but for now I'll leave it public in case anyone wants to contribute. If you are unfamiliar with coding but you still want to help out, reach out to me via darveshgorhe@gmail.com. If you want to help in some other way (graphic design, Figma sketches, creating a pitch deck, etc) I encourage you to reach out as well. As I solidify the basics of the app, I'll add more specific things that people can help with. I'd love to hear your suggestions and feedback as well. I'm also going to explain some of the technical details of the project here in case there's a specfic part that piques your interest. 

## Goals and Motivation
The technical goals of this project are quite different from the functional goals. This project prioritizes getting a minimum viable product (MVP) over scalability and performance. This might change if this app has some crazy number of users or if costs are spiraling out of control. I am highly dubious that this will ever happen, and if it does we'll just have to turn the app into a subscription or get funding some other way. Since MVP is the goal, I chose a serverless architecture and decided to use Firebase. This is largely because I have experience using Firebase Cloud Functions and Firebase Firestore. Consequently, I am using other Google Cloud Platform products because they are easy to work with in Firebase (not necessarily *easier* but easy). I am using Google's Vertex AI platform for machine learning deployment. I will likely use another service for training since the GPU instances are quite expensive when billed on a per hour basis. Something like Paperspace might be a good alternative. For now experimentation, training, and deployment will use Vertex.

## High-level Architecture

<img style="display: block; margin: auto;"
src="https://github.com/dgorhe/kitchenpantry/blob/main/info/latex/highest_level_overview/highest_level_overview.jpeg">

### Google Cloud Platform (GCP)
The Google Cloud Platform section is intended for the machine learning experimentation, training, and deployment. The models are deployed via Google's Vertex AI service which wraps PyTorch models in a Docker container and creates HTTPS endpoints to expose them to other web services within the same project (i.e Firebase Cloud Functions in this case). They can be opened to the entire web but this is obviously a security risk. I don't have plans to use many other features from GCP but it's possible that this project transitions to a more traditional client-server model via the regular GCP instances, traditional load-balancing, etc. That's a problem for future Darvesh.


### React and React-Native
I have no allegiance to any framework nor will I ever. Frameworks are a means to an end not an end in and of themselves. I chose React and React-Native because they are primarily JavaScript frameworks and I'm familiar writing applications with JavaScript. Moreover, I wanted a framework with extensive support for TypeScript to catch errors during compilation rather than runtime. Another consequence of choosing React and React-Native and using TypeScript is the ease of moving between writing for the backend versus the frontend. Naturally there will be a context switch writing one versus the other, but having one underlying language minimizes the slowdown.

### Firebase
As I mentioned above, I have experience writing Firebase Cloud Functions so that was my primary motivation for choosing Firebase. I created an nginx server with an AWS EC2 instance once and it worked but it was also too much work and configuration for even a simple app. The tradeoff of lower performance for more convenience with Firebase is well worth it in my opinion.
