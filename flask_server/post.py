import requests
import os

#save full filepath
__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

resp = requests.post("http://localhost:5000/predict",
                     files={"file": open(os.path.join(__location__, "test.JPG"), "rb")})

print(resp.json())