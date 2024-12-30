
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import { ThemeProvider } from './context/theme-provider'
import WeatherDashboardPage from './pages/weather-dashboard-page'
import CityPage from './pages/city-page'
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='light'>
        <Layout>
          <Routes>
            <Route path='/' element={<WeatherDashboardPage />} />
            <Route path='/city/:cityName' element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
