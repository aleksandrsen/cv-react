import React from "react";
import "./index.css";
import "../../scss/style.scss";
import Photo from "../photo";

const Index = (props) => (
    <main>
        <div className="container">
            <div className="row">
                <div className="col-1">
                    <Photo />
                </div>
                <div className="col-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda esse exercitationem iusto,
                    maiores modi molestias quae rerum sed. Accusamus accusantium adipisci aut culpa doloremque, eaque
                    eos laboriosam magni porro quibusdam.
                </div>
            </div>
        </div>
    </main>
);

export default Index;
