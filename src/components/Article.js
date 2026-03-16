// Article Component
// Displays an individual blog post including title, date, and preview

function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article