import { FaPlay } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { currentGameSelector } from '../../redux/slices/currentGameSlice'
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
                <b>Дата выхода:</b> {game.info[0]}
              </li>
              <li>
                <b>Разработчик:</b> {game.info[1]}
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
        {game.descr.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </section>
  )
}

export default GamePage
