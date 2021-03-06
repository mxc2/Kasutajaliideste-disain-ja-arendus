import Info from "./Info";

function InfoList(props) {

  return(<div>
    {props.infos.map(info=> (
      <Info 
      key={info.id}
      header={info.header}
      text={info.text}
      text2={info.text2}
      img={info.img}
      button={info.button}
      link={info.link}
      location={info.location}/>
    ))}
  </div>); 
}

export default InfoList;