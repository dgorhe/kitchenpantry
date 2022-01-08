from google_images_search import GoogleImagesSearch
import pandas as pd
import os
import json
import uuid

# If this doens't work, check environment variables on local machine
GCS_DEVELOPER_KEY = os.getenv('GCS_DEVELOPER_KEY')
GCS_CX = os.getenv('GCS_CX')

# Google Images Search
queries = json.load(open("queries.json")) 
searches = []

for query in queries.items():
    _search_params = {
        'q': query[0],
        'num': query[1],
        'safe': 'off',
        'filetype': 'png',
        'imgType': 'photo',
        'imgSize': 'MEDIUM',
        'imgColorType': 'color'
    } 
    searches.append(_search_params)

labels = []

# Downloading images
with GoogleImagesSearch(GCS_DEVELOPER_KEY, GCS_CX) as gis:
    for search in searches:
        gis.search(search_params=search)

        for image in gis.results():
            image_id = str(uuid.uuid4())
            image.download('./training_data/' + image_id)
            labels.append((image_id, search['q']))

# Post-processing 
dirs = [dir for dir in os.listdir("./training_data/") if not dir.startswith(".")]
for d in dirs:
    target_name = d
    image = os.listdir("training_data/" + d)[0]
    os.rename("training_data/" + d + "/" + image, "training_data/" + target_name + ".jpg")
    os.rmdir("training_data/" + d)


df = pd.DataFrame(labels)
pd.DataFrame.to_csv(df, "./labels.csv", index=False, header=['image_id', 'semantic_label'])
