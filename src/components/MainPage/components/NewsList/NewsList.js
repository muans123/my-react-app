import { News } from "./components/News"

import "./style.css"

export const NewsList = ({ response, setCurrentPage }) => {
    return (
        <div className="news-container">
            {
                response?.map((currentNews, index) => <News setCurrentPage={setCurrentPage} key={index} currentNews={currentNews}></News>)
            }
        </div>
    )
}