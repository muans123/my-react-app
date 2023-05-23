import { NewsList } from "./components/NewsList"

export const MainPage = ({ setCurrentPage, response }) => {
    return (
        <div className="main-page">
            <NewsList setCurrentPage={setCurrentPage} response={response} />
        </div>
    )
}