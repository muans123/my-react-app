const API_KEY = 'a2f5fe8d05e9816222d3a0bb6741dd1f';
const Api_URL = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + API_KEY;


export class ApiConnect {

    static async sendRequest() {
        let startTime = new Date();
        const proxyResponse = await fetch(Api_URL);
        const unwrappedResponse = await proxyResponse.json();
        return {
            response: unwrappedResponse,
            requestTime: new Date() - startTime,
        };
    }
}