interface Props {
  data : string;
}
const list = ({data} : Props) => {
  return (
    <div>
      {data}
    </div>
  )
}

export default list
