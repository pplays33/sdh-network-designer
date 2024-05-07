'use client'
import Result from "../../../components/Results/Result";


export default function ResultPage(){
    const handleSubmit = (formData) => {
        // Обрабатываем данные формы
        console.log(formData);
    }
    return (
        <>
            <Result onSubmit={handleSubmit}/>
        </>
    );
}