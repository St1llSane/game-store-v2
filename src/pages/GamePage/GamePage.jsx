import { useSelector } from 'react-redux'
import { currentGameSelector } from '../../redux/slices/gamesSlice'
import InCartBtn from '../../components/UI/InCartBtn'
import PageTop from '../../components/UI/PageTop'
import './game-page.scss'

function GamePage() {
  const game = useSelector(currentGameSelector)

  return (
    <section className="game-page">
      <PageTop>Страница игры</PageTop>
      <div className="game-page__content">
        <div className="game-page__content-left">
          <div className="game-page__content-left_video"></div>
          {/* <iframe
				width="560"
				height="315"
				src={game.video}
				title="YouTube video player"
				allowFullScreen
			></iframe> */}
        </div>
        <div className="game-page__content-right">
          <h4 className="game-page__content-right_name">{game.name}</h4>
          <p className="game-page__content-right_descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            temporibus harum voluptatibus nihil quia sit atque et beatae
            architecto consequuntur!
          </p>
          <ul className="game-page__content-right_genres">
            <h6>Жанры:</h6>
            {game.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <div className="game-page__content-right_bottom">
						<span>{game.price} рублей</span>
            <InCartBtn game={game} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GamePage
