import './home.scss'
import HomeItem from '../../components/HomeItem'

function Home() {
  return (
    <section className="home">
      <div className="home__wrapper">
        <HomeItem />
      </div>
      {/* <GenresList /> */}
    </section>
  )
}

export default Home
