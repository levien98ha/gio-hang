import { useEffect } from "react";

export default function ScrollToTop() {

  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)

}, []);

  return null;
}