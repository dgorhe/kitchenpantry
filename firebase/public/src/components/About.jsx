import React from 'react'

function About() {
    return (
        <div className='about'>
            <div class='container'>
                <div class='row align-items-center my-5'>
                    <div class="col-lg-7 ml-auto">
                    <h1>Background and Motivation</h1>
                    <p>
                        So far this is a personal project from me, Darvesh Gorhe. If anyone wants to help with 
                        any aspect of this <a href="mailto:darveshgorhe@gmail.com">please let me know</a>. You can find the technical details of the implementation
                        on the <a href="https://github.com/dgorhe/kitchenpantry" target="_blank">GitHub repository</a>. 
                        I started this project out of a personal need to keep track of food and recipes. There's lots of sites
                        to get recipes and obviously tons of places to shop for ingredients. There's even services to <a href="https://hellofresh.com/">
                        deliver ingredients and instructions to your doorstep </a>. I want something that will help me organize what ingredients
                        I have, recipes I can make with those ingredients, and what ingredients I need to make new recipes. I thought
                        this would be a thing by now, but apparently not. It's harder than I thought but that's what makes it more exciting.
                        Specifically, the issue of ingredient ontology. If you have a lemon you also have lemon zest and lemon juice. 
                        But if you have lemon juice, you may or may not have lemons. A recipe might call for ground meat, but not all
                        meats are a subset of ground meat. Curry powder is a type of spice, but curry powder itself is just a mix of other
                        spices - is it 1 or 2 degrees separated from spice? And on and on it goes. 
                        These aren't huge issues at first since it's reasonable to hand-check the first 1000 or so most popular ingredients.
                    </p> 

                    <h1>Roadmap</h1>
                    <ul>
                        <li>Create static version of the web app</li>
                        <li>Implement front end interactivity for web app</li>
                        <li>Implement Firebase authentication</li>
                        <li>Connect Firebase Cloud Functions</li>
                        <ul>
                            <li>Uploader</li>
                            <li>Classification</li>
                            <li>Receipt OCR</li>
                        </ul>
                        <li>Train (rudimentary) PyTorch models for classification and OCR endpoints</li>
                        <li>Serve PyTorch models</li>
                        <li>Resolve technical debt</li>
                        <li>Mobile feature parity</li>
                    </ul>

                    <h1>Pricing</h1>
                    <b> For now everything is free</b>. Not sure how I'll structure pricing going forward. I'll be transparent with the costs and margins 
                    as well as my reasoning for the pricing. The value proposition is that you're saving time and money (i.e. less wasted food). One could easily imagine
                    saving hundreds of dollars per year. You can decide whether it's worth the price, but <em>you will not be product</em>. None of this selling user data bullshit.
                    If you want data about what users cook and eat, just pay some people to go to grocery stores in calculate some sample statistics.
                    The biggest cost for me as of writing this is hosting an HTTPS endpoint for my machine learning models. I <a 
                    href="https://cloud.google.com/blog/topics/developers-practitioners/pytorch-google-cloud-how-deploy-pytorch-models-vertex-ai">followed 
                    this tutorial</a> only to find out that the Google Cloud Vertex AI endpoints cost $0.21/hr. That's something like $250/month per node. I can't afford that!
                    I have to figure out a cheaper way or just pony up the money.
                    <h1>Credits</h1>
                    <a href="mailto:darveshgorhe@gmail.com">Darvesh Gorhe</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;