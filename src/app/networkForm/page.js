'use client'
import NetworkForm from '../../../components/NetworkForm/NetworkForm';


export default function NetworkSetForm(){
    const handleSubmit = (formData) => {
        // Обрабатываем данные формы
        console.log(formData);
    }

    return (
        <>
        
            <NetworkForm onSubmit={handleSubmit}/>
        </>
    );
}