// Header Component
// Displays the blog title that is passed down from App via props

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  )
}

export default Header