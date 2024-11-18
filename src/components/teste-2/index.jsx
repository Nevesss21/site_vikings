import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import './index.scss';

export default function TesteDois({ dados }) { // Recebe dados via props
    const [graficoLinha, setGraficoLinha] = useState(false);
  
    function alternarGrafico() {
      setGraficoLinha(!graficoLinha);
    }
  
    return (
      <div className="grafico-2">
        <button className="botao-alternar" onClick={alternarGrafico}>
          Alternar para {graficoLinha ? 'Gráfico de Barras' : 'Gráfico de Linhas'}
        </button>
        <ResponsiveContainer width="100%" height={400}>
          {graficoLinha ? (
            <LineChart data={dados}>
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis dataKey="name" stroke="#d3d3d3" />
              <YAxis stroke="#d3d3d3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="renda" stroke="#82ca9d" strokeWidth={2} name="Renda Final" />
            </LineChart>
          ) : (
            <BarChart data={dados}>
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis dataKey="name" stroke="#d3d3d3" />
              <YAxis stroke="#d3d3d3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="renda" fill="#82ca9d" name="Renda Final" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    );
  }
  