export const Square = ({children, isSelected, updateboard, position}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateboard(position)
  }
  
  return (
    <div onClick={handleClick} className={className} key={position}>
      {children}
    </div>
  )
}