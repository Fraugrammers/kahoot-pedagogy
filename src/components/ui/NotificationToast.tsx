import React, { useEffect, useState } from 'react';
import { Toast } from 'flowbite-react';
import { HiExclamation, HiCheckCircle, HiInformationCircle, HiXCircle } from 'react-icons/hi';

type NotificationType = 'success' | 'danger' | 'primary' | 'alert';

interface NotificationToastProps {
    type?: NotificationType;
    message: string;
    duration?: number;
    onClose?: () => void;
}

const typeStyles: Record<NotificationType, { bgColor: string; textColor: string; icon: JSX.Element }> = {
    success: {
        bgColor: 'bg-green-100 dark:bg-green-700',
        textColor: 'text-green-500 dark:text-green-200',
        icon: <HiCheckCircle className="h-5 w-5" />,
    },
    danger: {
        bgColor: 'bg-red-100 dark:bg-red-700',
        textColor: 'text-red-500 dark:text-red-200',
        icon: <HiXCircle className="h-5 w-5" />,
    },
    primary: {
        bgColor: 'bg-blue-100 dark:bg-blue-700',
        textColor: 'text-blue-500 dark:text-blue-200',
        icon: <HiInformationCircle className="h-5 w-5" />,
    },
    alert: {
        bgColor: 'bg-orange-100 dark:bg-orange-700',
        textColor: 'text-orange-500 dark:text-orange-200',
        icon: <HiExclamation className="h-5 w-5" />,
    },
};

const NotificationToast: React.FC<NotificationToastProps> = ({ type = 'primary', message, duration = 4000, onClose }) => {
    const { bgColor, textColor, icon } = typeStyles[type];
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
                setIsVisible(false);
                if (onClose) onClose();
            }, 500);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`fixed top-4 right-4 z-50 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <Toast>
                <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${bgColor} ${textColor}`}>
                    {icon}
                </div>
                <div className="pl-4 text-sm font-normal">{message}</div>
                <Toast.Toggle />
            </Toast>
        </div>
    );
};

export default NotificationToast;