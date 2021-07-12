import "./Main.css";
import React, {useState} from "react";

import cardJavascript from "../assets/cards/js.png";
import cardJava from "../assets/cards/java.png";
import cardAws from "../assets/cards/aws.png";


   
 export default (props) =>
  <div className="card">
    <div className="card-aws">
      <img src={cardAws} alt="Foto Aws" />
      <span className="title-aws">Trilha AWS</span>
      <p className="subtitle-aws">Desenvolva suas habilidades e prepare-se para usar a Nuvem AWS com a ajuda do AWS</p>
      <button className="btn-card-aws"  >detalhes</button>
      
    </div>
    <div className="card-js">
      <img src={cardJavascript} alt="Foto JavaScript" />
      <span className="title-js">Trilha JS</span>
      <p className="subtitle-js">Venha aprender, se atualizar e obter mais conhecimento em uma das linguagem...</p>
      <button className="btn-card-js">detalhes</button>
    </div>
    <div className="card-java">
      <img src={cardJava} alt="Foto java" />
      <span className="title-java" >Trilha JAVA</span>
      <p className="subtitle-java">Cursos de Java voltados para programadores iniciantes e experientes na área.</p>
      <button className="btn-card-java">detalhes</button>
    </div>
  </div>

 
 