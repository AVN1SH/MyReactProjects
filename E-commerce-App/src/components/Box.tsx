interface Props{
  boxImage : string;
}

const Box = ({boxImage} : Props) => {
  return (
    <div className="box">
      <img className= "box-image" src = {boxImage} />
      <div>
        Hello..!
      </div>
    </div>
  )
}

export default Box