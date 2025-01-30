import React from "react";
import { findLongestWord, countOccurrences, calculateTotalGrades } from "./exercices";
import { searchById } from "./fonction";

const TestFunctions = () => {
    const words = ["React", "JavaScript","Programmatioo", "Programmation", "Développement"];
    const array = [["a", "b", "a"], ["c", "a", "b"], ["b", "c", "c"]];
    const grades = [45, 30, 80, 50, 90];
    let lastId = 0;
    const tab = [
        { id: ++lastId, name: "Alice" },
        { id: ++lastId, name: "Bob" },
        { id: ++lastId, name: "Charlie" }
    ];

    return (
        <div>
            <h1>Test des Fonctions</h1>
            <p><strong>Mot le plus long :</strong> {JSON.stringify(findLongestWord(words))}</p>
            <p><strong>Occurrences :</strong> {JSON.stringify(countOccurrences(array))}</p>
            <p><strong>Total des notes :</strong> {calculateTotalGrades(grades)}</p>
            <p><strong>Recherche ID 2 :</strong> {JSON.stringify(searchById(tab, 2))}</p>
            <p><strong>Recherche ID 5 :</strong> {JSON.stringify(searchById(tab, 5))}</p>
        </div>
    );
};

export default TestFunctions;
