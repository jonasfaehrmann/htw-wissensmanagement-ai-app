
export default async function predictLeafHealth (image) {
  const formData = new FormData()
  formData.append('file', { uri: image, name: 'image.jpg', type: 'image/jpeg' })
  const result = await fetch('http://192.168.2.121:5000/predict', {
    method: 'POST',
    headers: {
      'content-type': 'multipart/form-data'
    },
    body: formData
  }).then(response => response.json())
    .then(json => {
      return json
    }).catch((error) => console.log(error))

  return result
}
