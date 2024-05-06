'use client'
import CalculationForm from '../../../components/CalculationForm/CalculationForm';

export default function CalculationPage() {
    
    const handleSubmit = (formData) => {
        // Обрабатываем данные формы
        console.log(formData);
    }

    return (
        <div>
            <CalculationForm onSubmit={handleSubmit}/>
        </div>
    );
}