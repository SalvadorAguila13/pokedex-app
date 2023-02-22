import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import './styles/Home.css'

const Home = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const nameTrainer = e.target.nameTrainer.value
        dispatch(setNameTrainerGlobal(nameTrainer))
    }

  return (
    <main className='home'>
        <section className='home__conteiner'>
            <div className='home__img'>
                <img src="/images/PokedexHome.png" alt="" />
            </div>
                <h2 className='home__title'>Hello trainer!</h2>
                <p className='home__subtitle'>Give your name to start!</p>
            <form className='home__form' onSubmit={handleSubmit}>
                <input 
                className='home__input'
                required
                id='nameTrainer' 
                type="text" 
                placeholder='Your Name...' />
                <button className='home__btn'>Start</button>
            </form>
            <div className='home__img-trainer'>
                <img src="/images/ash2.png" alt="" />
            </div>
        </section>
        <footer className='home__footer'>
            <div className='home__footer__red'>
            </div>
            <div className='home__footer__black'>
                <div className='home__footer__pokeball'>
                </div>
            </div>
        </footer>
    </main>
  )
}

export default Home