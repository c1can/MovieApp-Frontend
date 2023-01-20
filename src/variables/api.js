let API_URL

if(process.env.NODE_ENV == 'production') {
    API_URL = 'https://movieapp-backend-production.up.railway.app/api'
}else {
    API_URL = 'http://localhost:3000/api'
}




export default API_URL