export const Rede = ({link, texto, icon}: any) => {
  return (
    <div>
      <a href={link}>
        <button type="button">
          <i className={icon}></i>
          <br />
          {texto}
        </button>
      </a>
    </div>
  )
}