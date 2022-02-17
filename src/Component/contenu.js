import React from 'react';
import './contenu.css'


export default function contenu() {
    return (

        <div>
            <section className='accueil'>
                <div className='container-accueil'>
                    <div className='left'>
                        <div className='title'>
                            <span>POUR LES ENTREPRISES</span>
                        </div>
                        <div className='big-title'>
                            <span>Conçu avec les entreprises, pour les entreprises</span>
                        </div>
                        <div className='text'>
                            <p> Slack est sécurisé. Modulable.
                                C’est un logiciel que les<br/>personnes aiment utiliser,
                                qui est disponible pour aider<br/>votre entreprise.
                            </p>
                        </div>
                        <div className='btn-contact'>

                        </div>
                    </div>
                    <div className='right'>
                        <img src='./public/img/image-slake.PNG'/>
                    </div>
                </div>
            </section>

        </div>

    )
}
