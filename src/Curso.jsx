import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({title, image, price, profesor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={ image } alt={ title } />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                { title }
            </h3>
            <div className="s-main-center">
                { `Prof.: ${ profesor }` }
            </div>     
        <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://www.google.com.pe">{ `$ ${ price } USD` }</a>
        </div>
        </div>
    </article>
)

Curso.propTypes = {
    title : PropTypes.string,
    image: PropTypes.string,
    profesor: PropTypes.string,
    price: PropTypes.number
}

Curso.defaultProps = {
    title : "No hay titulo",
    image : "https://d500.epimg.net/cincodias/imagenes/2016/02/11/lifestyle/1455191839_150012_1455192015_noticia_normal.jpg",
    profesor : "",
    price : 0
}

export default Curso;