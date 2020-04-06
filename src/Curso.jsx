import React from 'react'

const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="Poster del curso" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                Programación orientada a objetos con Go
            </h3>
        <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                    <div className="circle img-container">
                        <img src="https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg" alt="Perfil" />
                    </div>
                </div>
                <span className="small">Alexys Lozada</span>
            </div>
        </div>
        <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://www.google.com.pe">$ 20USD</a>
        </div>
        </div>
    </article>
)

export default Curso;