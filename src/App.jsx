import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './portfolio'
import Google8021a8476876d021 from './google8021a8476876d021'
function App() {
    return (
        < >
            <Router>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/google8021a8476876d021.html" element={<Google8021a8476876d021 />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
