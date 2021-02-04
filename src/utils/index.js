export const validateEmail = (str) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str);

const apiBase = "http://localhost:3000/api";
// const apiBase = "/api";

const callApi = (url, method = "GET", data) =>
    new Promise((resolve, reject) => {
        fetch(
            `${apiBase}${url}`,
            method && data
                ? {
                      method,
                      headers: {
                          "Content-Type": "application/json;charset=utf-8",
                      },
                      body: JSON.stringify(data),
                  }
                : undefined
        )
            .then((data) => data.json())
            .then((data) => resolve({ data }))
            .catch((err) => reject({ err }));
    });

export default callApi;

export const sendEmail = (data) => callApi("/send-email", "POST", data);

export const fetchPortfolioData = () => callApi("/portfolio");
