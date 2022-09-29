export const Rede = ({link, texto, icon, click}: any) => {
  return (
    <div>
      <a href={link}>
        <button type="button" onClick={click}>
          <i className={icon}></i>
          <br />
          {texto}
        </button>
      </a>
    </div>
  )
}