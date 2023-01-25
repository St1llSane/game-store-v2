import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGames, gamesSelector } from '../../redux/slices/gamesSlice'
import { searchInputSelector } from '../../redux/slices/searchGamesSlice'
import { activeFilterSelector } from '../../redux/slices/filtersSlice'
import {
  paginationSelector,
  setFirstGameOnPageIndex,
  setLastGameOnPageIndex,
} from '../../redux/slices/paginationSlice'
import './home.scss'
import HomeSkeleton from './HomeSkeleton'
import HomeItem from '../../components/HomeItem'
import Filters from '../../components/Filters'
import Pagination from '../../components/UI/Pagination'

function Home() {
  const dispatch = useDispatch()
  const { games, status } = useSelector(gamesSelector)
  const searchInputValue = useSelector(searchInputSelector)
  const activeFilter = useSelector(activeFilterSelector)
  const { currentPage, lastGameOnPageIndex, firstGameOnPageIndex } =
    useSelector(paginationSelector)

  const searchByInput = searchInputValue ? `name=${searchInputValue}` : ''
  const searchByFilter = activeFilter ? `${activeFilter.filterProp}` : ''

  useEffect(() => {
    dispatch(fetchGames({ searchByInput, searchByFilter }))
    dispatch(setLastGameOnPageIndex())
    dispatch(setFirstGameOnPageIndex())
  }, [searchByInput, searchByFilter, currentPage])

  const renderSkeleton = [...new Array(9).keys()].map((key) => (
    <HomeSkeleton key={key} />
  ))

  const currentGames = games.slice(firstGameOnPageIndex, lastGameOnPageIndex)

  const renderGames = currentGames.map((game) => (
    <HomeItem game={game} key={game.id} />
  ))

  return (
    <section className="home">
      {status === 'unsuccess' ? (
        <h2>Ошибка при загрузке игр</h2>
      ) : status === 'loading' ? (
        <div className="home__wrapper">{renderSkeleton}</div>
      ) : (
        <div className="home__wrapper">{renderGames}</div>
      )}
      <Filters />
      <Pagination />
    </section>
  )
}

export default Home
