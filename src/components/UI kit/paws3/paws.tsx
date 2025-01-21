import { useEffect, useRef } from 'react';
import img from '../../../../img/secondpaws.png'
import Image from 'next/image';
import styles from "./paws.module.css"

const StepAnimation = ({ steps }) => {
    const ref = useRef(null);

    // Функция для запуска анимации
    const startAnimation = () => {
        if (!ref.current) return;

        const element = ref.current;
        let currentStep = 0;

        const animate = () => {
            if (currentStep >= steps.length) {
                currentStep = 0;
            }

            element.style.transform = `translateY(${steps[currentStep]}vh)`;
            setTimeout(() => {
                currentStep++;
                requestAnimationFrame(animate);
            }, 2000); // Задержка между шагами
        };

        setTimeout(() => {
            animate();
        }, 1300); // Задерживаем старт анимации на указанное количество миллисекунд
    };


    useEffect(() => {
        startAnimation(); // Запускаем анимацию при монтировании компонента
    }, []);


    return (
        <div style={{ position: 'relative', height: '100vh', width: '200px' }}>
            <Image
                ref={ref}
                src={img} // Укажите путь до вашего PNG-файла
                alt="Animal paw"
                className={styles.fadeInOut}
                style={{
                    width: '300px', // Размер лапки
                    height: 'auto',
                    transformOrigin: 'bottom center', // Центр вращения внизу
                    position: 'absolute', // Позволяет позиционировать относительно родителя
                    bottom: '0', // Начинаем анимацию от нижней части контейнера
                    left: '70vw',
                    zIndex: 1,

                }}
            />
        </div>
    );
};

export default function Paw3() {
    const steps = Array.from({ length: 10 }, (_, i) => -(i * 15)); // Меньшие шаги анимации

    return (
        <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <StepAnimation steps={steps} />
        </div>
    );
}