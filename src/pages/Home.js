import React from 'react'
import Hero from '../components/Hero'
import ItemListContainer from '../components/ItemListContainer'

const Home = () => {
    return (
        <main>
            <Hero title="El mejor Compraventa de colombia" />
            <ItemListContainer />  
        </main>
    )
}

export default Home
