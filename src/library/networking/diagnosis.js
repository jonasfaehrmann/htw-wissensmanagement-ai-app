

export default function predictLeafHealth (image) {
  console.log(image)
  fetch('http://192.168.2.121:5000/predict', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image: image
    })
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    })
    .catch((error) => console.error(error))
}
