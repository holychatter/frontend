import About from './pages/About'
import Banner from './components/Banner'
import HCNavBar from './components/HCNavBar'
import Chatbot from './pages/Chatbot'
import Categories from './pages/Categories'
import ChristianMessage from './pages/ChristianMessage'
import Readings from './pages/Readings'
import Source from './pages/Source'
import Sources from './pages/Sources'
import GetStrLocalized from './datas/GetStrLocalized'
import React from 'react'
import { Navigate, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from "react-helmet"
import Article from './pages/Article'
import TextsOfThePope from './pages/TextsOfThePope'
import Bible from './pages/Bible'

function App() {
	const backendUrl = "http://localhost:8080"
	const location = useLocation();
	const [language, setLanguage] = useState(location.pathname.length >= 3 ? location.pathname.substring(1, 3) : "en")

	return (
		<React.Fragment>
			<Helmet>
				<html lang="fr" />
				<title>React Helmet Tutorial</title>
				<meta name="description" content="Tutorial for React Helmet" />
				<meta name="theme-color" content="#E6E6FA" />
			</Helmet>
			<Routes> {/* The Routes decides which component to show based on the current URL.*/}
				<Route path='/fr/*'>
					<Route path='' element={<HCNavBar language="fr" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("fr", "categoriesFolderName") + "/*"} element={<Categories language="fr" setLanguage={setLanguage} backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("fr", "chatbotFolderName")} element={<Chatbot language="fr" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("fr", "aboutFolderName")} element={<About language="fr" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("fr", "readingsFolderName")} element={<Readings language="fr" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("fr", "readingsFolderName") + "/" + GetStrLocalized("fr", "bibleFolderName") + "/*"} element={<Bible language="fr" setLanguage={setLanguage} backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("fr", "readingsFolderName") + "/" + GetStrLocalized("fr", "textsOfThePopeFolderName")} element={<TextsOfThePope language="fr" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("fr", "sourcesFolderName") + "/"} element={<Sources language="fr" setLanguage={setLanguage} backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("fr", "sourcesFolderName") + "/*"} element={<Source language="fr" setLanguage={setLanguage} backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("fr", "christianMessageFolderName")} element={<ChristianMessage language="fr" setLanguage={setLanguage} />}></Route>
					<Route path='*' element={<Article language="fr" setLanguage={setLanguage} backendUrl={backendUrl} />}></Route>
				</Route>
				<Route path='/en/*'>
					<Route path='' element={<HCNavBar language="en" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("en", "categoriesFolderName") + "/*"} element={<Categories language="en" setLanguage={setLanguage} backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("en", "chatbotFolderName")} element={<Chatbot language="en" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("en", "aboutFolderName")} element={<About language="en" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("en", "readingsFolderName")} element={<Readings language="en" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("en", "readingsFolderName") + "/" + GetStrLocalized("en", "bibleFolderName") + "/*"} element={<Bible language="en" setLanguage={setLanguage} backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("en", "readingsFolderName") + "/" + GetStrLocalized("en", "textsOfThePopeFolderName")} element={<TextsOfThePope language="en" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("en", "sourcesFolderName") + "/"} element={<Sources language="en" setLanguage={setLanguage} backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("en", "sourcesFolderName") + "/*"} element={<Source language="en" setLanguage={setLanguage} backendUrl={backendUrl} />}></Route>
					<Route path='*' element={<Article language="en" setLanguage={setLanguage} backendUrl={backendUrl} />}></Route>
				</Route>
				<Route path='*' element={<Navigate to="/fr" />}></Route>
			</Routes>
			<Banner language={language} />
		</React.Fragment>
	)
}

export default App

