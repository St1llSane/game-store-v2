import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGames, gamesSelector } from '../../redux/slices/gamesSlice'
import { searchInputSelector } from '../../redux/slices/searchGamesSlice'
import './home.scss'
import HomeSkeleton from './HomeSkeleton'
import HomeItem from '../../components/HomeItem'

function Home() {
  const dispatch = useDispatch()
  const { games, status } = useSelector(gamesSelector)
  const searchInputValue = useSelector(searchInputSelector)

  const searchByInput = searchInputValue ? `name=${searchInputValue}` : ''

  useEffect(() => {
    dispatch(fetchGames({ searchByInput }))
  }, [searchByInput])

  const gamesSkeleton = [...new Array(10).keys()].map((key) => (
    <HomeSkeleton key={key} />
  ))
  const renderGames = games.map((game) => <HomeItem {...game} key={game.id} />)

  return (
    <section className="home">
      {status === 'unsuccess' ? (
        <h2>Ошибка при загрузке игр</h2>
      ) : status === 'loading' ? (
        <div className="home__wrapper">{gamesSkeleton}</div>
      ) : (
        <div className="home__wrapper">{renderGames}</div>
      )}
      {/* <GenresList /> */}
    </section>
  )
}

export default Home

// [
//  {
//   "id": "1",
//   "img": "images/items/forza5.jpg",
//   "name": "Forza Horizon 5",
//   "genres": [
//    "Гонки",
//    "Симулятор",
//    "Открытый мир"
//   ],
//   "video": "https://www.youtube.com/embed/YY2GX_7wR7Y",
//   "price": 1800
//  },
//  {
//   "id": "2",
//   "img": "images/items/codmw2022.jpg",
//   "name": "Call of Duty MW2 (2022)",
//   "genres": [
//    "Шутер",
//    "Экшен"
//   ],
//   "video": "https://www.youtube.com/embed/YY2GX_7wR7Y",
//   "price": 2990
//  },
//  {
//   "id": "3",
//   "img": "images/items/callistoprotocol.jpg",
//   "name": "The Callisto Protocol",
//   "genres": [
//    "Хоррор",
//    "Шутер",
//    "Космос"
//   ],
//   "video": "https://www.youtube.com/embed/YY2GX_7wR7Y",
//   "price": 2200
//  },
//  {
//   "id": "4",
//   "img": "images/items/eldenring.jpg",
//   "name": "Elden Ring",
//   "genres": [
//    "RPG",
//    "Открытый мир",
//    "Экшен"
//   ],
//   "video": "https://www.youtube.com/embed/YY2GX_7wR7Y",
//   "price": 3200
//  },
//  {
//   "id": "5",
//   "img": "images/items/gta5.jpg",
//   "name": "Grand Theft Auto V",
//   "genres": [
//    "Боевик",
//    "Экшен",
//    "Открытый мир"
//   ],
//   "video": "https://www.youtube.com/embed/YY2GX_7wR7Y",
//   "price": 1000
//  },
//  {
//   "id": "6",
//   "img": "images/items/mortal-shell.jpg",
//   "name": "Mortal Shell",
//   "genres": [
//    "RPG",
//    "Экшен"
//   ],
//   "video": "https://www.youtube.com/embed/YY2GX_7wR7Y",
//   "price": 800
//  },
//  {
//   "id": "7",
//   "img": "images/items/deusex-hr.jpg",
//   "name": "Deus Ex: Human Revolution",
//   "genres": [
//    "RPG",
//    "Боевик",
//    "Экшен"
//   ],
//   "video": "https://www.youtube.com/embed/YY2GX_7wR7Y",
//   "price": 350
//  },
//  {
//   "id": "8",
//   "img": "images/items/nomanssky.jpeg",
//   "name": "No Man`s Sky",
//   "genres": [
//    "Экшен",
//    "Открытый мир",
//    "Приключение"
//   ],
//   "video": "https://www.youtube.com/embed/YY2GX_7wR7Y",
//   "price": 990
//  },
//  {
//   "id": "9",
//   "img": "images/items/spiderman-remastered.jpeg",
//   "name": "Marvel`s Spider-Man Remastered",
//   "genres": [
//    "Боевик",
//    "Экшен"
//   ],
//   "video": "https://www.youtube.com/embed/YY2GX_7wR7Y",
//   "price": 1990
//  }
// ]
