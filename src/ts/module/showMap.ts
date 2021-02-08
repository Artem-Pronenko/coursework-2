export const getUserLocation = async () => {
  const res = await fetch('https://api.sypexgeo.net/json/')
  const data = await res.json()
  const lat = data.city.lat || '49.59373'
  const lng = data.city.lon || '34.54073'
  return {
    lat,
    lng
  }
}

getUserLocation().then(location => {
  if (!document.getElementById('map')) return
  const {lat, lng} = location
  const script = document.createElement('script')

  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBmrFlz3jYKxOModg8V5CQu_NmfO18tUn0&callback=initMap'
  script.defer = true
  window.initMap = function () {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat, lng},
    })
    const directionsRenderer = new google.maps.DirectionsRenderer()
    directionsRenderer.setMap(map);
  }
  document.head.appendChild(script)
})

export const showMap = () => {
  const $map = document.getElementById('map')
  const map = new google.maps.Map($map)
  const directionsService = new google.maps.DirectionsService()
  const directionsRenderer = new google.maps.DirectionsRenderer()
  directionsRenderer.setMap(map)
  const btnShowMap = document.querySelector('.btn-show-map')

  btnShowMap.addEventListener('click', async () => {
    const title = document.querySelector('.full-card__title')
    const request = {
      origin: await getUserLocation(),
      destination: title.textContent,
      travelMode: 'WALKING'
    }
    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result)
        $map.classList.remove('d-n')
        document.querySelector('.card-wrap').remove()
        window.scrollTo(0, document.body.scrollHeight)
      } else {
        console.error(status)
      }
    })
  })
}
