import { Btn, Text } from "./Button.styled"



const Button = ({onClick, followToggle, isLoading}) => {

  
  return(
<Btn type='button' onClick={onClick} followToggle={followToggle} isLoading={isLoading} disabled={isLoading} >
  <Text>{isLoading ? 'loading...' : followToggle ? "following" : "follow"}</Text>
</Btn>
  )
}

export default Button