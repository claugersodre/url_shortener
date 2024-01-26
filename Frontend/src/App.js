import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { UseContext } from './Components/ProviderContext'
import UrlTable from './Components/UrlTable'
import Buttons from './Components/Button'

function App() {
  const [urls, setUrls] = useState([])
  const [urlToBeshortened, setUrlToBeshortened] = useState('')
  const [shortnenContent, setShortnenContent] = useState(false)
  const [showShortenenContent, setShowShortenenContent] = useState(false)
  const [urlToFind, setUrlToFind] = useState('')
  const [urlToShow, setUrlToShow] = useState('')
  const getAllUrl = async () => {
    const url = `http://localhost:3001`
    fetch(url,
      {
        method: 'GET',
        cache: 'no-cache',
        headers: {
          'Content-Type': "Application/Json"
        }
      })
      .then(response => response.json())
      .then(data => setUrls(data.AllUrls))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    getAllUrl()
  }, [])

  const handleInput = (e) => {
    const { value } = e.target
    setUrlToBeshortened(value)
  }
  const shortenedUrl = () => {

    urlToBeshortened.length > 0 &&
      fetch('http://localhost:3001/shorten',
        {
          method: 'POST',
          cache: 'no-cache',
          headers: {
            'Content-Type': "Application/Json"
          },
          body: JSON.stringify({ url: urlToBeshortened })
        }).then(response => response.json())
        .then(data => {
          setUrlToShow(data.url.short)
        })
        .then(() => getAllUrl())

  }
  const EnableShowShortnenContent = () => {
    setUrlToShow('')
    setUrlToFind('')
    setShortnenContent(false)
    setShowShortenenContent(true)
  }
  const EnableCreateShortenenUrl = () => {
    setUrlToShow('')
    setUrlToFind('')
    setShortnenContent(true)
    setShowShortenenContent(false)
  }

  const handleInputShowUrl = (e) => {
    const { value } = e.target
    if (value.length > 0) {
      setUrlToFind(value)
    }
  }
  const getUrl = () => {
    setUrlToShow('')
    if (urlToFind.length > 0) {
      fetch('http://localhost:3001/findurl',
        {
          method: 'POST',
          cache: 'no-cache',
          headers: {
            'Content-Type': "Application/Json"
          },
          body: JSON.stringify({ url: urlToFind })
        }).then(response => response.json())
        .then(data => {
          setUrlToShow(data?.url?.url)
        })
        .then(() => getAllUrl())
        .catch(()=>setUrlToShow('Not found'))
    }
  }
  return (
    <Container className="p-3">
      <UseContext.Provider value={urls}>
        <h1>
          Home Page
        </h1>
        <div className='row'>
          <div className="col-md-6">
            <Buttons onClick={EnableShowShortnenContent} message={'View your Url'} disabled={showShortenenContent}></Buttons>
          </div>
          <div className="col-md-6">
            <Buttons onClick={EnableCreateShortenenUrl} message={'Create New Shortened Url'} disabled={shortnenContent}></Buttons>
          </div>
        </div>
        <br />
        {shortnenContent && (
          <>
            <Buttons onClick={shortenedUrl} message={'Shorten Url'}>Add Url</Buttons>
            {'   '}
            <input type="text" name="urlShortner" onChange={handleInput} />
            <br /><br />
            <h3>Your shortened url is: {urlToShow}</h3>
          </>
        )}
        {showShortenenContent && (
          <>
            <Buttons onClick={getUrl} message={'Show your Url'}>Add Url</Buttons>
            {'   '}
            <input type="text" name="url" onChange={handleInputShowUrl} placeholder={urlToShow} />
            <br /><br />
            <h3>Your url is: {urlToShow}</h3>
          </>
        )}
        <UrlTable />
      </UseContext.Provider>
    </Container>
  )
}

export default App

