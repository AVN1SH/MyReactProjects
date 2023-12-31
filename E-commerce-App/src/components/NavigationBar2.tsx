interface Props {
  deals ?: string;
}

const NavigationBar2 = ({deals} : Props) => {
  return (
    <>
      <div className="outer-navigation2">
        <div className="navigation2">
          <p>{deals}</p>
        </div>
      </div>
    </>
  )
}

export default NavigationBar2
