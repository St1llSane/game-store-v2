import './not-found.scss'

function NotFound() {
  return (
    <section className="not-found">
			<img className='not-found__img' src="images/not-found.svg" alt="not-found-img" width={320} />
      <h2 className="not-found__title">Страница не найдена...</h2>
    </section>
  )
}

export default NotFound
