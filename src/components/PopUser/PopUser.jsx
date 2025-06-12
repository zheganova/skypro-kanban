export const PopUser = ({ isVisible, toggleVisibility }) => {
  // Принимаем пропсы isVisible и toggleVisibility
  const popUserStyle = {
    display: isVisible ? "block" : "none",
  };
  return (
    <div
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
      style={popUserStyle}
    >
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <button type="button" className="_hover03">
        {/* При клике на "Выйти" также закрываем PopUser, если нужно, или переходим по ссылке */}
        {/* В данном случае, чтобы закрыть окно при клике на "Выйти", можно вызвать toggleVisibility */}
        <a href="#popExit" onClick={toggleVisibility}>
          Выйти
        </a>
      </button>
    </div>
  );
};
