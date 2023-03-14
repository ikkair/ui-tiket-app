import React from 'react'
import planes from '../../src/assets/icon/planes.png'
import style from './404.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <body className={`bg-blue ${style.bg}`}>
      <div className={style.stars}>
        <div className={style["central-body"]}>
          <img className={style["image-404"]} src="http://salehriaz.com/404Page/img/404.svg" width="300px" />
          <Link to="/" className={style['btn-go-home']}>GO BACK TO ANKASA</Link>
        </div>
        <div className={style.objects}>
          <img className={style.object_rocket} src={planes} width="40px" />
          <img className={style.object_rockets} src={planes} width="80px" />
          <img className={style.object_rocketss} src={planes} width="60px" />
          <div className={style['earth-moon']}>
            <img className={style.object_earth} src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
            <img className={style.object_moon} src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
          </div>
          <div className={style.box_astronaut}>
            <img className={style.object_astronaut} src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
          </div>
        </div>
        <div className={style.glowing_stars}>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
        </div>

      </div>

    </body>
  )
}

export default NotFound