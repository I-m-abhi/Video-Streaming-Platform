import Button from "./Button";

const ButtonsList = () => {
  const buttonList = ['All','Gaming','Mixes','Mukbang','Masala Films','Music','Superhero Movies','Motu Patlu','News'];
  
  return (
    <div className="flex">
      {buttonList.map((buttonName, id)=><Button key={id} buttonName={buttonName}/>)}
    </div>
  )
}

export default ButtonsList;
