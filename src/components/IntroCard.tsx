import s from '../components/IntroCard.module.css'

export default function Card({ name, children, id }: { id: string, name: string, children: any }) {
  function press() {
    document.body.classList.add('out')
    setTimeout(() => {
      window.location.assign(`/${name.toLowerCase()}`)
    }, 200)
  }

  return (
    <button className={s.card} onClick={press}>
      <main>
        <h1 className={`${s.title} ${id}`}>{name}</h1>
        <h2 className={s.subtitle}>
          {children}
        </h2>
        <svg className={s.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
          <path d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z" />
        </svg>
      </main>
      <footer>
        <p className={s.hint}>press anywhere to continue</p>
      </footer>
    </button>
  )
}
