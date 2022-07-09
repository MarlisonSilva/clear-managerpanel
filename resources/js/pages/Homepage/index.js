import { React } from "react";
import { Link } from "@inertiajs/inertia-react";

const Homepage = () => {
    return (
        <div>
            <h1>Gerência - CLEAR</h1>
            <p>Gerencie seus caminhões de lixo com qualidade e organização.</p>
            <Link href="/page" method="get" as="a" type="button">Abrir uma página.</Link>
        </div>
    );
};
export default Homepage;