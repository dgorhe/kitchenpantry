import argparse
import requests

parser = argparse.ArgumentParser(description = "Call Firebase Functions via command line")

# Positional arg for function to call
parser.add_argument(
        'function',
        nargs=1,
        type=str,
        help='function name to call',
)

# Whether the call is for emulator or deployment
parser.add_argument(
        '--local',
        nargs=1,
        type=bool,
        choices=[True, False],
        default=True,
        help="Whether you want to call the function via the emulator. By default true."
)

# JSON body to send to function
parser.add_argument(
        '--body',
        nargs=1,
        type=str,
        default='body.json'
)

# HTTPS request type
parser.add_argument(
        '--requestype',
        nargs=1,
        type=str,
        default='post',
        choices=['get', 'put', 'post']
)

# Generating json to send
def generate_default_body(data):
    return json.dumps({
            "data": data
    })

# TODO: Try to grep all the functions in index.js

functions = {
    "testFunction": generate_default_body("recipe_id")
}

args = parser.parse_args()

if args.local[0] == True:
    base_url = "https:localhost:4000/functions/"
else:
    base_url = "https://somethingelseidontremember"


# Continue writing this later
url = base_url + functions[args.function[0]]
response = requests.post()
