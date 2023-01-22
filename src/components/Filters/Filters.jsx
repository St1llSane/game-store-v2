import { useState, useEffect } from 'react'
import {
  HiArrowNarrowUp,
  HiArrowNarrowDown,
  HiAdjustments,
} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import {
  activeFilterSelector,
  resetFilters,
  setActiveFilter,
} from '../../redux/slices/filtersSlice'
import './filters.scss'

function Filters() {
  const dispatch = useDispatch()
  const [isMediumScreen, setIsMediumScreen] = useState(false)
  const filterItems = [
    {
      name: 'Дороже',
      icon: <HiArrowNarrowUp />,
      filterProp: '&sortBy=price&order=desc',
    },
    {
      name: 'Дешевле',
      icon: <HiArrowNarrowDown />,
      filterProp: '&sortBy=price&order=asc',
    },
    {
      name: 'Популярное',
      icon: <HiArrowNarrowUp />,
      filterProp: '&sortBy=popularity&order=desc',
    },
    {
      name: 'Непопулярное',
      icon: <HiArrowNarrowDown />,
      filterProp: '&sortBy=popularity&order=asc',
    },
  ]
  const activeFilter = useSelector(activeFilterSelector)

  const setActiveFilterHandler = (filter) => {
    const { icon, ...filterCopy } = filter
    dispatch(setActiveFilter(filterCopy))
  }

  const resetFiltersHandler = () => {
    dispatch(resetFilters())
  }

  useEffect(() => {
    function resizeScreenHandler() {
      if (window.innerWidth <= 1200) {
        setIsMediumScreen(true)
      } else {
        setIsMediumScreen(false)
      }
    }
    resizeScreenHandler()

    window.addEventListener('resize', resizeScreenHandler)
    return () => window.removeEventListener('resize', resizeScreenHandler)
  }, [])

  return (
    <div className="filters">
      {isMediumScreen ? (
        <div className="filters__toggle">
          <button>
            <HiAdjustments />
          </button>
          <h2>Фильтры</h2>
        </div>
      ) : null}
      <div className="filters__wrapper">
        <h3 className="filters__title">Фильтры</h3>
        <ul className="filters__list">
          <li className="filters__list-item">
            <button
              className="filters__list-item_btn"
              onClick={resetFiltersHandler}
            >
              Сбросить
            </button>
          </li>
          {filterItems.map((filter) => (
            <li className="filters__list-item" key={filter.name}>
              <button
                className={`filters__list-item_btn ${
                  activeFilter.name === filter.name
                    ? 'filters__list-item_btn--active'
                    : ''
                }`}
                onClick={() => setActiveFilterHandler(filter)}
              >
                {filter.icon}
                {filter.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Filters
