import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

function Home() {
    return (
        <div>
            <Header/>
            <section className="company">
                <div className="wrapper">
                    <div className="company-content">
                        <div className="company-content__text">
                            <h1>Комплексное решение аграрных вопросов</h1>
                            <h2>Компания СОПРАВИА поставляет пестициды высшего качества Китайского, Венгерского и Индийского производства</h2>
                        </div>
                    </div>
                </div>
            </section>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home
