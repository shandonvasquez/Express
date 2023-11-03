import app from './app.js'
import { envs } from './config/enviroments/enviroments.js'

app.listen(3000, () =>{
    console.log(`Server is running on port ${3000}`)
})