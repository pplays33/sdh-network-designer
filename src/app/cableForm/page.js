'use client'
import CableForm from '../../../components/CableForm/CableForm';

export default function CableSetForm(){
    const handleSubmit = (formData) => {
        // Обрабатываем данные формы
        console.log(formData);
    }

    return (
        <>
            <CableForm onSubmit={handleSubmit}/>
        </>
    );
}