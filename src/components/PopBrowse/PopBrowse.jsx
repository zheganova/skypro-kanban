import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { Calendar } from "../Calendar/Calendar";
import { useParams } from "react-router-dom";
import { cardList } from "../../data";
import {
  PopBrowseStyled,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  PopBrowseWrap,
  PopBrowseForm,
  FormBrowseBlock,
  FormBrowseArea,
  Status,
  StatusP,
  StatusThemes,
  StatusTheme,
  PopBrowseButtons,
  ThemeCategory,
  CategoryTheme,
} from "./PopBrowse.styled";

export const PopBrowse = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const task = useMemo(() => {
    // useParams() возвращает ID как строку, а в cardList ID - числа.
    // Поэтому нужно преобразовать id к числу с помощью Number(id).
    if (!id) {
      // Добавляем явную проверку, если id не предоставлен в URL
      return null; // Возвращаем null, если id отсутствует
    }
    return cardList.find((card) => card.id === Number(id));
  }, [id]); // Пересчитываем только когда id из URL меняется

  if (!task) {
    return null;
  }

  const handleClose = () => navigate("/");

  return (
    <PopBrowseStyled onClick={handleClose} id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>Название задачи</PopBrowseTitle>
              <CategoryTheme className="_orange _active-category">
                <p className="_orange">{task.title}</p>
              </CategoryTheme>
            </PopBrowseTopBlock>
            <Status>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <StatusTheme className="_hide">
                  <p>Без статуса</p>
                </StatusTheme>
                <StatusTheme className="_gray">
                  <p className="_gray">Нужно сделать</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>В работе</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Тестирование</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Готово</p>
                </StatusTheme>
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <ThemeCategory>
              <p className="categories__p subttl">Категория</p>
              <CategoryTheme className="_orange _active-category">
                <p className="_orange">{task.topic}</p>
              </CategoryTheme>
            </ThemeCategory>
            <PopBrowseButtons className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button
                onClick={handleClose}
                className="btn-browse__close _btn-bg _hover01"
              >
                Закрыть
              </button>
            </PopBrowseButtons>
            <PopBrowseButtons className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button
                onClick={handleClose}
                className="btn-edit__close _btn-bg _hover01"
              >
                Закрыть
              </button>
            </PopBrowseButtons>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseStyled>
  );
};
