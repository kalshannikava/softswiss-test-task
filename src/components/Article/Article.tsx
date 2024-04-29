import './Article.scss';

type ArticleProps = {
  visibleText: string,
  hiddenText: string,
  title: string,
}

const Article = ({
  visibleText,
  hiddenText,
  title,
}: ArticleProps) => {
  return <article className='article'>
    <input type='checkbox' hidden className='article__read-more-checkbox' id='read-more-checkbox'></input>
    <h4 className='article__title'>{title}</h4>
    <p className='article__visible-text'>{visibleText}</p>
    <p className='article__hidden-text'>{hiddenText}</p>
    <label htmlFor='read-more-checkbox' className='article__read-more'>Read More</label>
    <label htmlFor='read-more-checkbox' className='article__read-less'>Read Less</label>
  </article>;
};

export default Article;
