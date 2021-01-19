export const validateEmail = (str) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str);

export const sendEmail = (data) => new Promise((resolve) => setTimeout(() => resolve({}), 1500));
