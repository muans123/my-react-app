import "./style.css"

export const NewsContainer = ({ currentNews }) => {
    let dateEnd = currentNews['publishedAt'].indexOf("T");
    let dateOfPosting = currentNews['publishedAt'].substring(0, dateEnd);
    let timeEnd = currentNews['publishedAt'].indexOf("Z");
    let timeOfPosting = currentNews['publishedAt'].substring(dateEnd + 1, timeEnd);

    return (
        <>
            <div className="block__first">
                <div className="first-container">
                    <div className='first-container__title'>
                        <h1>NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS</h1>
                    </div>
                    <div className="content-wrapper">
                        <div className="content-info">
                            <div className="content-info__title">
                                <h2>{currentNews.title}</h2>
                            </div>
                            <div className="content-info__description">
                                <p>{currentNews.description}</p>
                            </div>
                        </div>
                        <div className="content-image">
                            <img className="image" src={currentNews.image}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block__second">
                <div className="second-container">
                    <div className="second-container__name">
                        <h2>Пишет <a href={currentNews.source.url}>{currentNews.source.name}</a></h2>
                    </div>
                    <div className="second-container__content">
                        <div className="second-content">
                            <div className="second-content__img">
                                <img className="image" src={currentNews.image}></img>
                            </div>
                            <div className="second-content__title">
                                <p>{currentNews.content}</p>
                                <span>Написано {dateOfPosting} числа в {timeOfPosting}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}