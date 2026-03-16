// ArticleList Component
// Receives an array of blog posts and renders multiple Article components

import Article from "./Article"

function ArticleList({ posts }) {

  const articleComponents = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    )
  })

  return (
    <main>
      {articleComponents}
    </main>
  )
}

export default ArticleList