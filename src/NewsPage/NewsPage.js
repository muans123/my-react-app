import { testResponse } from "../../constants/test-data";
import { Header } from "../Header";
import { NewsContainer } from "./components/NewsContainer/NewsContainer";

export const NewsPage = ({ newsTitle }) => {

    let currentNews = testResponse.filter(currentNews => currentNews.title === newsTitle);

    return (
        <>
            <NewsContainer currentNews={currentNews[0]} />
        </>
    )
}