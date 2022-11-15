export const Rede = ({ link, texto, icon, click }: any) => {
  return (
    <div>
      <a href={link}>
        <button type="button" onClick={click}>
          {icon}
          <br />
          {texto}
        </button>
      </a>
    </div>
  );
};
