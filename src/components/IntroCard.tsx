import s from '../components/IntroCard.module.css'

export default function Card({ name }: { name: string }) {
  return (
    <a href={`/${name.toLowerCase()}`} class={s.card}>
      <h1 class={`${s.title} text-white text-5xl font-extralight`}>{name}</h1>
      <p class={s.more}>press arrow to see more</p>
      <svg class={s.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z" />
      </svg>
    </a>
  )
}
