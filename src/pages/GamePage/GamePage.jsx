import { FaPlay } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { currentGameSelector } from '../../redux/slices/gamesSlice'
import InCartBtn from '../../components/UI/InCartBtn'
import PageTop from '../../components/UI/PageTop'
import './game-page.scss'
import { useState } from 'react'

function GamePage() {
  const game = useSelector(currentGameSelector)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const playVideoHandler = () => {
    setIsVideoPlaying(true)
  }

  return (
    <section className="game-page">
      <PageTop>{game.name}</PageTop>
      <div className="game-page__content">
        <div className="game-page__content-left">
          <div className="game-page__content-left_video">
            {isVideoPlaying ? (
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src={`${game.video}?autoplay=1&mute=1`}
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            ) : (
              <button onClick={playVideoHandler}>
                <img src={game.img} alt="game-video-img" />
                <FaPlay />
              </button>
            )}
          </div>
        </div>
        <div className="game-page__content-right">
          <img
            className="game-page__content-right_img"
            src={game.img}
            alt="game-image"
          />
          <div className="game-page__content-right_wrapper">
            <ul className="game-page__content-right_info">
              <li>
                <b>Дата выхода:</b> 8 ноя. 2021
              </li>
              <li>
                <b>Разработчик:</b> Turn 10 Studios, Playground Games
              </li>
            </ul>
            <ul className="game-page__content-right_genres">
              <h6>Жанры:</h6>
              {game.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
            <div className="game-page__content-right_bottom">
              <span>{game.price} руб.</span>
              <InCartBtn game={game} />
            </div>
          </div>
        </div>
      </div>
      <ul className="game-page__desc">
        <li>
          <b>Forza Horizon 5</b> – гоночная игра, сосредоточенная на
          многопользовательском участии в заездах и свободном путешествии по
          открытому миру. Данный проект включает множество аспектов из
          предыдущих игр Форзы. Представлено более 200 оригинальных автомобилей
          реально существующих компаний, реалистичная физика езды и сцепления.
          Присутствует высококачественная графика, эффекты и другие элементы,
          полностью погружающие пользователей в правдоподобную среду.
        </li>
        <li>
          Катаясь по миру, игрок способен столкнуться с другими геймерами или
          обычными машинами, управляемыми искусственным интеллектом. По всей
          территории разбросана куча оригинальных гонок, например, дрифтинг,
          езда на внедорожниках, участие в выступлениях на Monster Truck и
          множество других. Юзеры способны участвовать в поиске, чтобы
          моментально перенестись на гоночную трассу и соревноваться с
          гонщиками. Среди особенности игрового процесса Форза Хорайзен 5,
          имеется динамическая смена сезонов, непосредственно влияющая на
          геймплей. Автомобили можно водить весной, осенью, летом и зимой, что
          повлияет на сцепление, видимость и тип соревнований.
        </li>
        <li>
          В мире разбросано много мест с второстепенными миссиями, где игроки
          способны устанавливать рекорды. Это небольшие трамплины или места для
          дрифта, где потребуется набрать наибольшее кол-во очков, чтобы попасть
          в таблицу лидеров. К примеру, прыгая на трамплинах, надо пролететь на
          максимальное количество метров. Пользователи могут долгое время
          подбирать правильный угол и место для разгона, чтобы побить рекорды.
          Игра поддерживает разрешение 4К и частоту в 60 кадров в секунду.
          Геймеры способны пользоваться рулями, геймпадами или джойстиками для
          участия в заездах.
        </li>
      </ul>
    </section>
  )
}

export default GamePage
