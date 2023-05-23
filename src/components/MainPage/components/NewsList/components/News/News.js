import { React } from 'react';

import "./style.css"

export const News = ({ currentNews, setCurrentPage }) => {

    let dateEnd = currentNews['publishedAt'].indexOf("T");
    let dateOfPosting = currentNews['publishedAt'].substring(0, dateEnd);
    let timeEnd = currentNews['publishedAt'].indexOf("Z");
    let timeOfPosting = currentNews['publishedAt'].substring(dateEnd + 1, timeEnd);


    console.log(currentNews);

    return (
        <div className='current-news'>
            <h3 className='news-title' onClick={() => setCurrentPage(currentNews.title)}>{currentNews.title}</h3>
            <div className='main'>
                <div className='main-img'>
                    <img src={currentNews.image}></img>
                </div>
                <div className='main-description'>
                    {currentNews.description}
                </div>
            </div>
            <div className='footer'>
                <div className='author'>Пишет <a href={currentNews.source.url}>{currentNews.source.name}</a></div>
                <div className='date'>Издано: {dateOfPosting} числа в {timeOfPosting} </div>
                <a href={currentNews.url}>Сcылка на оригинал</a>
            </div>
        </div>
    )
}