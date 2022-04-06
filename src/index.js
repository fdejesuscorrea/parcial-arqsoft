import './db/db'
import app from './app'

app.listen(app.get('port'), () => {
    console.log(`App on port ${app.get('port')}`)
})