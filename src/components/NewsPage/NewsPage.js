import { NewsContainer } from "./components/NewsContainer/NewsContainer";

export const NewsPage = ({ currentNews }) => {
    return (
        <>
            <NewsContainer currentNews={currentNews[0]} />
        </>
    )
}