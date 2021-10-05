import '../styles/sidebar.scss'

import { Button } from './Button'

type SideBarProps = {
  genres: GenreResponseProps[]
  selectedGenreId: number
  handleSelectGenre: (genreId: number) => void
}

export function SideBar({ genres, selectedGenreId, handleSelectGenre }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleSelectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}