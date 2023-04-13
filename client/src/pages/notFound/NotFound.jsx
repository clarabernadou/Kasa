import "./notFound.css"
import Header from "../../components/header/Header";

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="errorContainer">
                <div className="error">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <a href="/">Retourner sur la page d’accueil</a>
            </div>
        </>
      );
}
