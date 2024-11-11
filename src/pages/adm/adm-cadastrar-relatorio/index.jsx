import { useState } from "react";
import NavAdm from "../../../components/Nav-adm";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function CadastrarRelatorio() {

  return (
    <div className="cadastrar-relatorio">
      <NavAdm />
      <div className="secao-cadastro">
        <div className="cadastrar">


          <div className="botoes">
            <Link to="/adm-realizados">
              <button>Ver Relatórios</button>
            </Link>
            <Link to='/adm-relatorio'>
              <button>Criar novo Relatório</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
