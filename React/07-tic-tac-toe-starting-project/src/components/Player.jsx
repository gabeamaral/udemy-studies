import { useState } from 'react'

export default function Player({ name, symbol }) {
  const [editing, setEditing] = useState(false)

  function handleEditing() {
    setEditing(isEditing => !isEditing)
  }

  return (
    <li>
      <span className="player">
        {!editing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" placeholder={name} required />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!editing ? (
        <button onClick={handleEditing}>Edit</button>
      ) : (
        <button onClick={handleEditing}>Save</button>
      )}
    </li>
  )
}
