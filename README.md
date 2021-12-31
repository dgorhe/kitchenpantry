# Kitchen Pantry 🍲
This is the repository for the app Kitchen Pantry. This may not be public in the future but for now I'll leave it public in case anyone wants to contribute. If you want help in a way other than coding the stuff in here, reach out to me via darveshgorhe@gmail.com. As I solidify the basics of the app, I'll add more specific things that people can help with. I'd love to hear your suggestions and feedback as well.

Here's a high-level overview of the project

<img style="display: block; margin: auto;"
src="https://github.com/dgorhe/kitchenpantry/blob/main/info/latex/highest_level_overview/highest_level_overview.jpeg">

The Google Cloud Platform section is intended for the machine learning experimentation, training, and deployment. The models are deployed via Google's Vertex AI service which wraps PyTorch models in a Docker container and creates HTTPS endpoints to expose them to other web services within the same project (i.e Firebase Cloud Functions in this case). They can be opened to the entire web but this is obviously a security risk.
