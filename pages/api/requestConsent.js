export default function handler(req, res) {
    
const express = require('express')
const next = require('next')
const axios = require('axios')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  async function postData() {
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '3ac846dacb2f77c328a2740732'
        }
      }
    
  const data = {
    // request data
        "vuaId": "9987600001@dashboard-aa-uat",
        "templateName": "ONETIME",
        "trackingId": "{{trackingId}}",
        "redirectionUrl":"https://pirimiditech.com/hackathon",
        "fipIds":[]
    
  }
  
    try {
      const response = await axios.post('https://hackathon.pirimidtech.com/hackathon/init/redirection', data, config)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  
  server.get('/api/requestConsent', (req, res) => {
    res.json()
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

  }