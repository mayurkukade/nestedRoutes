
import { Routes ,Route} from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'

const MainPage = () => {
  return (
    <div>
        <p>MainPAge</p>
      <Routes>
<Route path='page1'  element={<Page1/>} />
<Route path='page2' element={<Page2/>} />
      </Routes>
    </div>
  )
}

export default MainPage
