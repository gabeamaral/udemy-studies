import { useState } from 'react'

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName
}) {
  const [editing, setEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  function handleEditing() {
    setEditing(isEditing => !isEditing)

    if (editing) {
      onChangeName(symbol, playerName)
    }
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!editing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{editing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
