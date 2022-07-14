import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
    const [studentName, setStudentName] = useState(""); // valor inicial da var
    const [students, setStudents] = useState([]);

    function handleAddNewStudent() {
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }),
        };

        // conteudo do estado anterior + o novo estudante
        // ... (spread operator). 'despejar' o que tinha no outro vetor e colocar no novo
        setStudents((previewState) => [...previewState, newStudent]);
    }

    return (
        <>
            <div className="container">
                <h1>Lista de Presença</h1>
                <h2>Nome: {studentName}</h2>
                <input
                    type="text"
                    placeholder="Digite um nome"
                    onChange={(event) => setStudentName(event.target.value)}
                    // pegando o conteudo atual do input, e atualizando o setStudentName
                />
                <button type="button" onClick={handleAddNewStudent}>
                    Adicionar
                </button>

                {students.map((student) => (
                    <Card name={student.name} time={student.time} />
                ))}
            </div>
        </>
    );
}
