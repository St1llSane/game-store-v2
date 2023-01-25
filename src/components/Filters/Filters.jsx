import {
  HiArrowNarrowUp,
  HiArrowNarrowDown,
  HiAdjustments,
} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { setIsFiltersVisible } from '../../redux/slices/filtersSlice'
import {
  activeFilterSelector,
  resetFilters,
  setActiveFilter,
  visibilityFiltersSelector,
} from '../../redux/slices/filtersSlice'
import './filters.scss'

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

function Filters() {
  const dispatch = useDispatch()
  const activeFilter = useSelector(activeFilterSelector)
  const isFiltersVisible = useSelector(visibilityFiltersSelector)

  const setActiveFilterHandler = (filter) => {
    const { icon, ...filterCopy } = filter
    dispatch(setActiveFilter(filterCopy))
  }

  const resetFiltersHandler = () => {
    dispatch(resetFilters())
  }

  const filtersToggleBtnHandler = () => {
    dispatch(setIsFiltersVisible(!isFiltersVisible))
  }

  return (
    <div className="filters">
      <div className="filters__toggle">
        <button onClick={filtersToggleBtnHandler}>
          <HiAdjustments />
        </button>
        <h2>Фильтры</h2>
      </div>

      <div className={`filters__wrapper ${isFiltersVisible ? '' : 'hidden'}`}>
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
