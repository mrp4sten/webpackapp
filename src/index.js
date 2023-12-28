import { v4 as uuidv4 } from 'uuid'
import laughing from './assets/laughing.svg'
import generateJoke from './generateJoke'
import './styles/main.scss'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

console.log('generateJoke :>> ', generateJoke())
console.log('uuidv4 :>> ', uuidv4())
