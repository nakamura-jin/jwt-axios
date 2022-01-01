import axios from 'axios'
import Cookies from 'js-cookie'


axios.defaults.baseURL = 'http://localhost:8000/api';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get('_myapp_token')