import "./Square.css"

type Player = "X" | "O" | "BOTH" |null

export interface SquareProps {
    winner: Player
    value: Player
    onClick: () => void
}

export const Square = ({ value, onClick, winner}: SquareProps) => {
    if (!value){
        return <button className="square" onClick={onClick} disabled={Boolean(winner)}/>
    }
    return (
        <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
      {value}
    </button>
    )
}

