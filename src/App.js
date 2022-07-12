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
import CatechismOfTheCatholicChurch from './pages/CatechismOfTheCatholicChurch'
import ReadingsOfTheDay from './pages/ReadingsOfTheDay'
import Search from './pages/Search'
import Home from './pages/Home'
import EmbeddedChatbot from './components/chatbot/EmbeddedChatbot'

function App() {
	const backendUrl = "http://127.0.0.1:8080"
	const location = useLocation();
	const [language, setLanguage] = useState(location.pathname.length >= 3 ? location.pathname.substring(1, 3) : "en")
	const [documentTitle, setDocumentTitle] = useState("Holy Chatter")
	const [searchValue, setSearchValue] = useState("")

	return (
		<React.Fragment>
			<Helmet>
				<html lang="fr" />
				<title>{documentTitle}</title>
				<meta name="description" content="Tutorial for React Helmet" />
			</Helmet>
			<Routes> {/* The Routes decides which component to show based on the current URL.*/}
				<Route path='/fr/' element={<Home language="fr" backendUrl={backendUrl} />}></Route>
				<Route path='/fr/*'>
					<Route path='' element={<HCNavBar language="fr" />}></Route>
					<Route path={GetStrLocalized("fr", "categoriesFolderName") + "/*"} element={<Categories language="fr" backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("fr", "chatbotFolderName")} element={<Chatbot language="fr" />}></Route>
					<Route path={GetStrLocalized("fr", "aboutFolderName")} element={<About language="fr" />}></Route>
					<Route path={GetStrLocalized("fr", "searchFolderName") + "/*"} element={<Search language="fr" backendUrl={backendUrl} setSearchValue={setSearchValue} />}></Route>
					<Route path={GetStrLocalized("fr", "readingsFolderName")} element={<Readings language="fr" />}></Route>
					<Route path={GetStrLocalized("fr", "readingsFolderName") + "/" + GetStrLocalized("fr", "bibleFolderName") + "/*"} element={<Bible language="fr" backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("fr", "readingsFolderName") + "/" + GetStrLocalized("fr", "catechismOfTheCatholicChurchFolderName") + "/*"} element={<CatechismOfTheCatholicChurch language="fr" backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("fr", "readingsFolderName") + "/" + GetStrLocalized("fr", "textsOfThePopeFolderName")} element={<TextsOfThePope language="fr" />}></Route>
					<Route path={GetStrLocalized("fr", "readingsOfTheDayFolderName") + "/*"} element={<ReadingsOfTheDay language="fr" backendUrl={backendUrl} readingsType="all" />}></Route>
					<Route path={GetStrLocalized("fr", "gospelOfTheDayFolderName") + "/*"} element={<ReadingsOfTheDay language="fr" backendUrl={backendUrl} readingsType="gospel" />}></Route>
					<Route path={GetStrLocalized("fr", "sourcesFolderName") + "/"} element={<Sources language="fr" backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("fr", "sourcesFolderName") + "/*"} element={<Source language="fr" backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("fr", "christianMessageFolderName")} element={<ChristianMessage language="fr" />}></Route>
					<Route path='*' element={<Article language="fr" setDocumentTitle={setDocumentTitle} backendUrl={backendUrl} />}></Route>
				</Route>
				<Route path='/en/' element={<Home language="en" backendUrl={backendUrl} />}></Route>
				<Route path='/en/*'>
					<Route path='' element={<HCNavBar language="en" />}></Route>
					<Route path={GetStrLocalized("en", "categoriesFolderName") + "/*"} element={<Categories language="en" backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("en", "chatbotFolderName")} element={<Chatbot language="en" />}></Route>
					<Route path={GetStrLocalized("en", "aboutFolderName")} element={<About language="en" />}></Route>
					<Route path={GetStrLocalized("en", "searchFolderName") + "/*"} element={<Search language="en" backendUrl={backendUrl} setSearchValue={setSearchValue} />}></Route>
					<Route path={GetStrLocalized("en", "readingsFolderName")} element={<Readings language="en" />}></Route>
					<Route path={GetStrLocalized("en", "readingsFolderName") + "/" + GetStrLocalized("en", "bibleFolderName") + "/*"} element={<Bible language="en" backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("en", "readingsFolderName") + "/" + GetStrLocalized("en", "catechismOfTheCatholicChurchFolderName") + "/*"} element={<CatechismOfTheCatholicChurch language="en" backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("en", "readingsFolderName") + "/" + GetStrLocalized("en", "textsOfThePopeFolderName")} element={<TextsOfThePope language="en" />}></Route>
					<Route path={GetStrLocalized("en", "readingsOfTheDayFolderName") + "/*"} element={<ReadingsOfTheDay language="en" backendUrl={backendUrl} readingsType="all" />}></Route>
					<Route path={GetStrLocalized("en", "gospelOfTheDayFolderName") + "/*"} element={<ReadingsOfTheDay language="en" backendUrl={backendUrl} readingsType="gospel" />}></Route>
					<Route path={GetStrLocalized("en", "sourcesFolderName") + "/"} element={<Sources language="en" backendUrl={backendUrl} />}></Route>
					<Route path={GetStrLocalized("en", "sourcesFolderName") + "/*"} element={<Source language="en" backendUrl={backendUrl} />}></Route>
					<Route path='*' element={<Article language="en" setDocumentTitle={setDocumentTitle} backendUrl={backendUrl} />}></Route>
				</Route>
				<Route path='*' element={<Navigate to="/fr" />}></Route>
			</Routes>
			<HCNavBar language={language} setLanguage={setLanguage} location={location} backendUrl={backendUrl} />
			<Banner language={language} searchValue={searchValue} />


			<EmbeddedChatbot backendUrl={backendUrl} />
		</React.Fragment>
	)
}

export default App

